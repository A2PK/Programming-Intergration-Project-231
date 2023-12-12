package main

import (
	"go-jwt/internal/controller"
	//models "go-jwt/internal/entity"
	"go-jwt/internal/infrastructure/driver"
	//repolize "go-jwt/internal/infrastructure/repository/repoz"
	//"time"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	mongoDB := driver.ConnectMongoDB()
	// userDo := repolize.NewUserRepo(mongoDB.Client.Database("Library-Management-Database"))
	// bookDo := repolize.NewBookRepo(mongoDB.Client.Database("Library-Management-Database"))

	// user := models.User{
	// 	UserID:    2115478,
	// 	Phonenum:  "0914751425",
	// 	Age:       34,
	// 	SSN:       "CCCCCCC",
	// 	Name:      "nothinghere",
	// 	Role:      1,
	// 	CountFine: 0,
	// }

	// book := models.Book{
	// 	UniqueCode:   "ahihi",
	// 	ISBN:         "DNS@!#",
	// 	Name:         "Games of thrones",
	// 	Condition:    true,
	// 	Availability: true,
	// 	Location:     "H6 first floor",
	// 	BorrowDate:   time.Date(2023, time.November, 7, 12, 0, 0, 0, time.UTC),
	// 	ReturnDate:   time.Date(2023, time.November, 14, 12, 0, 0, 0, time.UTC),
	// }

	// err := userDo.Insert(user)
	// if err == nil {
	// 	fmt.Println("Insert user successfully")
	// }

	// crr := bookDo.InsertBook(book)
	// if crr == nil {
	// 	fmt.Println("Insert book successfully")
	// }

	// Set up routes
	bookController := &controller.BookController{Collection: mongoDB.Client.Database("Library-Management-Database").Collection("Books")}
	controller.SetupBookRoutes(r, bookController)

	// Run the server
	if err := r.Run(":8080"); err != nil {
		panic(err)
	}
}
