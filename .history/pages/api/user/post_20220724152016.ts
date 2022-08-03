import { connectDB } from "../../../utils/connectDB";
import { postModel } from "../../../models/postModel";
import { userModel } from "../../../models/userModel";
import { Request, Response } from "express";
import verifyToken from "../../../middleware/verifyToken";
import mongoose, { Types } from "mongoose";
import { userDocument } from "../../../models/userModel";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getPostSaved(req, res);
      break;
    case "POST":
      await savePost(req, res);
      break;
  }
};
const getPostSaved = async (req: Request, res: Response) => {
  try {
    const userName = req.query.username;
    const userInfo = await userModel.find({
      userName: userName,
    });
    const userId = userInfo[0]._id.toString();
    const posts = await postModel.find({ author: userId });
    res.status(200).json({
      status: "Success",
      data: {
        posts,
        userInfo,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
const savePost = async (req: Request, res: Response) => {
  try {
    const userId: String = await verifyToken(req, res);
    if (!userId) return;
    const postId = req.query.postId  ;
    const isFound = await userModel.find({
      _id: userId,
      postSaved: { $in: postId },
    });
    if (isFound.length === 0) {
      await userModel.findOneAndUpdate(
        { _id: userId },
        { $push: { postSaved: postId} as any }
      );
      res.status(200).json({
        status: "Success",
        message: "Post saved successfully.",
      });
    } else {
      await userModel.findOneAndUpdate(
        { _id: userId },
        { $pull: { postSaved: postId} as any }
      );
      res.status(200).json({
        status: "Success",
        message: "Unsave post successfully.",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
