package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Book struct {
	ID           primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	ISBN         string             `json:"isbn" bson:"isbn"`
	Name         string             `json:"name" bson:"name"`
	Condition    bool               `json:"condition" bson:"condition"`
	Availability bool               `json:"availability" bson:"availability"`
	Location     string             `json:"location" bson:"location"`
	BorrowDate   time.Time          `json:"borrowdate" bson:"borrowdate"` // if needed
	ReturnDate   time.Time          `json:"returndate" bson:"returndate"` // if needed
	ImageURL     string             `json:"image_url" bson:"image_url"`
}

type BookReplacementList struct {
	TimeReplace time.Time `json:"TimeReplace" bson:"TimeReplace"`
	ManagerID   int       `json:"ManagerID" bson:"ManagerID"`
	LibrarianID int       `json:"LibrarianID" bson:"LibrarianID"`
}

type BookActivityList struct {
	BorrowDate  time.Time `json:"borrowdate" bson:"borrowdate"`
	ExtendDate  time.Time `json:"ExtendDate" bson:"ExtendDate"`
	ReturnDate  time.Time `json:"returndate" bson:"returndate"`
	ManagerID   int       `json:"ManagerID" bson:"ManagerID"`
	LibrarianID int       `json:"LibrarianID" bson:"LibrarianID"`
}

type SearchBook struct {
	SearcherID int `json:"SearcherID" bson:"SearcherID"`
}

type ReserveBook struct {
	ReserverID int `json:"ReserverID" bson:"ReserverID"`
}

//	type BorrowBook struct {
//		BorrowDate   time.Time          `json:"BorrowDate" bson:"BorrowDate"`
//	 ReturnDate   time.Time			`json:"returndate" bson:"returndate"`
//	}

type BookName struct {
	Name string `json:"name" bson:"name"`
}
