package models

type Ticket struct {
	FirstName string `json:"firstName" "`
	LastName  string `json:"lastName" `
	EventName string `json:"eventName" `
	EventDate string `json:"eventDate" `
	TicketID  string `json:"ticketId" `
	Email     string `json:"email" `
	UserID    any
	EventID   any
	ID        any
}
