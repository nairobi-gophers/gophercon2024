# Variables
APP_NAME=gophercon2024-backend

#================================
#== DOCKER Targets
#================================
DOCKER := @docker

build:
	$(DOCKER) build -t $(APP_NAME) .

run:
	$(DOCKER) run -d -p 8000:8000 $(APP_NAME)
