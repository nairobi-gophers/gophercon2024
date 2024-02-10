package models

import (
	"time"
)

type Event struct {
	ID               int64
	Name             string    `binding:"required"`
	Description      string    `binding:"required"`
	Location         string    `binding:"required"`
	DateTime         time.Time `binding:"required"`
	UserID           int64
	StartDate        time.Time `json:"startDate" `
	EndDate          time.Time `json:"endDate"`
	Venue            string    `json:"venue" `
	Capacity         int       `json:"capacity" `
	TicketsAvailable int       `json:"-"`
}
