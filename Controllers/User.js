import User from "../Models/UserModel.js";
import Joi from "joi";
import validateUser from "../Validations/UserValidate.js";
import JoiHelper from "../Utiles/JoiHelper.js";
export const register = async (req, res) => {
  try {
    // Check Validation
    if (JoiHelper(validateUser, req.body, res)?.statusCode) return;

    const { name, email, password } = req.body;

    const newuser = new User({
      name,
      email,
      password,
    });

    await newuser.save();

    res.status(200).json({ message: "Login successfully" });
  } catch (error) {
    return res.status(error?.statusCode || 400).json({
      message: error.message || "Something went Wrong",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const inserteduser = await user.save();
    res.status(201).json(inserteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
