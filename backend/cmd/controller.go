package cmd

import (
	controller "go-jwt/internal/controller"
	"go-jwt/internal/infrastructure/driver"
	repo "go-jwt/internal/infrastructure/repository"
	usecase "go-jwt/internal/usecase"

	"github.com/gin-gonic/gin"
)

func (s server) SetupControllers() {

	s.router.Use(gin.Logger())
	s.router.Use(gin.Recovery())

	db := driver.ConnectMongoDB()

	// init collection of mongodb
	userCollection := db.Client.Database("Library-Management-Database").Collection("User")
	bookCollection := db.Client.Database("Library-Management-Database").Collection("Book")

	// init repository
	userRepo := repo.NewUserRepo(userCollection)
	bookRepo := repo.NewBookRepo(bookCollection)

	// init usecase
	userUsecase := usecase.NewUserUsecase(userRepo)
	bookUsecase := usecase.NewBookUsecase(bookRepo)

	// init controller
	controller.SetupUserRoutes(s.router, userUsecase)
	controller.SetupBookRoutes(s.router, bookUsecase)
}
