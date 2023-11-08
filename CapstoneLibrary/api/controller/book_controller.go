package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	domain "go-jwt/domain"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type BookController struct {
	BookUsecase domain.BookUsecase
}

func (tc *BookController) Create(c *gin.Context) {
	var book domain.Book

	err := c.ShouldBind(&book)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}

	userID := c.GetString("x-user-id")
	book.ID = primitive.NewObjectID()

	book.UserID, err = primitive.ObjectIDFromHex(userID)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}

	err = tc.BookUsecase.Create(c, &book)
	if err != nil {
		c.JSON(http.StatusInternalServerError, domain.ErrorResponse{Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, domain.SuccessResponse{
		Message: "Book created successfully",
	})
}
