package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Book struct {
	ID           primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	UniqueCode   string             `json:"uniquecode" bson:"uniquecode"`
	ISBN         string             `json:"isbn" bson:"isbn"`
	Name         string             `json:"name" bson:"name"`
	Condition    bool               `json:"condition" bson:"condition"`
	Availability bool               `json:"availability" bson:"availability"`
	Location     string             `json:"location" bson:"location"`
	BorrowDate   time.Time          `json:"borrowdate" bson:"borrowdate"` // if needed
	ReturnDate   time.Time          `json:"returndate" bson:"returndate"` // if needed
}

type BookReplacementList struct {
	TimeReplace       time.Time `json:"TimeReplace" bson:"TimeReplace"`
	ManagerID         int       `json:"ManagerID" bson:"ManagerID"`
	LibrarianID       int       `json:"LibrarianID" bson:"LibrarianID"`
	UniqueCodeReplace string    `json:"UniqueCodeReplace" bson:"UniqueCodeReplace"`
}

type BookActivityList struct {
	BorrowDate         time.Time `json:"borrowdate" bson:"borrowdate"`
	ExtendDate         time.Time `json:"ExtendDate" bson:"ExtendDate"`
	ReturnDate         time.Time `json:"returndate" bson:"returndate"`
	UniqueCodeActivity string    `json:"UniqueCodeActivity" bson:"UniqueCodeActivity"`
	ManagerID          int       `json:"ManagerID" bson:"ManagerID"`
	LibrarianID        int       `json:"LibrarianID" bson:"LibrarianID"`
}

type SearchBook struct {
	UniqueCodeSearch string `json:"UniqueCodeSearch" bson:"UniqueCodeSearch"`
	SearcherID       int    `json:"SearcherID" bson:"SearcherID"`
}

type ReserveBook struct {
	UniqueCodeReserve string `json:"UniqueCodeReserve" bson:"UniqueCodeReserve"`
	ReserverID        int    `json:"ReserverID" bson:"ReserverID"`
}

//	type BorrowBook struct {
//		BorrowDate   time.Time          `json:"BorrowDate" bson:"BorrowDate"`
//	 ReturnDate   time.Time			`json:"returndate" bson:"returndate"`
//	}

type BookName struct {
	Name string `json:"name" bson:"name"`
}
