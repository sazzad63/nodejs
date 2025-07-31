const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth/authRouter');
const userRoute = require('./routes/userRoute');
dotenv.config();
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});
