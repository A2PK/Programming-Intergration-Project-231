package request

import (
	"github.com/gin-gonic/gin"
)

func NewBookRequest() BookRequest {
	return &bookRequest{}
}

type BookRequest interface {
	Bind(c *gin.Context) error
	//Validate() error
	//GetID() uint32
	//GetEmail() string
	//GetPassword() string
	GetName() string
}

type bookRequest struct {
	UniqueCode   string `json:"uniquecode"`
	ISBN         string `json:"isbn"`
	Name         string `json:"name"`
	Condition    bool   `json:"condition"`
	Availability bool   `json:"availability"`
	Location     string `json:"location"`
}

func (r *bookRequest) Bind(c *gin.Context) error {
	return c.Bind(r)
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

// func (r *bookRequest) GetID() uint32 {
// 	return r.ID
// }

// func (r *bookRequest) GetEmail() string {
// 	return r.Email
// }

// func (r *bookRequest) GetPassword() string {
// 	return r.Password
// }

func (r *bookRequest) GetName() string {
	return r.Name
}
