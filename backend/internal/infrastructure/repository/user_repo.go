package repository

import (
	"context"
	entity "go-jwt/internal/entity"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func NewUserRepo(userCollection *mongo.Collection) UserRepository {
	return &userRepository{
		userCollection: userCollection,
	}
}

type UserRepository interface {
	CreateUser(ctx context.Context, user *entity.User) (*entity.User, error)
	GetUser(ctx context.Context, id string) (*entity.User, error)
	UpdateUser(ctx context.Context, id string, data *entity.User) (*entity.User, error)
	DeleteUser(ctx context.Context, id string) error
}

type userRepository struct {
	userCollection *mongo.Collection
}

func (userRepo *userRepository) CreateUser(ctx context.Context, user *entity.User) (*entity.User, error) {
	bbytes, _ := bson.Marshal(user)

	result, err := userRepo.userCollection.InsertOne(context.Background(), bbytes)
	if err != nil {
		return nil, err
	}

	//how to get the id of the inserted document
	user.ID = result.InsertedID.(primitive.ObjectID)

	return user, nil
}

func (userRepo *userRepository) GetUser(ctx context.Context, id string) (*entity.User, error) {

	user := entity.User{}

	ID, _ := primitive.ObjectIDFromHex(id)

	result := userRepo.userCollection.
		FindOne(context.Background(),
			bson.M{"_id": ID})

	err := result.Decode(&user)

	if user == (entity.User{}) {
		return nil, entity.ERR_USER_NOT_FOUND
	}

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (userRepo *userRepository) UpdateUser(ctx context.Context, id string, data *entity.User) (*entity.User, error) {
	user := entity.User{}

	result := userRepo.userCollection.
		FindOneAndUpdate(context.Background(),
			bson.M{"_id": id},
			bson.M{
				"$set": bson.M{
					"name":      data.Name,
					"age":       data.Age,
					"phonenum":  data.Phonenum,
					"ssn":       data.SSN,
					"flag":      data.Role,
					"countfine": data.CountFine,
				},
			})

	err := result.Decode(&user)

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (userRepo *userRepository) DeleteUser(ctx context.Context, id string) error {
	_, err := userRepo.userCollection.DeleteOne(context.Background(), bson.M{"_id": id})
	if err != nil {
		return err
	}

	return nil
}

/*--------------------------------------------*/
// Maybe we can reuse two function below ??

// func (userRepo *UserRepoImpl) CheckLoginInfo(email, password string) (models.User, error) {
// 	user := models.User{}

// 	result := userRepo.userCollection.
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
// func (userRepo *UserRepoImpl) FindUserByEmail(email string) (models.User, error) {
// 	user := models.User{}

// 	result := userRepo.userCollection.
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
