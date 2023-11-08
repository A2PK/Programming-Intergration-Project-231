package controller

import (
	"context"
	models "go-jwt/model"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type BookController struct {
	Collection *mongo.Collection
}

func SetupBookRoutes(router *gin.Engine, bc *BookController) {
	bookRoutes := router.Group("/books")
	{
		bookRoutes.GET("/:id", bc.GetByID)
		bookRoutes.PUT("/:id", bc.UpdateByID)
		bookRoutes.DELETE("/:id", bc.DeleteByID)
		bookRoutes.GET("/:id", bc.ReadByID)
		bookRoutes.GET("/", bc.SearchBookByName)
	}
}
func (bc *BookController) GetByID(c *gin.Context) {
	id := c.Param("id")
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var book models.Book
	filter := bson.M{"_id": objectID}
	err = bc.Collection.FindOne(context.Background(), filter).Decode(&book)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, book)
}

// curl -X GET http://localhost:8080/books/PUT_ACTUAL_BOOK_ID_HERE

func (bc *BookController) UpdateByID(c *gin.Context) {
	id := c.Param("id")
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var updatedBook models.Book
	if err := c.ShouldBindJSON(&updatedBook); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	filter := bson.M{"_id": objectID}
	update := bson.M{"$set": updatedBook}
	_, err = bc.Collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Book updated successfully"})
}

//curl -X PUT -H "Content-Type: application/json" -d '{"uniquecode":"newUniqueCode", "isbn":"newISBN", "name":"New Book Name", "condition":false, "availability":false, "location":"New Location", "borrowdate":"2023-11-10T12:00:00Z", "returndate":"2023-11-17T12:00:00Z"}' http://localhost:8080/books/PUT_ACTUAL_BOOK_ID_HERE

func (bc *BookController) DeleteByID(c *gin.Context) {
	id := c.Param("id")
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	filter := bson.M{"_id": objectID}
	_, err = bc.Collection.DeleteOne(context.Background(), filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Book deleted successfully"})
}

//curl -X DELETE http://localhost:8080/books/PUT_ACTUAL_BOOK_ID_HERE

func (bc *BookController) ReadByID(c *gin.Context) {
	id := c.Param("id")
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var book models.Book
	filter := bson.M{"_id": objectID}
	err = bc.Collection.FindOne(context.Background(), filter).Decode(&book)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, book)
}

func (bc *BookController) SearchBookByName(c *gin.Context) {
	name := c.Query("name")
	filter := bson.M{"name": name}
	var books []models.Book
	cur, err := bc.Collection.Find(context.Background(), filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cur.Close(context.Background())
	for cur.Next(context.Background()) {
		var book models.Book
		err := cur.Decode(&book)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		books = append(books, book)
	}
	c.JSON(http.StatusOK, books)
}

//curl -X GET http://localhost:8080/books?name=Games%20of%20thrones
