# CodeRower Assignment

This is a full-stack application for the CodeRower assignment, consisting of a Node.js backend and a React frontend.

## Project Structure

```
.
├── backend/         # Node.js backend
└── frontend/        # React frontend
```

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The backend server will run on http://localhost:3000

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend application will run on http://localhost:3001

## Features

1. View Configuration
   - Enter a configuration ID to view the corresponding 2D array data
   - Data is displayed in a grid format

2. Update Remark
   - Enter a configuration ID and new remark
   - Submit to update the remark for the specified configuration

## Technologies Used

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

- Frontend:
  - React
  - TypeScript
  - Material-UI
  - Axios
  - React Router 