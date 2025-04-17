// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes"); // Import the contact route

// Load environment variables from .env file (optional)
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes); // Mount the contact route

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("Triumphs of Talent Healthcare Consultants Backend is Running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
