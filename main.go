package main

import(
	"net/http"
	"github.com/gin-gonic/gin"
)


var Server *gin.Engine

func init(){

	Server = gin.Default() //router

}

func main(){

	// Test API works
	Server.GET("/api/ping", func(c *gin.Context){
		c.IndentedJSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	Server.Run() // listen and serve on 0.0.0.0:8080
}
