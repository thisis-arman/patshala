import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

export const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: [true, "Id is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: [true, "Role is required"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      required: [true, "Status is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});


userSchema.post('save',  function (doc,next) { 
  doc.password = '';
  next()
})
export const User = model<TUser>("User", userSchema);
