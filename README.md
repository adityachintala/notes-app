# Notes App — MERN CRUD Lab Activity

- **Candidate:** Aditya Chintala
- **Roll Number:** 2026201068
- **GitHub Repository:** https://github.com/adityachintala/notes-app

A two-tier MERN application for creating, listing, and deleting notes (`title`, `content`, `createdAt`).

## Stack

- **Server:** Node.js, Express, Mongoose, CORS — connects to a local MongoDB daemon at `mongodb://localhost:27017/notes_db`
- **Client:** React (Vite), Axios

## Prerequisites

A local MongoDB server must be running on the default port (`27017`) before starting the backend.

## Setup & Run

### 1. Backend

```bash
cd server
npm install
npm start               # runs on http://localhost:8000
```

### 2. Frontend

In a separate terminal:

```bash
cd client
npm install
npm run dev              # runs on http://localhost:5173
```

Open http://localhost:5173 in a browser.

## API Endpoints

| Method | Route             | Description                                |
|--------|--------------------|----------------------------------------------|
| POST   | `/api/notes`       | Create a note, returns `201` with the note   |
| GET    | `/api/notes`       | List all notes, newest first                 |
| DELETE | `/api/notes/:id`   | Delete a note, returns `200` or `404`        |

## Notes

- Screenshots demonstrating CRUD functionality are in `screenshots/`.
