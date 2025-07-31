const { authMiddleware } = require('../middlewares/auth');
const authRouter = require('./auth/authRouter');
const userRoute = require('express').Router();
const {
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

userRoute.get('/', authMiddleware, getAllUsers);
userRoute.put('/update/:userId', authMiddleware, updateUser);
userRoute.delete('/delete/:userId', authMiddleware, deleteUser);

module.exports = userRoute;
