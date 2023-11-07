package main

import (
	"fmt"
	"go-jwt/driver"
	models "go-jwt/model"
	repolize "go-jwt/repository/repoz"
	"time"
)

func main() {
	mongoDB := driver.ConnectMongoDB()
	userDo := repolize.NewUserRepo(mongoDB.Client.Database("Library-Management-Database"))
	bookDo := repolize.NewBookRepo(mongoDB.Client.Database("Library-Management-Database"))

	user := models.User{
		UserID:    2115478,
		Phonenum:  "0914751425",
		Age:       34,
		SSN:       "CCCCCCC",
		Name:      "nothinghere",
		Role:      1,
		CountFine: 0,
	}

	book := models.Book{
		UniqueCode:   "ahihi",
		ISBN:         "DNS@!#",
		Name:         "Games of thrones",
		Condition:    true,
		Availability: true,
		Location:     "H6 first floor",
		BorrowDate:   time.Date(2023, time.November, 7, 12, 0, 0, 0, time.UTC),  // Year, Month, Day, Hour, Minute, Second, Nanosecond, Timezone
		ReturnDate:   time.Date(2023, time.November, 14, 12, 0, 0, 0, time.UTC), // Example: one week after BorrowDate
	}

	err := userDo.Insert(user)
	if err == nil {
		fmt.Println("Insert user successfully")
	}

	crr := bookDo.InsertBook(book)
	if crr == nil {
		fmt.Println("Insert book successfully")
	}
}
