package dto

type TicketPurchaseRequest struct {
	FirstName string `json:"firstName" `
	LastName  string `json:"lastName" `
	EventName string `json:"eventName" `
	EventDate string `json:"eventDate" `
	TicketID  string `json:"ticketId" `
	Email     string `json:"email" `
	Quantity  int    `json:"quantity" `
}
