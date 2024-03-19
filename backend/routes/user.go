package routes

import (
	"log"
	"net/http"
	"os"
	"time"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"github.com/dgrijalva/jwt-go"
	"github.com/AshutoshKr17/e-commerce/backend/models"
	"github.com/AshutoshKr17/e-commerce/backend/views"
)

var secretKey = []byte(os.Getenv("my-secret"))
var loggedInUsers = make(map[string]string)	

type CustomClaim struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

func GetAllUsers(c *gin.Context) {
	var users []models.User
	users = views.GetUsers()
	c.JSON(200, gin.H{"users": users})
}

func CreateUser(c *gin.Context) { 
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
	bytes, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	if err != nil {
		log.Println("Error occured: ", err)
	}
	user.Password = string(bytes)
	user.CreatedAt = time.Now()
	views.CreateUser(user)
	c.JSON(http.StatusOK, user)
}

func LoginUser(c *gin.Context) {
	
	var cred models.Credential
	
	if err := c.ShouldBindJSON(&cred); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Bad Creds": err.Error(),
		})
		return
	}

	user := views.LoginUser(cred)
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(cred.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error:": "Email not found or wrong password",
		})
		return
	}
	expirationTime := time.Now().Add(1 * time.Hour) // Token expiration time (1 day)
	claims := &CustomClaim{
		Email: cred.Email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secretKey)
	
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating token"})
		return
	}

	// Store the token in the map
	loggedInUsers[cred.Email] = tokenString

	c.JSON(http.StatusOK, gin.H{"token": tokenString})

}