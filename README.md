# Interactive Multi-Page Personal Portfolio Web Application
### Assignment 3: Backend Integration (Node.js / Express API)

**NATIONAL INSTITUTE OF TECHNOLOGY, WARANGAL**  
**Department of Computer Science and Engineering**  
**Course Code:** CS1303 - Full Stack Development  
**Student Name:** Sneha Priya Valeru  

---

## 1. Executive Summary & Assignment 3 Overview

This repository extends the React Portfolio Website built in Assignment 2 by integrating a live **Node.js / Express REST API backend**. The static project data previously stored in the frontend is now served dynamically by the Express backend, and contact form submissions are validated and persisted server-side.

All Assignment 2 frontend features (Navbar, routing, theme toggle, dynamic project details, 404 handler) continue to work seamlessly, while data fetching and form persistence are now handled asynchronously using standard `fetch` API calls inside React `useEffect` hooks.

---

## 2. Quick Start & Execution Guide

The application is structured into two main directories within the same repository:
- `/server`: Node.js / Express REST API Backend
- `/`: React + Vite SPA Frontend

### System Requirements
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

---

### Starting the Application (2 Documented Commands)

To run the application, open two separate terminal windows or tabs:

#### Command 1: Start the Express Backend Server
```bash
cd server
npm start
```
*The backend server will launch on `http://localhost:5000`.*

#### Command 2: Start the React Frontend Dev Server
```bash
npm run dev
```
*The React application will launch on `http://localhost:5173`.*

---

## 3. Technologies & Architecture

### Backend Stack
- **Node.js & Express.js**: REST API server implementation.
- **dotenv**: Environment variable management (`.env`).
- **cors**: Cross-Origin Resource Sharing middleware.
- **File System Persistence**: Local JSON file storage (`projects.json` & `submissions.json`).

### Frontend Stack
- **React (v19)**: SPA UI framework.
- **`react-router-dom` (v7)**: Client-side dynamic routing.
- **Fetch API & `useEffect`**: Asynchronous data fetching, loading spinners, and error state handling.
- **CSS Variables & Glassmorphism**: Responsive light/dark theme aesthetics.

---

## 4. Backend API Endpoint Documentation (B1 – B7)

| Requirement | HTTP Method | Endpoint Path | Description | Status Codes |
| :--- | :--- | :--- | :--- | :--- |
| **B1** | `GET` | `/` | API Health Check and Server Status | `200 OK` |
| **B2** | `GET` | `/api/projects` | Fetch all project records | `200 OK` |
| **B3** | `GET` | `/api/projects/:id` | Fetch single project by unique `id` | `200 OK`, `404 Not Found` |
| **B4** | `POST` | `/api/contact` | Validate & persist contact form submission | `201 Created`, `400 Bad Request` |
| **B5** | `GET` | `/api/contact` | List all contact submissions (Verification) | `200 OK` |
| **B6** | `ANY` | `/api/*` (Catch-all) | Global 404 & Centralized Error Middleware | `404 Not Found`, `500 Server Error` |
| **B7** | `ALL` | All Endpoints | CORS enabled for `http://localhost:5173` | Compliant |

> [!NOTE]
> **Open Endpoint Notice (B5):**  
> `GET /api/contact` is intentionally left unauthenticated for grading and verification purposes. In a production environment, this endpoint would be protected behind administrative authentication middleware.

---

## 5. Sample `curl` Commands & API Responses

### B1. Health Check
```bash
curl -i -X GET http://localhost:5000/
```
**Response (`200 OK`):**
```json
{
  "status": "ok",
  "message": "Portfolio Backend API Server is running",
  "timestamp": "2026-08-30T11:40:47.826Z"
}
```

---

