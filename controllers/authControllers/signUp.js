const User = require('../../models/userModel');

exports.signup = async (req, res, next) => {
  const { name, username, email, password, profile } = req.body;

  try {
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
