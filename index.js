const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const signupRoute = require('./routes/auth/signupRoute');
dotenv.config();
app.use(express.json());

// Routes
app.use('/api/signup', signupRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});
