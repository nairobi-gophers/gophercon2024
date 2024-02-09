package middlewares

import (
	"github.com/gin-gonic/gin"
	"github.com/nairobi-gophers/gophercon2024-backend/pkg/tokens"
	"net/http"
)

func Authenticate(context *gin.Context) {
	token := context.Request.Header.Get("Authorization")

	if token == "" {
		context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Not authorized."})
		return
	}

	userId, err := tokens.VerifyToken(token)

	if err != nil {
		context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Not authorized."})
		return
	}
	context.Set("userId", userId)
	context.Next()
}
