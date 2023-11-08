package mongo

import (
	"context"
	"errors"
	"reflect"
	"time"

	"go.mongodb.org/mongo-driver/bson/bsoncodec"
	"go.mongodb.org/mongo-driver/bson/bsonrw"
	"go.mongodb.org/mongo-driver/bson/bsontype"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type MongoDB struct {
	Client *mongo.Client
}

var Mongo = &MongoDB{}

func ConnectMongoDB() *MongoDB {

	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb+srv://kienle123:123456789vaythoi@cluster0.3fp6qr3.mongodb.net/"))
	if err != nil {
		panic(err)
	}

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second) // sau 10s ko connect đc thì hủy lệnh connect
	err = client.Connect(ctx)
	if err != nil {
		panic(err)
	}

	err = client.Ping(ctx, readpref.Primary()) // ping bản chính, not secondary
	if err != nil {
		panic(err)
	}

	fmt.Println("connection is ok now")
	Mongo.Client = client
	return Mongo
}
