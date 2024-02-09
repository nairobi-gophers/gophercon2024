package repository

const (
	// User queries
	createUserQuery          = `INSERT INTO participants (firstname, lastname, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING id`
	validateCredentialsQuery = `SELECT id, password FROM participants WHERE email = $1`

	// Event queries

	createEventQuery        = `INSERT INTO events(name, description, location, datetime, user_id) VALUES ($1, $2, $3, $4, $5)`
	getAllEventsQuery       = `SELECT * FROM events`
	getEventByIDQuery       = `SELECT * FROM events WHERE id = $1`
	updateEventQuery        = `UPDATE events SET name = ?, description = ?, location = ?, datetime = ? WHERE id = ?`
	deleteEventQuery        = `DELETE FROM events WHERE id = ?`
	registerForEventQuery   = `INSERT INTO registrations(event_id, user_id) VALUES (?, ?)`
	cancelRegistrationQuery = `DELETE FROM registrations WHERE event_id = ? AND user_id = ?`

	// Ticket queries

	CreateTicketQuery        = "INSERT INTO tickets (event_id, user_id) VALUES ($1, $2) RETURNING id"
	GetTicketByIDQuery       = "SELECT id, event_id, user_id FROM tickets WHERE id = $1"
	GetTicketsByEventIDQuery = "SELECT id, event_id, user_id FROM tickets WHERE event_id = $1"
	GetTicketsByUserIDQuery  = "SELECT id, event_id, user_id FROM tickets WHERE user_id = $1"
)
