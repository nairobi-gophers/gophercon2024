package mailer

import (
	"bytes"
	"html/template"
)

// This is a helper func that  renders the given template with the provided data

func executeTemplate(templateContent string, data interface{}) (string, error) {
	tmpl, err := template.New("emailTemplate").Parse(templateContent)
	if err != nil {
		return "", err
	}

	var tplOutput bytes.Buffer
	err = tmpl.Execute(&tplOutput, data)
	if err != nil {
		return "", err
	}

	return tplOutput.String(), nil
}
