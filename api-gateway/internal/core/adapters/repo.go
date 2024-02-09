package adapters

import (
	"context"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
)

type EventRepo interface {
	SaveEvent(context.Context, *models.Event) error
	GetAll(context.Context) ([]models.Event, error)
	GetByID(context.Context, int64) (*models.Event, error)
	Update(context.Context, *models.Event) error
	Delete(context.Context, int64) error
	Register(context.Context, int64, int64) error
	CancelRegistration(context.Context, int64, int64) error
}

type TicketRepo interface {
	CreateTicket(ctx context.Context, ticket *models.Ticket) error
	GetByID(ctx context.Context, id int) (*models.Ticket, error)
	GetByEventID(ctx context.Context, eventID int) ([]*models.Ticket, error)
	GetByUserID(ctx context.Context, userID int) ([]*models.Ticket, error)
}

type UserRepository interface {
	CreateUser(user *models.User) error
	ValidateCredentials(email, password string) (*models.User, error)
}
