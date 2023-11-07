package repoz

import (
	"context"
	models "go-jwt/model"
	repo "go-jwt/repository"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserRepoImpl struct {
	Db *mongo.Database
}

func NewUserRepo(db *mongo.Database) repo.UserRepo {
	return &UserRepoImpl{
		Db: db,
	}
}

func NewBookRepo(db *mongo.Database) repo.BookRepo {
	return &UserRepoImpl{
		Db: db,
	}
}

func (mongo *UserRepoImpl) Insert(user models.User) error {
	bbytes, _ := bson.Marshal(user)

	_, err := mongo.Db.Collection("Users").InsertOne(context.Background(), bbytes)
	if err != nil {
		return err
	}

	return nil
}

func (mongo *UserRepoImpl) InsertBook(book models.Book) error {
	bbytes, _ := bson.Marshal(book)

	_, err := mongo.Db.Collection("Books").InsertOne(context.Background(), bbytes)
	if err != nil {
		return err
	}

	return nil
}

/*--------------------------------------------*/
// Maybe we can reuse two function below ??

// func (mongo *UserRepoImpl) CheckLoginInfo(email, password string) (models.User, error) {
// 	user := models.User{}

// 	result := mongo.Db.Collection("users").
// 						FindOne(context.Background(),
// 								bson.M{
// 									"email" :email,
// 									"password": password,
// 								})

// 	err := result.Decode(&user)
// 	if err != nil {
// 		return user, err
// 	}

// 	return user, nil
// }
// func (mongo *UserRepoImpl) FindUserByEmail(email string) (models.User, error) {
// 	user := models.User{}

// 	result := mongo.Db.Collection("users").
// 						FindOne(context.Background(),
// 								bson.M{"email" :email})

// 	err := result.Decode(&user)

// 	if user == (models.User{}) {
// 		return user, models.ERR_USER_NOT_FOUND
// 	}

// 	if err != nil {
// 		return user, err
// 	}

// 	return user, nil
// }
