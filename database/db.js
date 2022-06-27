import mongoose from "mongoose";

export const Connection = async (DATABASE) => {
  const URL = `${DATABASE}`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting database");
  }
};

export default Connection;
