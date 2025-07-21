const { signup } = require('../../controllers/authControllers/signUp');

const signupRoute = require('express').Router();

signupRoute.post('/', signup);

module.exports = signupRoute;
