package middlewares

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func ConfigureCORS() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:8080"}
	config.AllowHeaders = append(config.AllowHeaders, "Authorization")
	config.ExposeHeaders = []string{"Content-Length"}
	config.AllowCredentials = true
	return cors.New(config)
}
