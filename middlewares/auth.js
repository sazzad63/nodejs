const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {
  //   next();
  try {
    const token = req.headers.authorization;
    // console.log(token);
    if (!token) {
      return res.status(401).json({
        message: 'Access not allow',
      });
    }

    const sToken = token.split(' ')[1];
    const decode = jwt.verify(sToken, process.env.PRIVATE_KEY);
    const id = decode.id;
    const user = await User.findById(id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed',
    });
  }
};
