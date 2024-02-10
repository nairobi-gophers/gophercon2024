package repository

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/nairobi-gophers/gophercon2024-backend/db"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
)

type EventRepo struct {
	db *sql.DB
}

// Save inserts a new event into the database

func (er *EventRepo) SaveEvent(ctx context.Context, event *models.Event) error {
	stmt, err := db.DB.PrepareContext(ctx, createEventQuery)
	if err != nil {
		return fmt.Errorf("prepare statement error: %v", err)
	}
	defer stmt.Close()

	result, err := stmt.ExecContext(ctx, event.Name, event.Description, event.Location, event.DateTime, event.UserID)
	if err != nil {
		return fmt.Errorf("execution error: %v", err)
	}

	id, err := result.LastInsertId()
	if err != nil {
		return fmt.Errorf("getting last insert ID error: %v", err)
	}
	event.ID = id

	return nil
}

// GetAll retrieves all events from the database
func (er *EventRepo) GetAll(ctx context.Context) ([]models.Event, error) {
	rows, err := db.DB.QueryContext(ctx, getAllEventsQuery)
	if err != nil {
		return nil, fmt.Errorf("query error: %v", err)
	}
	defer rows.Close()

	var events []models.Event

	for rows.Next() {
		var event models.Event
		err := rows.Scan(&event.ID, &event.Name, &event.Description, &event.Location, &event.DateTime, &event.UserID)
		if err != nil {
			return nil, fmt.Errorf("scan error: %v", err)
		}
		events = append(events, event)
	}

	return events, nil
}

// GetByID retrieves an event from the database by its ID
func (er *EventRepo) GetByID(ctx context.Context, id int64) (*models.Event, error) {
	var event models.Event
	row := db.DB.QueryRowContext(ctx, getEventByIDQuery, id)
	err := row.Scan(&event.ID, &event.Name, &event.Description, &event.Location, &event.DateTime, &event.UserID)
	if err != nil {
		return nil, fmt.Errorf("query error: %v", err)
	}
	return &event, nil
}

// Update updates an existing event in the database
func (er *EventRepo) Update(ctx context.Context, event *models.Event) error {
	stmt, err := db.DB.PrepareContext(ctx, updateEventQuery)
	if err != nil {
		return fmt.Errorf("prepare statement error: %v", err)
	}
	defer stmt.Close()

	_, err = stmt.ExecContext(ctx, event.Name, event.Description, event.Location, event.DateTime, event.ID)
	if err != nil {
		return fmt.Errorf("execution error: %v", err)
	}
	return nil
}

// Delete deletes an event from the database
func (er *EventRepo) Delete(ctx context.Context, id int64) error {
	stmt, err := db.DB.PrepareContext(ctx, deleteEventQuery)
	if err != nil {
		return fmt.Errorf("prepare statement error: %v", err)
	}
	defer stmt.Close()

	_, err = stmt.ExecContext(ctx, id)
	if err != nil {
		return fmt.Errorf("execution error: %v", err)
	}
	return nil
}

// Register registers a user for an event
func (er *EventRepo) Register(ctx context.Context, eventID, userID int64) error {
	stmt, err := db.DB.PrepareContext(ctx, registerForEventQuery)
	if err != nil {
		return fmt.Errorf("prepare statement error: %v", err)
	}
	defer stmt.Close()

	_, err = stmt.ExecContext(ctx, eventID, userID)
	if err != nil {
		return fmt.Errorf("execution error: %v", err)
	}
	return nil
}

// CancelRegistration cancels a user's registration for an event
func (er *EventRepo) CancelRegistration(ctx context.Context, eventID, userID int64) error {
	stmt, err := db.DB.PrepareContext(ctx, cancelRegistrationQuery)
	if err != nil {
		return fmt.Errorf("prepare statement error: %v", err)
	}
	defer stmt.Close()

	_, err = stmt.ExecContext(ctx, eventID, userID)
	if err != nil {
		return fmt.Errorf("execution error: %v", err)
	}
	return nil
}

func NewEventRepository(db *sql.DB) EventRepo {
	return EventRepo{db: db}
}
