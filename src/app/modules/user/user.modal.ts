import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";
import { number } from "zod";

export const userSchema = new Schema<TUser, UserModel>(
  {
    id: {
      type: String,
      required: [true, "Id is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select:0
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordUpdatedAt: {
      type:Date
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

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ id }).select('+password');
};


userSchema.statics.isPasswordMatched = async function (
  plainPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};



userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};



export const User = model<TUser, UserModel>("User", userSchema);
