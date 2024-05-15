import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

// Define interface for Document
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Define mongoose schema
const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Middleware to hash password before saving
UserSchema.pre<IUser>("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    return next();
  } catch (error: any) {
    return next(error);
  }
});

// Create and export mongoose model
const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
