import AuthSchema from "../models/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await AuthSchema.findOne({ email: email });

    if (user) {
      return res.status(500).json({ msg: "User is exist!" });
    }

    const isUsernameUsing = await AuthSchema.findOne({ username: username });

    if (isUsernameUsing) {
      return res.status(500).json({ msg: "Username is using" });
    }

    if (password.length < 6) {
      return res
        .status(500)
        .json({ msg: "Password is must be have more than 6 characters!" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await AuthSchema.create({ username, email, password });

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await AuthSchema.findOne({ email: email });

    if (!user) {
      return res.status(500).json({ msg: "User is not found!" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    console.log(password, user.password);

    // if (!passwordCompare) {
    //   return res.status(500).json({ msg: "Password is wrong!" });
    // }

    if (password.toString() !== user.password.toString()) {
      return res.status(500).json({ msg: "Password is wrong!" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
