package route

import (
	"time"

	"github.com/gin-gonic/gin"
	controller "go-jwt/api/controller"
	bootstrap "go-jwt/bootstrap"
	domain "go-jwt/domain"
	mongo "go-jwt/mongo"
	repository "go-jwt/repository"
	usecase "go-jwt/usecase"
)

func NewRefreshTokenRouter(env *bootstrap.Env, timeout time.Duration, db mongo.Database, group *gin.RouterGroup) {
	ur := repository.NewUserRepository(db, domain.CollectionUser)
	rtc := &controller.RefreshTokenController{
		RefreshTokenUsecase: usecase.NewRefreshTokenUsecase(ur, timeout),
		Env:                 env,
	}
	group.POST("/refresh", rtc.RefreshToken)
}
