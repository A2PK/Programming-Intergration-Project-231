package repository

import (
	models "go-jwt/internal/entity"
)

type UserRepo interface {
	Insert(u models.User) error
}

type BookRepo interface {
	InsertBook(v models.Book) error
}

/*--------------------------------------------*/
// Maybe we can reuse two function below ??
// FindUserByEmail(email string) (models.User, error)
// CheckLoginInfo(email string, password string) (models.User, error)
