import mongoose from "mongoose";

export const conenctDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "mern-auth-users",
    });
    console.log("database connected!!");
  } catch (err) {}
};
