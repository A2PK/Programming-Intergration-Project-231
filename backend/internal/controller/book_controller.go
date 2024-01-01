package controller

import (
	entity "go-jwt/internal/entity"
	request "go-jwt/internal/request"
	usecase "go-jwt/internal/usecase"
	"net/http"

	"github.com/gin-gonic/gin"
)

type BookController struct {
	bookService    usecase.BookUsecase
	NewBookRequest func() request.BookRequest
}

func SetupBookRoutes(router *gin.Engine, bookService usecase.BookUsecase) {
	bookController := BookController{
		bookService:    bookService,
		NewBookRequest: request.NewBookRequest,
	}

	bookRoutes := router.Group("/books")
	{
		router.Use(CORS())
		bookRoutes.GET("/:id", bookController.GetByID)
		bookRoutes.POST("/", bookController.CreateBook)
		bookRoutes.PUT("/:id", bookController.UpdateByID)
		bookRoutes.DELETE("/:id", bookController.DeleteByID)
		bookRoutes.GET("/search/:name", bookController.SearchBooksByName)
		bookRoutes.PUT("/:id/availability", bookController.UpdateBookAvailability)

	}
}

func (h BookController) CreateBook(ctx *gin.Context) {
	request := h.NewBookRequest()

	if err := request.Bind(ctx); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	book, error := h.bookService.CreateBook(ctx, &entity.Book{
		ISBN:         request.GetISBN(),
		Name:         request.GetName(),
		Condition:    request.GetCondition(),
		Availability: request.GetAvailability(),
		Location:     request.GetLocation(),
		BorrowDate:   request.GetBorrowDate(),
		ReturnDate:   request.GetReturnDate(),
		Author:       request.GetAuthor(),
		ImageURL:     request.GetImageURL(),
	})

	if error != nil {
		ctx.AbortWithError(http.StatusBadRequest, error)
	}
	ctx.JSON(http.StatusOK, book)
}

func (h BookController) GetByID(ctx *gin.Context) {
	request := h.NewBookRequest()

	if err := request.Bind(ctx); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	book, error := h.bookService.GetBookByID(ctx, request.GetIDFromURL(ctx))

	if error != nil {
		ctx.AbortWithError(http.StatusBadRequest, error)
	}
	ctx.JSON(http.StatusOK, book)
}

func (h BookController) UpdateByID(ctx *gin.Context) {
	request := h.NewBookRequest()

	if err := request.Bind(ctx); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	book, error := h.bookService.UpdateBookByID(ctx, request.GetIDFromURL(ctx), &entity.Book{
		ISBN:         request.GetISBN(),
		Name:         request.GetName(),
		Condition:    request.GetCondition(),
		Availability: request.GetAvailability(),
		Location:     request.GetLocation(),
		BorrowDate:   request.GetBorrowDate(),
		ReturnDate:   request.GetReturnDate(),
		Author:       request.GetAuthor(),
		ImageURL:     request.GetImageURL(),
	})

	if error != nil {
		ctx.AbortWithError(http.StatusBadRequest, error)
	}
	ctx.JSON(http.StatusOK, book)
}

func (h BookController) DeleteByID(ctx *gin.Context) {
	request := h.NewBookRequest()

	if err := request.Bind(ctx); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	error := h.bookService.DeleteBookByID(ctx, request.GetIDFromURL(ctx))

	if error != nil {
		ctx.AbortWithError(http.StatusBadRequest, error)
	}
	ctx.JSON(http.StatusOK, error)
}

func (h BookController) SearchBooksByName(ctx *gin.Context) {
	request := h.NewBookRequest()

	if err := request.Bind(ctx); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	books, error := h.bookService.SearchBookByName(ctx, request.GetNameFromURL(ctx))

	if error != nil {
		ctx.AbortWithError(http.StatusBadRequest, error)
	}
	ctx.JSON(http.StatusOK, books)
}

func (h BookController) UpdateBookAvailability(ctx *gin.Context) {
	request := h.NewBookRequest()

	if err := request.Bind(ctx); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	book, error := h.bookService.UpdateBookAvailability(ctx, request.GetIDFromURL(ctx), request.GetAvailability())

	if error != nil {
		ctx.AbortWithError(http.StatusBadRequest, error)
	}
	ctx.JSON(http.StatusOK, book)
}
