/* import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

// Define the interface for the request body
interface ContactForm {
  name: string;
  mobile: string;
  email: string;
  interest: string;
  message: string;
}

const app = express();
const port = 4200; // Use a different port

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200', // Allow requests from your Angular app
  methods: ['GET', 'POST'],       // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aniketgoture300@gmail.com',
    pass: 'avorzfvitrxlpdaj'
  }
});

// POST route for contact form
app.post('/contact', (req: express.Request<{}, {}, ContactForm>, res: express.Response) => {
  const { name, mobile, email, interest, message } = req.body;

  const mailOptions = {
    from: 'aniketgoture300@gmail.com',
    to: 'aniketgoture300@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Mobile: ${mobile}
      Email: ${email}
      Area of Interest: ${interest}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    return res.status(200).send('Email sent successfully');
  });

  // Return a response in case the callback isn't invoked
  return res.status(500).send('Unexpected error occurred');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
 */


// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// const port = 3000; // Update to a different port (e.g., 3000)

// app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://localhost:4200',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'aniketgoture300@gmail.com',
//     pass: 'avorzfvitrxlpdaj', // Use a more secure way to handle credentials
//   }
// });

// interface ContactForm {
//   name: string;
//   mobile: string;
//   email: string;
//   interest: string;
//   message: string;
// }

// app.post('/contact', (req: express.Request<{}, {}, ContactForm>, res: express.Response) => {
//   const { name, mobile, email, interest, message } = req.body;

//   // Validate required fields
//   if (!name || !mobile || !email || !interest || !message) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const mailOptions = {
//     from: 'aniketgoture300@gmail.com',
//     to: 'aniketgoture300@gmail.com', // Send to your own email for testing
//     subject: 'New Contact Form Submission',
//     text: `
//       Name: ${name}
//       Mobile: ${mobile}
//       Email: ${email}
//       Area of Interest: ${interest}
//       Message: ${message}
//     `
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ message: 'Error sending email', error: error.message });
//     }
//     res.status(200).json({ message: 'Email sent successfully', info });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables from a `.env` file
dotenv.config();

const app = express();
const port = 3000; // Keep this as is, or change if needed

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200', // Frontend URL for CORS
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "aniketgoture300@gmail.com", // Use environment variable for email
    pass: "avorzfvitrxlpdaj", // Use environment variable for password
  }
});

// Interface for contact form data
interface ContactForm {
  name: string;
  mobile: string;
  email: string;
  interest: string;
  message: string;
}

app.post('/contact', async (req: express.Request<{}, {}, ContactForm>, res: express.Response): Promise<void> => {
  const { name, mobile, email, interest, message } = req.body;

  // Validate required fields
  if (!name || !mobile || !email || !interest || !message) {
    res.status(400).json({ message: 'All fields are required' }); // No need to return a value
    return; // End the function here after sending the response
  }

  const mailOptions = {
    from: "aniketgoture300@gmail.com",
    to: "aniketgoture300@gmail.com", // Receiver email (your own for testing)
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Mobile: ${mobile}
      Email: ${email}
      Area of Interest: ${interest}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' }); // Send response on success
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: (error as Error).message }); // Send response on error
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});






/* 
worked
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 4200; // Use a different port

// Middleware to parse JSON body
app.use(bodyParser.json());

// Middleware to allow CORS
app.use(cors({
  origin: 'http://localhost:4200', // Update this if your Angular frontend runs on a different port
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aniketgoture300@gmail.com',
    pass: 'avorzfvitrxlpdaj', // Replace with your actual password or app-specific password
  }
});

// Define the structure of the contact form (for TypeScript typing)
interface ContactForm {
  name: string;
  mobile: string;
  email: string;
  interest: string;
  message: string;
}

// POST route for contact form
app.post('/contact', (req: express.Request<{}, {}, ContactForm>, res: express.Response) => {
  console.log("POST /contact received");

  const { name, mobile, email, interest, message } = req.body;
  console.log("Request body:", req.body); // Log the incoming request body

  // Ensure all required fields are present
  if (!name || !mobile || !email || !interest || !message) {
    console.error("Missing required fields");
    return res.status(400).send("All fields are required");
  }

  const mailOptions = {
    from: 'aniketgoture300@gmail.com',
    to: 'aniketgoture300@gmail.com', // Send to your own email for testing
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Mobile: ${mobile}
      Email: ${email}
      Area of Interest: ${interest}
      Message: ${message}
    `
  };

  // Send the email using nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response); // Log the response
    return res.status(200).send('Email sent successfully');
  });

  // Return a generic error response in case the callback isn't invoked
  return res.status(500).send('Unexpected error occurred');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
 */
