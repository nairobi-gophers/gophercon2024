# Nairobi Gophers
Backend API for the upcoming Gophercon to be held in Kenya in 2024 (Date TBA).

## Running the project locally
1. Frontend
To run the frontend, navigate to the `frontend` directory 
```shell
cd frontend
```
Install the dependencies
```shell
yarn install
```

Start the development server
```shell
yarn dev
```

The project is monolithic.
## Infrastructure
- Docker    (Containerization)
- Postgres  (Database)
- [Liquibase](https://www.liquibase.org/) (DB Migration)
- Drone     (CI/CD)

## Dependencies
- Web Framework: [Gin](https://github.com/gin-gonic/gin)
- Database Client: [pgx](https://github.com/jackc/pgx)
- DB Migration: [Liquibase](https://www.liquibase.org/)
- Logging: [Zap](https://github.com/uber-go/zap)
- Test/Mocking: [Testify](https://github.com/stretchr/testify)


## Features
- [ ] User Registration
- [ ] User Login
- [ ] Ticket Purchase
- [ ] Mpesa/Credit Card Integration
- [ ] Ticket Generation/Mailing


## Project Structure
The project is will use a [Clean architecture](https://github.com/golang-standards/project-layout) approach. The project structure is as follows:
- `cmd/` - Main applications for this project.
- `internal/` - Private application and library code.
  - `platform/` - Platform-specific code for interacting with the DB, filesystem, etc
  - `app/` - Application specific code.
  - `server/` - HTTP server initialisation.
- `pkg/` - Library code.
- `docs/` - Documentation for the project.
- `configs/` - Configuration files.

