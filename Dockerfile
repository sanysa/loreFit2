FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN npm --prefix frontend install
COPY frontend/ ./frontend/
RUN npm --prefix frontend run build

FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./backend/
RUN npm --prefix backend install --production
COPY backend/ ./backend/
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

EXPOSE 5001
CMD ["sh", "-c", "node backend/db/migrate.js && node backend/index.js"]
