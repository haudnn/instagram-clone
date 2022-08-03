import { connectDB } from "../../../utils/connectDB";
import { postModel } from "../../../models/postModel";
import { userModel } from "../../../models/userModel";
import { Request, Response } from "express";
import verifyToken from "../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getPostSaved(req, res);
      break;
    case "PUT":
      await savePost(req, res);
      break;
  }
};
const getPostSaved = async (req: Request, res: Response) => {
  try {
    const userId: String = await verifyToken(req, res);
    if (!userId) return;
    const postsID = await userModel.findOne({_id: userId})
    console.log(postsID);
    const post = await postModel.find({
        _id : { $in: postsID.postSaved},
    })
    .populate('author','userName')
    res.status(200).json({
      status: "Success",
      data: post
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
const savePost = async (req: Request, res: Response) => {
  try {
    const userId = await verifyToken(req, res);
    console.log(userId)
    if (!userId) return;
    const postId = req.query.postId
    console.log(postId)
    const isFound = await userModel.find({
      _id: userId,
      postSaved: { $in: postId },
    });
    console.log(isFound)
    if (isFound.length === 0) {
      const post = await userModel.findOneAndUpdate(
        { _id: userId },
        { $push: { postSaved: postId} as any }
      );
      res.status(200).json({
        status: "Success",
        data: post,
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
