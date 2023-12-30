package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Phonenum  string             `json:"phonenum" bson:"phonenum"`
	Age       int                `json:"age" bson:"age"`
	SSN       string             `json:"ssn" bson:"ssn"`
	Name      string             `json:"name" bson:"name"`
	Role      int                `json:"flag" bson:"flag"` // user for identify 1 for member, 2 for librarian or manager is 3?
	CountFine int                `json:"countfine" bson:"countfine"`
	Username  string             `json:"username" bson:"username"`
	Password  string             `json:"password" bson:"password"`
}

// type Member struct {
// 	CountFine int `json:"countfine" bson:"countfine"`
// }

// type Librarian struct {
// 	????
// }

// type Manager struct {
// 	????
// }
