package request

import (
	entity "go-jwt/internal/entity"
	"time"

	"github.com/gin-gonic/gin"
)

func NewBookRequest() BookRequest {
	return &bookRequest{}
}

type BookRequest interface {
	Bind(c *gin.Context) error
	//Validate() error
	GetID() string
	GetIDFromURL(c *gin.Context) string
	GetISBN() string
	GetName() string
	GetCondition() bool
	GetAvailability() bool
	GetLocation() string
	GetBorrowDate() time.Time
	GetReturnDate() time.Time
	GetAuthor() string
	GetImageURL() string
}

type bookRequest struct {
	book entity.Book
}

func (r *bookRequest) Bind(c *gin.Context) error {
	return c.ShouldBindJSON(&r.book)
}

func (r *bookRequest) GetID() string {
	return r.book.ID.Hex()
}

func (r *bookRequest) GetIDFromURL(c *gin.Context) string {
	return c.Param("id")
}

func (r *bookRequest) GetISBN() string {
	return r.book.ISBN
}

func (r *bookRequest) GetName() string {
	return r.book.Name
}

func (r *bookRequest) GetCondition() bool {
	return r.book.Condition
}

func (r *bookRequest) GetAvailability() bool {
	return r.book.Availability
}

func (r *bookRequest) GetLocation() string {
	return r.book.Location
}

func (r *bookRequest) GetBorrowDate() time.Time {
	return r.book.BorrowDate
}

func (r *bookRequest) GetReturnDate() time.Time {
	return r.book.ReturnDate
}

func (r *bookRequest) GetAuthor() string {
	return r.book.Author
}

func (r *bookRequest) GetImageURL() string {
	return r.book.ImageURL
}

// func (r *bookRequest) Validate() error {
// 	if r.ID == 0 {
// 		return errors.New("ID is required")
// 	} else if r.Email == "" {
// 		return errors.New("Email is required")
// 	} else if r.Password == "" {
// 		return errors.New("password is required")
// 	} else if r.Name == "" {
// 		return errors.New("name is required")
// 	}
// 	return nil
// }
