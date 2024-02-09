package mailer

import (
	"fmt"
	"github.com/nairobi-gophers/gophercon2024-backend/config"
	"github.com/nairobi-gophers/gophercon2024-backend/internal/core/models"
	"github.com/nairobi-gophers/gophercon2024-backend/pkg/validation"
	"net/smtp"
	"os"
)

var app config.AppConfig

func SendEmail(mailData models.MailData, templateContent string, senderEmail string, smtpServer string, smtpPort string, smtpUsername string, smtpPassword string) error {
	auth := smtp.PlainAuth("", smtpUsername, smtpPassword, smtpServer)

	// Validate the email address
	if !validation.EmailRX.MatchString(mailData.To) {
		return fmt.Errorf("invalid email address: %s", mailData.To)
	}

	// Execute the email template
	content, err := executeTemplate(templateContent, nil)
	if err != nil {
		return fmt.Errorf("error executing email template: %w", err)
	}

	// Construct the email message
	message := fmt.Sprintf("Subject: %s\r\n", mailData.Subject)
	message += fmt.Sprintf("From: %s\r\n", senderEmail)
	message += fmt.Sprintf("To: %s\r\n", mailData.To)
	message += "\r\n" + content

	// Send the email
	err = smtp.SendMail(smtpServer+":"+smtpPort, auth, senderEmail, []string{mailData.To}, []byte(message))
	if err != nil {
		return fmt.Errorf("error sending email: %w", err)
	}

	return nil
}

// ListenForMail starts listening for mail on the configured channel

func ListenForMail(senderEmail, smtpServer, smtpPort, smtpUsername, smtpPassword string) {
	for {
		select {
		case mailData := <-app.MailChan:

			templateContent, err := os.ReadFile("templates/ticket.tmpl")
			if err != nil {
				fmt.Println("Error reading template file:", err)
				continue
			}

			err = SendEmail(mailData, string(templateContent), senderEmail, smtpServer, smtpPort, smtpUsername, smtpPassword)
			if err != nil {
				fmt.Println("Error sending email:", err)
			}
		}
	}
}
