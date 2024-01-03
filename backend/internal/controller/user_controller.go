package controller

import (
	"fmt"
	entity "go-jwt/internal/entity"
	request "go-jwt/internal/request"
	usecase "go-jwt/internal/usecase"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserController struct {
	userService    usecase.UserUsecase
	NewUserRequest func() request.UserRequest
}

func SetupUserRoutes(router *gin.Engine, userService usecase.UserUsecase) {
	userController := UserController{
		userService:    userService,
		NewUserRequest: request.NewUserRequest,
	}

	userRoutes := router.Group("/users")
	{
		userRoutes.Use(CORS())
		userRoutes.POST("/", userController.create)
		userRoutes.GET("/:id", userController.get)
		userRoutes.PUT("/:id", userController.update)
		userRoutes.DELETE("/:id", userController.delete)
		userRoutes.POST("/login", userController.login)
	}
}

func (h UserController) create(ctx *gin.Context) {
	request := h.NewUserRequest()

	if err := request.Bind(ctx); err != nil {
		fmt.Println("bind user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	// if err := request.Validate(); err != nil {
	// 	fmt.Println("validate user failed", err.Error())
	// 	ctx.AbortWithError(http.StatusBadRequest, err)
	// 	return
	// }

	user, error := h.userService.CreateUser(ctx, &entity.User{
		Username:  request.GetUsername(),
		Password:  request.GetPassword(),
		Name:      request.GetName(),
		Phonenum:  request.GetPhonenum(),
		Age:       request.GetAge(),
		SSN:       request.GetSSN(),
		Role:      request.GetRole(),
		CountFine: request.GetCountFine(),
	})
	if error != nil {
		fmt.Println("create user failed:", error.Error())
		ctx.AbortWithError(http.StatusBadRequest, error)
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "create failed", "error": error.Error()})
	}
	ctx.JSON(http.StatusOK, user)
}

func (h UserController) get(ctx *gin.Context) {

	request := h.NewUserRequest()

	user, err := h.userService.GetUser(ctx, request.GetIDFromURL(ctx))

	if err != nil {
		fmt.Println("get user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "get failed", "error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, user)
}

func (h UserController) update(ctx *gin.Context) {
	request := h.NewUserRequest()

	if err := request.Bind(ctx); err != nil {
		fmt.Println("bind user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	user, err := h.userService.UpdateUser(ctx, request.GetIDFromURL(ctx), &entity.User{
		Username: request.GetUsername(),
		Password: request.GetPassword(),
		Name:     request.GetName(),
	})

	if err != nil {
		fmt.Println("update user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "update failed", "error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, user)
}

func (h UserController) delete(ctx *gin.Context) {
	request := h.NewUserRequest()

	err := h.userService.DeleteUser(ctx, request.GetIDFromURL(ctx))

	if err != nil {
		fmt.Println("delete user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "user deleted"})
}

func (h UserController) login(ctx *gin.Context) {
	request := h.NewUserRequest()

	if err := request.Bind(ctx); err != nil {
		fmt.Println("bind user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	fmt.Print(request.GetUsername(), request.GetPassword())

	user, err := h.userService.AuthenticateUser(ctx, request.GetUsername(), request.GetPassword())

	if err != nil {
		fmt.Println("login user failed:", err.Error())
		ctx.AbortWithError(http.StatusBadRequest, err)
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "login failed", "error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, user)
}
