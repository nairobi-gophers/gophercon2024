package repository

import (
	"database/sql"
	"fmt"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
	"github.com/nairobi-gophers/gophercon2024-backend/pkg/hash"
)

type UserRepo struct {
	db *sql.DB
}

func (ur *UserRepo) CreateUser(user *models.User) error {
	stmt, err := ur.db.Prepare(createUserQuery)
	if err != nil {
		return fmt.Errorf("prepare statement error: %v", err)
	}
	defer stmt.Close()

	hashedPassword, err := hash.HashPassword(user.Password)
	if err != nil {
		return fmt.Errorf("hashing password error: %v", err)
	}

	var userID int64
	err = stmt.QueryRow(user.FirstName, user.LastName, user.Username, user.Email, hashedPassword).Scan(&userID)
	if err != nil {
		return fmt.Errorf("execution error: %v", err)
	}

	user.ID = userID
	return nil
}

func (ur *UserRepo) ValidateCredentials(email, password string) (*models.User, error) {
	var user models.User
	row := ur.db.QueryRow(validateCredentialsQuery, email)

	var retrievedPassword string
	err := row.Scan(&user.ID, &retrievedPassword)
	if err != nil {
		return nil, fmt.Errorf("query error: %v", err)
	}

	passwordIsValid := hash.CheckPasswordHash(password, retrievedPassword)
	if !passwordIsValid {
		return nil, fmt.Errorf("invalid credentials for email: %s", email)
	}

	user.Email = email
	return &user, nil
}

func NewUserRepository(db *sql.DB) UserRepo {
	return UserRepo{db: db}
}