### B2. GET All Projects
```bash
curl -i -X GET http://localhost:5000/api/projects
```
**Response (`200 OK`):**
```json
[
  {
    "id": "compiler-error-explainer",
    "title": "Compiler Error Explainer",
    "description": "An NLP-based web application that converts compiler errors into easy-to-understand explanations using Machine Learning, Sentence Transformers and Flask.",
    "fullDescription": "This project is an advanced NLP-based utility designed to bridge the gap between complex compiler feedback and beginner developers...",
    "techStack": ["NLP", "Machine Learning", "Sentence Transformers", "Flask", "Python", "HTML/CSS"],
    "image": "/assets/compiler.png",
    "link": "https://github.com/Sneha-1206/Compiler-Error-Explainer-Using-NLP"
  },
  {
    "id": "pickmyflick",
    "title": "PickMyFlick",
    "description": "A collaborative movie recommendation platform...",
    "fullDescription": "PickMyFlick is a social, collaborative movie recommendation engine...",
    "techStack": ["React", "Node.js", "Express", "MongoDB", "Collaborative Filtering", "Socket.io"],
    "image": "/assets/pickmyflick.png",
    "link": "https://github.com/Sneha-1206/PickMyFlick"
  }
]
```

---

### B3. GET Single Project

#### Success Case (`200 OK`):
```bash
curl -i -X GET http://localhost:5000/api/projects/compiler-error-explainer
```
**Response:**
```json
{
  "id": "compiler-error-explainer",
  "title": "Compiler Error Explainer",
  "description": "An NLP-based web application...",
  "fullDescription": "This project is an advanced NLP-based utility...",
  "techStack": ["NLP", "Machine Learning", "Sentence Transformers", "Flask", "Python", "HTML/CSS"],
  "image": "/assets/compiler.png",
  "link": "https://github.com/Sneha-1206/Compiler-Error-Explainer-Using-NLP"
}
```

#### Failure Case (`404 Not Found`):
```bash
curl -i -X GET http://localhost:5000/api/projects/non-existent-id
```
**Response:**
```json
{
  "error": "Project not found",
  "message": "No project found with ID 'non-existent-id'"
}
```

---

### B4. POST Contact Form Submission

#### Success Case (`201 Created`):
```bash
curl -i -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sneha Priya Valeru",
    "email": "snehapriyavaleru12@gmail.com",
    "address": "NIT Warangal Campus",
    "message": "Hello! Interested in collaborating on full stack projects."
  }'
```
**Response:**
```json
{
  "status": "success",
  "message": "Your message has been received successfully!",
  "data": {
    "id": "sub_1788090047871",
    "name": "Sneha Priya Valeru",
    "email": "snehapriyavaleru12@gmail.com",
    "address": "NIT Warangal Campus",
    "message": "Hello! Interested in collaborating on full stack projects.",
    "submittedAt": "2026-08-30T11:40:47.871Z"
  }
}
```

#### Failure Case 1: Missing Required Fields (`400 Bad Request`):
```bash
curl -i -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "",
    "email": "snehapriyavaleru12@gmail.com",
    "message": ""
  }'
```
**Response:**
```json
{
  "error": "Validation Error",
  "message": "Invalid submission data. Please check field requirements.",
  "errors": {
    "name": "Full name is required",
    "message": "Message is required"
  }
}
```

#### Failure Case 2: Invalid Email Format (`400 Bad Request`):
```bash
curl -i -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "invalidemailformat.com",
    "message": "Valid message text length."
  }'
```
**Response:**
```json
{
  "error": "Validation Error",
  "message": "Invalid submission data. Please check field requirements.",
  "errors": {
    "email": "Please enter a valid email address"
  }
}
```

---

### B5. GET Contact Submissions (Verification)
```bash
curl -i -X GET http://localhost:5000/api/contact
```
**Response (`200 OK`):**
```json
[
  {
    "id": "sub_1788090047871",
    "name": "Sneha Priya Valeru",
    "email": "snehapriyavaleru12@gmail.com",
    "address": "NIT Warangal Campus",
    "message": "Hello! Interested in collaborating on full stack projects.",
    "submittedAt": "2026-08-30T11:40:47.871Z"
  }
]
```

---

