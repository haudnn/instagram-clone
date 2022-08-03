import { connectDB } from "../../../../utils/connectDB";
import { postModel } from "../../../../models/postModel";
import { userModel } from "../../../../models/userModel";
import { Request, Response } from "express";
import verifyToken from "../../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getPostSaved(req, res);
      break;
    case "PUT":
      await likePost(req, res);
      break;
  }
};
const getPostSaved = async (req: Request, res: Response) => {
  try {
    const userId: String = await verifyToken(req, res);
    if (!userId) return;
    const postsID = await userModel.findOne({_id: userId})
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
const likePost = async (req: Request, res: Response) => {
  try {
    const userId: String = await verifyToken(req, res);
    if (!userId) return;
    const postId = req.body.postId
    const isFound = await postModel.find({
      _id: postId,
      liked: { $in: userId },
    });
    if (isFound.length === 0) {
    await postModel.findOneAndUpdate(
        { _id: postId},
        { $push: { liked: userId} as any }
      );
      // const countLikedPost = postModel.liked.length
      res.status(200).json({
        status: "Success",
        message: "Liked successfully.",
      });
    } 
    else if (isFound.length !== 0) {
      await postModel.findOneAndUpdate(
        { _id: postId},
        { $pull: { liked: userId} as any }
      );
      res.status(200).json({
        status: "Success",
        message: "Unliked successfully.",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
