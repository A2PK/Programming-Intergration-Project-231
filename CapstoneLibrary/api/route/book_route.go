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

func NewBookRouter(env *bootstrap.Env, timeout time.Duration, db mongo.Database, group *gin.RouterGroup) {
	tr := repository.NewBookRepository(db, domain.CollectionBook)
	tc := &controller.BookController{
		TaskUsecase: usecase.NewBookUsecase(tr, timeout),
	}
	group.POST("/book", tc.Create)
}
