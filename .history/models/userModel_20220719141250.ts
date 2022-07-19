import mongoose, { Types } from "mongoose";
import bcrypt from "bcryptjs";
export interface userDocument extends mongoose.Document {
  userName: string;
  password: string;
  fullName: string;
  mail: string;
  mobile: string;
  displayName: string;
  gender: string;
  bio: string;
  avatar: string;
  isVerified: Boolean;
  followers: Array<Types.ObjectId>;
  following: Array<Types.ObjectId>;
  postSaved: Array<Types.ObjectId>;
}
const schema: mongoose.Schema<userDocument> = new mongoose.Schema(
  {
    userName: {
      type: "string",
      unique: true,
      trim: true,
    },
    password: {
      type: "string",
      trim: true,
    },
    fullName: {
      type: "string",
    },
    mail: {
      type: "string",
    },
    mobile: {
      type: "string",
    },
    displayName: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    bio: {
      type: "string",
    },
    avatar: {
      type: "string",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    postSaved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
schema.pre("save", function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, (err: any, hash: any) => {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});
export const userModel = mongoose.model<userDocument>("User", schema);
