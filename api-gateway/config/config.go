package config

import (
	"fmt"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
	"html/template"
	"log"
	"os"
)

type AppConfig struct {
	TemplateCache map[string]*template.Template
	InfoLog       *log.Logger
	ErrorLog      *log.Logger
	MailChan      chan models.MailData
}

type DatabaseConfig struct {
	Host     string
	Port     string
	Password string
	User     string
}

type Db struct {
	ConnectionStr string
	Password      string
}

type MailConfig struct {
	Host     string
	Port     string
	Username string
	Password string
}
type Config struct {
	Database DatabaseConfig
	Db       Db
	App      AppConfig
	Mail     MailConfig
}

func LoadConfig() (*Config, error) {
	connString, ok := os.LookupEnv("DB_CONNECTION_STRING")
	if !ok {
		return nil, fmt.Errorf("missing required environment variable DB_CONNECTION_STRING")
	}

	passwd, ok := os.LookupEnv("DB_PASSWORD")
	if !ok {
		return nil, fmt.Errorf("missing required environment variable DB_PASSWORD")
	}

	mailHost, ok := os.LookupEnv("MAIL_HOST")
	if !ok {
		return nil, fmt.Errorf("missing required environment variable MAIL_HOST")
	}
	mailPort, ok := os.LookupEnv("MAIL_PORT")
	if !ok {
		return nil, fmt.Errorf("missing required environment variable MAIL_PORT")
	}

	mailUsername, ok := os.LookupEnv("MAIL_USERNAME")
	if !ok {
		return nil, fmt.Errorf("missing required environment variable MAIL_USERNAME")
	}

	mailPassword, ok := os.LookupEnv("MAIL_PASSWORD")
	if !ok {
		return nil, fmt.Errorf("missing required environment variable MAIL_PASSWORD")
	}

	cfg := &Config{
		Db: Db{
			ConnectionStr: connString,
			Password:      passwd,
		},

		Mail: MailConfig{
			Host:     mailHost,
			Port:     mailPort,
			Username: mailUsername,
			Password: mailPassword,
		},
	}
	return cfg, nil
}
