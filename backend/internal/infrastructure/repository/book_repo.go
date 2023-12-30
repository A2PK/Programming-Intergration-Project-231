package repository

import (
	"context"
	entity "go-jwt/internal/entity"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func NewBookRepo(bookCollection *mongo.Collection) BookRepository {
	return &bookRepository{
		bookCollection: bookCollection,
	}
}

type BookRepository interface {
	CreateBook(ctx context.Context, book *entity.Book) (*entity.Book, error)
	GetBookByID(ctx context.Context, id string) (*entity.Book, error)
	GetBooksByISBN(ctx context.Context, isbn string) ([]*entity.Book, error)
	GetBooksByName(ctx context.Context, name string) ([]*entity.Book, error)
	UpdateBook(ctx context.Context, id string, data *entity.Book) (*entity.Book, error)
	DeleteBook(ctx context.Context, id string) error
}

type bookRepository struct {
	bookCollection *mongo.Collection
}

func (bookRepo *bookRepository) CreateBook(ctx context.Context, book *entity.Book) (*entity.Book, error) {
	_, err := bookRepo.bookCollection.InsertOne(context.Background(), book)
	if err != nil {
		return nil, err
	}

	return book, nil
}

func (bookRepo *bookRepository) GetBookByID(ctx context.Context, id string) (*entity.Book, error) {
	book := entity.Book{}

	filter := bson.M{"_id": id}
	result := bookRepo.bookCollection.
		FindOne(context.Background(),
			filter)

	err := result.Decode(&book)

	if book == (entity.Book{}) {
		// error := entity.ERR_BOOK_NOT_FOUND
		return nil, entity.ERR_BOOK_NOT_FOUND
	}

	if err != nil {
		return nil, err
	}

	return &book, nil
}

func (bookRepo *bookRepository) GetBooksByISBN(ctx context.Context, isbn string) ([]*entity.Book, error) {
	books := []*entity.Book{}

	filter := bson.M{"isbn": isbn}
	result, err := bookRepo.bookCollection.Find(context.Background(), filter)

	if err != nil {
		return nil, err
	}

	defer result.Close(context.Background())

	for result.Next(context.Background()) {
		var book entity.Book
		err := result.Decode(&book)
		if err != nil {
			return nil, err
		}
		books = append(books, &book)
	}

	return books, nil
}

func (bookRepo *bookRepository) GetBooksByName(ctx context.Context, name string) ([]*entity.Book, error) {
	books := []*entity.Book{}

	filter := bson.M{"name": name}
	result, err := bookRepo.bookCollection.Find(context.Background(), filter)

	if err != nil {
		return nil, err
	}

	defer result.Close(context.Background())

	for result.Next(context.Background()) {
		var book entity.Book
		err := result.Decode(&book)
		if err != nil {
			return nil, err
		}
		books = append(books, &book)
	}

	return books, nil
}

func (bookRepo *bookRepository) UpdateBook(ctx context.Context, id string, data *entity.Book) (*entity.Book, error) {
	_, err := bookRepo.bookCollection.UpdateOne(context.Background(), bson.M{"_id": id}, bson.M{"$set": data})
	if err != nil {
		return nil, err
	}
	return data, nil
}

func (bookRepo *bookRepository) DeleteBook(ctx context.Context, id string) error {
	_, err := bookRepo.bookCollection.DeleteOne(context.Background(), bson.M{"_id": id})
	if err != nil {
		return err
	}

	return nil
}
