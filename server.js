import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(
  cors({
    origin: 'http://your-frontend-domain.com', // Change to your frontend domain
  })
);
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send Quote Request Email
app.post('/send-email', (req, res) => {
  const { name, email, phone, location, contact, workType, details, budget, source } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send('Name, email, and phone are required.');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'flimpasolutions@gmail.com', // Replace with your email
    subject: 'New Quote Request',
    text: `
      You have a new quote request:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Location: ${location}
      Contact: ${contact}
      Work Type: ${workType}
      Details: ${details}
      Budget: ${budget}
      Source: ${source}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send email: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Send Contact Form Submission Email
app.post('/send-contact-email', (req, res) => {
  const { name, email, phone, address, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).send('Name, email, phone, and message are required.');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'flimpasolutions@gmail.com', // Replace with your email
    subject: 'New Contact Form Submission',
    text: `
      You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send email: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
