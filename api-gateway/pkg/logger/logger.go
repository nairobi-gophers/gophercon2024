package logger

import (
	"go.uber.org/zap"
)

type Logger interface {
	Error(args ...interface{})
	Errorf(template string, args ...interface{})
	Err(msg string, err error)
	Fatal(args ...interface{})
	Fatalf(template string, args ...interface{})
	Printf(template string, args ...interface{})
	Info(args ...interface{})
	Infof(template string, args ...interface{})
}

type appLogger struct {
	level       string
	devMode     bool
	encoding    string
	sugarLogger *zap.SugaredLogger
	logger      *zap.Logger
}

type Config struct {
	LogLevel string `mapstructure:"logLevel"`
	Encoder  string `mapstructure:"encoder"`
}

func NewAppLogger(cfg *Config) *appLogger {
	return &appLogger{level: cfg.LogLevel, encoding: cfg.Encoder}
}
