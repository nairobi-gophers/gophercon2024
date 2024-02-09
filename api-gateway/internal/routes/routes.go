package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/repository"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/routes/middlewares"
)

func RegisterRoutes(server *gin.Engine, userRepo repository.UserRepo, eventRepo repository.EventRepo, ticketRepo repository.TicketRepo) {
	handler := NewHandler(&userRepo, &eventRepo, &ticketRepo)

	server.Use(middlewares.ConfigureCORS())

	authenticated := server.Group("/")
	authenticated.Use(middlewares.Authenticate)

	server.POST("/signup", handler.SignupHandler())
	server.POST("/login", handler.LoginHandler())

	authenticated.GET("/events", handler.GetEvents)
	authenticated.GET("/events/:id", handler.GetEvent)
	authenticated.POST("/events", handler.CreateEvent)

	authenticated.POST("/events/:id/register", handler.RegisterForEvent)
	authenticated.DELETE("/events/:id/register", handler.CancelRegistration)

}
