package models

type User struct {
	ID        int64  `json:"id"`
	FirstName string `json:"firstname" `
	LastName  string `json:"lastname" `
	Username  string `json:"username" `
	Email     string `json:"email" binding:"required"`
	Password  string `json:"password" binding:"required"`
}
