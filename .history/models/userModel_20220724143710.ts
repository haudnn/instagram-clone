import mongoose, { Types, Document } from "mongoose";
export interface userDocument extends mongoose.Document {
  _id: string;
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

const schema = new mongoose.Schema(
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
      unique: true,
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
    postSaved: 
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: [],
      },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const userModel = mongoose.models.User || mongoose.model <userDocument> ("User", schema);