package views

import (
	"context"
	"log"

	"github.com/AshutoshKr17/e-commerce/backend/db"
	"github.com/AshutoshKr17/e-commerce/backend/models"
	"go.mongodb.org/mongo-driver/bson"
)

func GetUsers() []models.User{ 
	ctx := context.Background()
	var users []models.User
	collection := db.DB.Database("test").Collection("users")
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		log.Println(err)
	}
	defer cursor.Close(ctx)
	if err := cursor.All(ctx, &users); err != nil {
		log.Println(err)
	}
	return users
}

func CreateUser(user interface{}) {
	ctx := context.Background()
	collection, err := db.DB.Database("test").Collection("users").InsertOne(ctx, user)
	if err != nil {
		log.Println(err)
	}
	log.Println("Collection: {}", collection)
}

func LoginUser (creds models.Credential) models.User{
	ctx := context.Background()
	var user models.User
	collection := db.DB.Database("test").Collection("users")
	err := collection.FindOne(ctx, bson.M{"email": creds.Email}).Decode(&user)
	if err != nil {
		log.Println("Error Occured: {}", err)
	}
	return user
}

func GetIdByEmail (email string) string{
	ctx := context.Background()
	var user models.User
	collection := db.DB.Database("test").Collection("users")
	err := collection.FindOne(ctx, bson.M{"email": email}).Decode(&user)
	if err != nil {
		log.Println("Error occured: ", err)
	}

	return string(user.ID.Hex())
}