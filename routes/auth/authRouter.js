const { signup, login } = require('../../controllers/authControllers/signUp');

const authRouter = require('express').Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);

module.exports = authRouter;
