const userModel = require("../models/userModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not Found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      success: true,
      error,
    });
  }
};

// register callback
const registerController = async (req, res) => {
  try {
    const newUSer = new userModel(req.body);
    await newUSer.save();
    res.status(201).json({
      success: true,
      newUSer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
