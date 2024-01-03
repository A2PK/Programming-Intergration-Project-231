package usecase

import (
	"context"
	entity "go-jwt/internal/entity"
	repository "go-jwt/internal/infrastructure/repository"
)

func NewUserUsecase(userRepo repository.UserRepository) UserUsecase {
	return &userUsecase{
		repo: userRepo,
	}
}

type UserUsecase interface {
	CreateUser(ctx context.Context, user *entity.User) (*entity.User, error)
	GetUser(ctx context.Context, id string) (*entity.User, error)
	UpdateUser(ctx context.Context, id string, data *entity.User) (*entity.User, error)
	DeleteUser(ctx context.Context, id string) error
	AuthenticateUser(ctx context.Context, username string, password string) (*entity.User, error)
}

type userUsecase struct {
	repo repository.UserRepository
}

func (s *userUsecase) CreateUser(ctx context.Context, user *entity.User) (*entity.User, error) {
	return s.repo.CreateUser(ctx, user)
}

func (s *userUsecase) GetUser(ctx context.Context, id string) (*entity.User, error) {
	return s.repo.GetUserByID(ctx, id)
}

func (s *userUsecase) UpdateUser(ctx context.Context, id string, data *entity.User) (*entity.User, error) {
	return s.repo.UpdateUser(ctx, id, data)
}

func (s *userUsecase) DeleteUser(ctx context.Context, id string) error {
	return s.repo.DeleteUser(ctx, id)
}

func (s *userUsecase) AuthenticateUser(ctx context.Context, username string, password string) (*entity.User, error) {
	user, err := s.repo.GetUserByUsername(ctx, username)

	if err != nil {
		return nil, err
	}

	if user == nil {
		return nil, entity.ERR_USER_NOT_FOUND
	}

	if user.Password != password {
		return nil, entity.ERR_USER_PASSWORD_NOT_MATCH
	}

	return user, nil
}
