const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/notes_db";

const connectDB = () => {
  return mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
};

module.exports = connectDB;
