const User = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({
      message: 'Something went wrong',
    });
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: 'Wrong request',
      });
    }

    const updateUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      message: 'Updated successfully',
      updateUser,
    });
  } catch (error) {
    return res.status(401).json({
      message: 'You can not delete user',
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    try {
      if (!user) {
        return res.status(400).json({
          message: 'User not found',
        });
      }
      const deleteUser = await User.findByIdAndDelete(userId);
      return res.status(200).json({
        message: 'Deleted successfully',
        deleteUser,
      });
    } catch (error) {}
  } catch (error) {
    return res.status(401).json({
      message: 'You can not delete user',
    });
  }
};
