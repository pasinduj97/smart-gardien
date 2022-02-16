const User = require('../models/user.model');

const getUser = async (req, res) => {
  try {
    const userName = req.params.id;
    if (userName) {
      const user = await User.findOne({ userName });

      res.status(200).json({
        success: true,
        data: { user },
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'name is empty',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const { model, price, year, description, manufacturer } = req.body;

    const newUser = new User({
      userName: 'nuwan',
      email: 'nuwan@gmail.com',
      watchList: ['60f12c8057330b3fc4057c18', '60f13ad2d24eae0bf0244a84'],
    });

    const user = await newUser.save();

    res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getUser,
  addUser,
};
