
# ==============================================================================
# Docker support

backend/fresh:
	docker-compose -f docker-compose-dev.yml build && docker-compose -f docker-compose-dev.yml up -d

## backend/up: run the containers
backend/up:
	docker-compose -f docker-compose-dev.yml up -d
## backend/down: stop containers
backend/down: confirm
	docker-compose -f docker-compose-dev.yml down

### docker/prune: remove all containers on the system (not only current project)
docker/prune: confirm
	docker system prune -f

## backend/build: build only the backend container

backend/build:
	docker compose -f docker-compose-dev.yml up backend -d --build


.PHONY: backend/fresh backend/up backend/down docker/prune backend/build

