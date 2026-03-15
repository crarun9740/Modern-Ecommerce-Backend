import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // console.log("MONGODB_URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB is Connected....");
  } catch (error) {
    console.error("DB ERROR:", error.message);
    process.exit(1);
  }
};

export default connectDb;
