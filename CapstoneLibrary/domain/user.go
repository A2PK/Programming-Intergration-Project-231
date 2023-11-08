package entity

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	UserID    int                `json:"UserID" bson:"UserID"`
	Phonenum  string             `json:"phonenum" bson:"phonenum"`
	Age       int                `json:"age" bson:"age"`
	SSN       string             `json:"ssn" bson:"ssn"`
	Name      string             `json:"name" bson:"name"`
	Role      int                `json:"flag" bson:"flag"` // user for identify 1 for member, 2 for librarian or manager is 3?
	CountFine int                `json:"countfine" bson:"countfine"`
}
type UserRepository interface {
	Create(c context.Context, user *User) error
	Fetch(c context.Context) ([]User, error)
	GetByEmail(c context.Context, email string) (User, error)
	GetByID(c context.Context, id string) (User, error)
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
