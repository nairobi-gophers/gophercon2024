package db

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"os"
)

var DB *sql.DB

func InitDB() {
	var err error

	dbConnectionString := os.Getenv("DB_CONNECTION_STRING")
	dbPassword := os.Getenv("DB_PASSWORD")

	dbConnectionString = fmt.Sprintf(dbConnectionString, dbPassword)

	DB, err = sql.Open("postgres", dbConnectionString)
	if err != nil {
		panic(fmt.Sprintf("failed to connect to the database: %v", err))
	}

	DB.SetMaxOpenConns(10)
	DB.SetMaxIdleConns(4)

	CreateTables()
}

func CreateTables() {
	createUserTable := `
	CREATE TABLE IF NOT EXISTS participants (
	    id SERIAL PRIMARY KEY,
		firstname TEXT NOT NULL,
		lastname TEXT NOT NULL,
		username TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	)
	`

	_, err := DB.Exec(createUserTable)

	if err != nil {
		panic("Could not create participants  table.")
	}

	createEventsTable := `
	CREATE TABLE IF NOT EXISTS events (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		description TEXT NOT NULL,
		location TEXT NOT NULL,
		dateTime TIMESTAMP NOT NULL,
		user_id INTEGER,
		FOREIGN KEY(user_id) REFERENCES users(id)
	)
	`

	_, err = DB.Exec(createEventsTable)

	if err != nil {
		panic("Could not create events table.")
	}

	createRegistrationsTable := `
	CREATE TABLE IF NOT EXISTS registrations (
		id SERIAL PRIMARY KEY,
		event_id INTEGER NOT NULL,
		user_id INTEGER NOT NULL,
		FOREIGN KEY(event_id) REFERENCES events(id),
		FOREIGN KEY(user_id) REFERENCES users(id)
	)
	`

	_, err = DB.Exec(createRegistrationsTable)

	if err != nil {
		panic("Could not create registrations table.")
	}
}
