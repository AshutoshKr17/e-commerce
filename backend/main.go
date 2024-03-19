package main

import (
	"context"
	"log"

	"github.com/AshutoshKr17/e-commerce/backend/db"
	"github.com/AshutoshKr17/e-commerce/backend/routes"
	"github.com/AshutoshKr17/e-commerce/backend/views"
	"github.com/gin-gonic/gin"
)

func main() {
	ctx := context.Background()
	r := gin.Default()
	gin.SetMode(gin.ReleaseMode)
	db.ConnectDatabase()
	err := db.DB.Ping(ctx,  nil)
	if err != nil {
		log.Fatalf("Error occured: %v", err)
	}
	log.Println("Database Connected")
	
	log.Println(views.GetUsers())

	r.GET("/users", routes.GetAllUsers)
	r.POST("/createUser", routes.CreateUser)
	r.POST("/loginUser", routes.LoginUser)
	r.Run()
}