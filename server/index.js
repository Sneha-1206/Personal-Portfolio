import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
const DATA_FILE_PATH = path.resolve(__dirname, process.env.DATA_FILE_PATH || './data/projects.json');
const SUBMISSIONS_FILE_PATH = path.resolve(__dirname, process.env.SUBMISSIONS_FILE_PATH || './data/submissions.json');

// Middleware
app.use(cors({
  origin: [ALLOWED_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// Serve static assets from public folder
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Helper functions for reading/writing JSON files
const readJsonFile = (filePath, fallback = []) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return fallback;
};

const writeJsonFile = (filePath, data) => {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
};

// ============================================================================
// B1. Health Check Endpoint
// ============================================================================
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Portfolio Backend API Server is running',
    timestamp: new Date().toISOString()
  });
});

// ============================================================================
// B2. GET /api/projects - Serve Project List
// ============================================================================
app.get('/api/projects', (req, res) => {
  const projects = readJsonFile(DATA_FILE_PATH, []);
  res.status(200).json(projects);
});

// ============================================================================
// B3. GET /api/projects/:id - Serve a Single Project
// ============================================================================
app.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const projects = readJsonFile(DATA_FILE_PATH, []);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({
      error: 'Project not found',
      message: `No project found with ID '${id}'`
    });
  }

  res.status(200).json(project);
});

// ============================================================================
// B4. POST /api/contact - Handle Contact Form Submissions
// ============================================================================
app.post('/api/contact', (req, res) => {
  const { name, email, message, address } = req.body || {};
  const errors = {};

  // Server-side validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.name = 'Full name is required';
  } else if (name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters long';
  }

  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.email = 'Email address is required';
  } else if (!email.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    errors.message = 'Message is required';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      error: 'Validation Error',
      message: 'Invalid submission data. Please check field requirements.',
      errors
    });
  }

  // Create submission object
  const newSubmission = {
    id: `sub_${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    address: address ? address.trim() : '',
    message: message.trim(),
    submittedAt: new Date().toISOString()
  };

  // Read existing submissions and append
  const submissions = readJsonFile(SUBMISSIONS_FILE_PATH, []);
  submissions.push(newSubmission);
  writeJsonFile(SUBMISSIONS_FILE_PATH, submissions);

  return res.status(201).json({
    status: 'success',
    message: 'Your message has been received successfully!',
    data: newSubmission
  });
});

// ============================================================================
// B5. GET /api/contact - List Submissions (Verification Endpoint)
// ============================================================================
app.get('/api/contact', (req, res) => {
  const submissions = readJsonFile(SUBMISSIONS_FILE_PATH, []);
  res.status(200).json(submissions);
});

// ============================================================================
// B6. Centralized Error Handling & 404s
// ============================================================================

// 404 Catch-All Middleware for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.url} - Endpoint does not exist`
  });
});

// Global Error Handling Middleware
app.use((err, req, res, _next) => {
  console.error('Unhandled Error:', err);
  res.status(err.status || 500).json({
    error: err.name || 'Internal Server Error',
    message: err.message || 'An unexpected error occurred on the server'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio API server is running on http://localhost:${PORT}`);
});
