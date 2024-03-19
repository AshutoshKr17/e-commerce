package middleware

import (
	"os"

	"github.com/dgrijalva/jwt-go"
	"github.com/google/martian/v3/log"
)

func VerifyToken(tokenString string) bool{
	if tokenString == "" {
		log.Errorf("Token string empty: ")
		return false
	}

	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("my-secret")), nil 
	})
	if err != nil {
		log.Errorf("Error occured: ", err)
	}
	if !token.Valid {
		return false
	}

	return true
}