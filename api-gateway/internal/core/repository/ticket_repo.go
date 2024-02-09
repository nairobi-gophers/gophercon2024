package repository

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
)

type TicketRepo struct {
	db *sql.DB
}

func (tr *TicketRepo) CreateTicket(ctx context.Context, ticket *models.Ticket) error {
	row := tr.db.QueryRowContext(ctx, CreateTicketQuery, ticket.EventID, ticket.UserID)
	if err := row.Scan(&ticket.ID); err != nil {
		return fmt.Errorf("creating ticket: %w", err)
	}
	return nil
}

func (tr *TicketRepo) GetByID(ctx context.Context, id int) (*models.Ticket, error) {
	row := tr.db.QueryRowContext(ctx, GetTicketByIDQuery, id)
	var ticket models.Ticket
	if err := row.Scan(&ticket.ID, &ticket.EventID, &ticket.UserID); err != nil {
		return nil, fmt.Errorf("fetching ticket: %w", err)
	}
	return &ticket, nil
}

func (tr *TicketRepo) GetByEventID(ctx context.Context, eventID int) ([]*models.Ticket, error) {
	rows, err := tr.db.QueryContext(ctx, GetTicketsByEventIDQuery, eventID)
	if err != nil {
		return nil, fmt.Errorf("fetching tickets: %w", err)
	}
	defer rows.Close()

	var tickets []*models.Ticket
	for rows.Next() {
		var ticket models.Ticket
		if err := rows.Scan(&ticket.ID, &ticket.EventID, &ticket.UserID); err != nil {
			return nil, fmt.Errorf("scanning ticket: %w", err)
		}
		tickets = append(tickets, &ticket)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("fetching tickets: %w", err)
	}
	return tickets, nil
}

func (tr *TicketRepo) GetByUserID(ctx context.Context, userID int) ([]*models.Ticket, error) {
	rows, err := tr.db.QueryContext(ctx, GetTicketsByUserIDQuery, userID)
	if err != nil {
		return nil, fmt.Errorf("fetching tickets: %w", err)
	}
	defer rows.Close()

	var tickets []*models.Ticket
	for rows.Next() {
		var ticket models.Ticket
		if err := rows.Scan(&ticket.ID, &ticket.EventID, &ticket.UserID); err != nil {
			return nil, fmt.Errorf("scanning ticket: %w", err)
		}
		tickets = append(tickets, &ticket)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("fetching tickets: %w", err)
	}
	return tickets, nil
}

func NewTicketRepository(db *sql.DB) TicketRepo {
	return TicketRepo{db: db}
}
