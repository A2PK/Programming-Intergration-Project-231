package usecase

import (
	"context"
	"encoding/json"
	"fmt"
	entity "go-jwt/internal/entity"
	repository "go-jwt/internal/infrastructure/repository"
	"time"
)

func NewUserUsecase(userRepo repository.UserRepository, bookRepo repository.BookRepository) UserUsecase {
	return &userUsecase{
		userRepo: userRepo,
		bookRepo: bookRepo,
	}
}

type UserUsecase interface {
	CreateUser(ctx context.Context, user *entity.User) (*entity.User, error)
	GetUser(ctx context.Context, id string) (*entity.User, error)
	UpdateUser(ctx context.Context, id string, data *entity.User) (*entity.User, error)
	DeleteUser(ctx context.Context, id string) error
	AuthenticateUser(ctx context.Context, username string, password string) (*entity.User, error)
	ReserveBook(ctx context.Context, userID string, bookID string) (*entity.User, error)
	ExtendReserveBook(ctx context.Context, userID string, bookID string) (*entity.User, error)
}

type userUsecase struct {
	userRepo repository.UserRepository
	bookRepo repository.BookRepository
}

func (s *userUsecase) CreateUser(ctx context.Context, user *entity.User) (*entity.User, error) {
	return s.userRepo.CreateUser(ctx, user)
}

func (s *userUsecase) GetUser(ctx context.Context, id string) (*entity.User, error) {
	return s.userRepo.GetUserByID(ctx, id)
}

func (s *userUsecase) UpdateUser(ctx context.Context, id string, data *entity.User) (*entity.User, error) {
	return s.userRepo.UpdateUser(ctx, id, data)
}

func (s *userUsecase) DeleteUser(ctx context.Context, id string) error {
	return s.userRepo.DeleteUser(ctx, id)
}

func (s *userUsecase) AuthenticateUser(ctx context.Context, username string, password string) (*entity.User, error) {
	user, err := s.userRepo.GetUserByUsername(ctx, username)

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

func (s *userUsecase) ReserveBook(ctx context.Context, userID string, bookID string) (*entity.User, error) {
	user, err := s.userRepo.GetUserByID(ctx, userID)

	if err != nil {
		return nil, err
	}

	if user == nil {
		return nil, entity.ERR_USER_NOT_FOUND
	}

	if user.CountFine > 2 {
		return nil, entity.ERR_USER_FINE_EXCEED
	}

	book, err := s.bookRepo.GetBookByID(ctx, bookID)

	if err != nil {
		return nil, err
	}

	if book == nil {
		return nil, entity.ERR_BOOK_NOT_FOUND
	}

	// if book.Availability != 0 {
	// 	return nil, entity.ERR_BOOK_NOT_AVAILABLE
	// }

	book.Availability = 2 // 2 = reserved

	// update book availability
	book, err = s.bookRepo.UpdateBook(ctx, bookID, book)

	if err != nil {
		return nil, err
	}

	// Create a new book reservation map
	newReservation := map[string]interface{}{
		"bookId":       book.ID,
		"bookName":     book.Name,
		"startDate":    time.Now(),
		"endDate":      time.Now().AddDate(0, 0, 7),
		"extendedDate": nil,
	}

	obj := *user
	fmt.Println("user before Unmarshal", user)
	userReservinglist := user.Reservinglist
	// Unmarshal the existing Reservinglist array into a slice of maps
	var existingReservations []map[string]interface{}
	err1 := json.Unmarshal(userReservinglist, &existingReservations)
	if err1 != nil {
		return nil, err
	}

	if user == nil {
		return nil, entity.ERR_USER_NOT_FOUND
	} else if user != nil {
		fmt.Println("This check user is not nil")
		fmt.Println("Username:" + user.Username)
		fmt.Println("Password:" + user.Password)
	}

	fmt.Println("User: ", obj)

	// Append the new reservation to the existing reservations
	existingReservations = append(existingReservations, newReservation)

	// Marshal the slice of maps into JSON
	reservinglist, err := json.Marshal(existingReservations)
	if err != nil {
		return nil, err
	}

	fmt.Println("user before", user)
	user.Reservinglist = reservinglist

	// update user reserving book
	user, err = s.userRepo.UpdateUser(ctx, userID, user)

	//print user after
	fmt.Println("user after", user)

	if err != nil {
		return nil, err
	}

	return user, nil
}

func (s *userUsecase) ExtendReserveBook(ctx context.Context, userID string, bookID string) (*entity.User, error) {
	user, err := s.userRepo.GetUserByID(ctx, userID)

	if err != nil {
		return nil, err
	}

	if user == nil {
		return nil, entity.ERR_USER_NOT_FOUND
	}

	book, err := s.bookRepo.GetBookByID(ctx, bookID)

	if err != nil {
		return nil, err
	}

	if book == nil {
		return nil, entity.ERR_BOOK_NOT_FOUND
	}

	if err != nil {
		return nil, err
	}

	// Unmarshal the existing Reservinglist array into a slice of maps
	var existingReservations []map[string]interface{}
	err1 := json.Unmarshal(user.Reservinglist, &existingReservations)
	if err1 != nil {
		return nil, err
	}

	// find the old reservation of that book
	for i, reservation := range existingReservations {
		if reservation["bookId"] == book.ID {
			// update the old reservation with new reservation
			existingReservations[i]["extendedDate"] = time.Now().AddDate(0, 0, 7)
		}
	}

	// Marshal the slice of maps into JSON
	reservinglist, err := json.Marshal(existingReservations)
	if err != nil {
		return nil, err
	}

	user.Reservinglist = reservinglist

	// update user reserving book
	user, err = s.userRepo.UpdateUser(ctx, userID, user)

	if err != nil {
		return nil, err
	}

	return user, nil
}
