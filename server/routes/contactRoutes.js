// routes/contactRoutes.js

const express = require("express");
const router = express.Router();

// Dummy route to handle contact form submissions
router.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  // Log the form data (You can replace this with email functionality later)
  console.log("New Contact Form Submission:", { name, email, message });

  // Respond with a success message
  res.status(200).json({ success: "Your message has been sent!" });
});

module.exports = router;
