import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  return token;
};

export const Register = async (req, res) => {
  try {
    console.log("Register route hit");
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User Already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hashedpassword,
    });

    res.status(201).json({
      _id: user._id,
      email: user.email,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user),
      });
    } else {
      res.status(500).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};
