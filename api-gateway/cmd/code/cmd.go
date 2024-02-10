package Code

import (
	"github.com/gin-gonic/gin"
	"github.com/nairobi-gophers/gophercon2024-backend/config"
	"github.com/nairobi-gophers/gophercon2024-backend/db"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/repository"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/routes"
)

var app config.AppConfig

func Run() {
	_, err := config.LoadConfig()
	if err != nil {
		panic(err)
	}
	db.InitDB()

	router := gin.Default()

	userRepo := repository.NewUserRepository(db.DB)
	eventRepo := repository.NewEventRepository(db.DB)
	ticketRepo := repository.NewTicketRepository(db.DB)

	routes.RegisterRoutes(router, userRepo, eventRepo, ticketRepo)

	router.Run(":8080")

	defer db.DB.Close()
}
