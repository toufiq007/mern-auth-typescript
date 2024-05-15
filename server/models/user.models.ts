import mongoose, { Schema, Document } from "mongoose";

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

// Create and export mongoose model
const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
