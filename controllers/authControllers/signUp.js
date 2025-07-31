const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register
exports.signup = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { name, username, email, password, profile } = req.body;

    const user = await User.create({
      name,
      username,
      email,
      password,
      profile,
    });

    res.status(201).json({
      message: `Hello, ${name} ! your account created successfully`,
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// login
exports.login = async (req, res, next) => {
  // res.send('from login controller');
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        message: 'Username not found',
      });
    }

    const validated = await bcrypt.compare(password, user.password);

    if (!validated) {
      return res.status(401).json({
        message: 'Wrong password',
      });
    }

    const token = await jwt.sign(
      { username, _id: user.id },
      process.env.PRIVATE_KEY,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      message: 'Login success',
      token,
    });
  } catch (error) {
    return res.status(401).json({
      message: 'Not found',
    });
  }
};
