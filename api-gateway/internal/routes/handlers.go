package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/adapters"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
	"github.com/nairobi-gophers/gophercon2024-backend/pkg/tokens"
	"net/http"
	"strconv"
)

type Handler struct {
	userRepo   adapters.UserRepository
	eventRepo  adapters.EventRepo
	ticketRepo adapters.TicketRepo
}

func (h Handler) SignupHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		var user models.User
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data."})
			return
		}

		if err := h.userRepo.CreateUser(&user); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not save user."})
			return
		}

		c.JSON(http.StatusCreated, gin.H{"message": "User created successfully"})
	}
}

func (h Handler) LoginHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		var user models.User
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data."})
			return
		}

		if _, err := h.userRepo.ValidateCredentials(user.Email, user.Password); err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Could not authenticate user."})
			return
		}

		token, err := tokens.GenerateToken(user.Email, user.ID)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not generate token."})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Login successful!", "tokens": token})
	}
}

func (h Handler) GetEvents(context *gin.Context) {
	events, err := h.eventRepo.GetAll(context)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch events. Try again later."})
		return
	}
	context.JSON(http.StatusOK, events)
}

func (h Handler) GetEvent(context *gin.Context) {
	eventID, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse event id."})
		return
	}

	event, err := h.eventRepo.GetByID(context, eventID)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch event."})
		return
	}

	context.JSON(http.StatusOK, event)
}

func (h Handler) CreateEvent(context *gin.Context) {
	var event models.Event
	err := context.ShouldBindJSON(&event)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data."})
		return
	}

	userID := context.GetInt64("userId")
	event.UserID = userID

	err = h.eventRepo.SaveEvent(context, &event)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not create event. Try again later."})
		return
	}

	context.JSON(http.StatusCreated, gin.H{"message": "Event created!", "event": event})

}

func (h Handler) RegisterForEvent(context *gin.Context) {
	userId := context.GetInt64("userId")
	eventId, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse event id."})
		return
	}

	_, err = h.eventRepo.GetByID(context, eventId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch event."})
		return
	}

	err = h.eventRepo.Register(context, eventId, userId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not register user for event."})
		return
	}

	context.JSON(http.StatusCreated, gin.H{"message": "Registered!"})
}

func (h Handler) CancelRegistration(context *gin.Context) {
	userId := context.GetInt64("userId")
	eventId, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse event id."})
		return
	}

	err = h.eventRepo.CancelRegistration(context, eventId, userId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not cancel registration."})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Cancelled!"})
}

func NewHandler(userRepo adapters.UserRepository, eventRepo adapters.EventRepo, ticketRepo adapters.TicketRepo) *Handler {
	return &Handler{
		userRepo:   userRepo,
		eventRepo:  eventRepo,
		ticketRepo: ticketRepo,
	}
}
