const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // e.g., 'gmail'
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password'
  }
});

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Construct the email message
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Form submitted successfully!');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
