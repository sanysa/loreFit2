# Docker Compose Setup for LoreFit

## Services

- **PostgreSQL 15**: Database server
- **Backend**: Node.js Express API (port 5001)
- **Frontend**: Vite React app (port 5173)

## Quick Start

### Start all services:
```bash
docker-compose up
```

### Build and start:
```bash
docker-compose up --build
```

### Stop all services:
```bash
docker-compose down
```

### Remove volumes (reset database):
```bash
docker-compose down -v
```

## Service Details

### PostgreSQL (postgres)
- Host: `postgres` (within network) or `localhost` (from host)
- Port: 5432
- Username: postgres
- Password: postgres
- Database: lorefit
- Data persisted in `postgres_data` volume

### Backend (backend)
- URL: http://localhost:5001
- Runs on port 5001
- Automatically runs migrations on startup
- Environment variables configured in `docker-compose.yml`
- Hot reload enabled via volume mount

### Frontend (frontend)
- URL: http://localhost:5173
- Runs on port 5173
- Vite dev server with HMR
- API communicates with backend at `http://backend:5001` (within Docker)

## Environment Variables

Edit `docker-compose.yml` to change:
- `JWT_SECRET`: JWT signing secret (change in production!)
- `ADMIN_EMAILS`: Comma-separated list of admin emails
- Database credentials for PostgreSQL

## Production Deployment

For production, update:
1. `JWT_SECRET` to a secure random value
2. `POSTGRES_PASSWORD` to a strong password
3. Remove `volumes` for source code (use COPY instead)
4. Use proper environment file management
5. Set `NODE_ENV: production` in backend