### B6. Centralized 404 Route Handling
```bash
curl -i -X GET http://localhost:5000/api/doesnotexist
```
**Response (`404 Not Found`):**
```json
{
  "error": "Not Found",
  "message": "Cannot GET /api/doesnotexist - Endpoint does not exist"
}
```

---

## 6. Environment Variables (`.env.example`)

The backend server relies on environment configuration loaded using `dotenv`.

### File: `server/.env.example`
```env
# Express Server Port
PORT=5000

# Allowed CORS Origin for React Frontend
ALLOWED_ORIGIN=http://localhost:5173

# Data File Paths
DATA_FILE_PATH=./data/projects.json
SUBMISSIONS_FILE_PATH=./data/submissions.json
```

> [!IMPORTANT]
> A copy of `.env.example` is committed to the repository. The actual `.env` file is listed in `.gitignore` to ensure configuration secrets are never committed.

---

## 7. Postman Collection Deliverable

An exported Postman Collection v2.1.0 file is available at the root of this repository:
[`portfolio_api.postman_collection.json`](./portfolio_api.postman_collection.json)

It includes pre-configured requests for all 9 API test cases (B1 through B6 success and failure modes).

---

## 8. Frontend Integration Details (F1 – F4)

- **F1 (Projects Page Integration):** `Projects.jsx` consumes data directly from `GET /api/projects` using `useEffect`. Static data import `projects.js` has been completely eliminated for rendering. Displays an animated loading spinner while fetching.
- **F2 (Graceful Error Handling):** If the backend is unreachable (e.g., server process stopped), the Projects page renders a clean error UI with an explicit message and a "Retry Connection" button. Upon restarting the backend and clicking retry or refreshing, normal behavior resumes.
- **F3 (Dynamic Detail Page Deep Links):** `ProjectDetail.jsx` fetches `GET /api/projects/:projectId` dynamically. Supports direct deep links (e.g. manual URL refresh). Renders a custom 404 view for invalid project IDs.
- **F4 (Contact Form Submission):** `ContactForm.jsx` posts data to `POST /api/contact`. Server-side validation errors (e.g., HTTP 400) are caught and displayed in a alert box. On HTTP 201 success, form fields reset and a confirmation message is shown.

---

## 9. Screen Recording Walkthrough Script (2–3 Minutes)

When recording your demonstration video for submission, follow this simple step-by-step flow:

1. **Step 1: Projects Page Remote Data Fetching (F1)**  
   - Start both servers (`npm start` in `/server`, `npm run dev` in root).
   - Open browser to `http://localhost:5173/projects`.
   - Show all project cards rendering dynamically from the Express API (`GET /api/projects`).
2. **Step 2: Project Detail Deep Link (F3)**  
   - Click "Learn More" on a project or enter `http://localhost:5173/projects/compiler-error-explainer` in address bar and hit refresh.
   - Show project details loading from `GET /api/projects/:id`.
   - Enter `http://localhost:5173/projects/invalid-id` to demonstrate the clean 404 Project Not Found view.
3. **Step 3: Contact Form Live Submission (F4 & B5)**  
   - Navigate to `/contact`. Fill out name, email, address, and message.
   - Click "Send Message". Show success banner.
   - Open a browser tab to `http://localhost:5000/api/contact` to verify the submission appeared in the JSON array.
4. **Step 4: Frontend Server Stop Error Handling (F2)**  
   - In the backend terminal, press `Ctrl + C` to stop the Express server.
   - Reload the Projects page on the frontend.
   - Demonstrate the visible error alert ("Backend Server Unreachable").
   - Restart the Express backend (`npm start`), click "Retry Connection" in the browser, and demonstrate seamless recovery!

---

## 10. Repository File Structure

```text
Assignment_3_FSD/
├── portfolio_api.postman_collection.json
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectsGrid.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   └── App.css
└── server/
    ├── package.json
    ├── server.js (or index.js)
    ├── .env
    ├── .env.example
    ├── data/
    │   ├── projects.json
    │   └── submissions.json
    └── public/
        └── assets/
```