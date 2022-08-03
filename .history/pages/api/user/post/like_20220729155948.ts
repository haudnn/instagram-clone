import { connectDB } from "../../../../utils/connectDB";
import { postModel } from "../../../../models/postModel";
import { userModel } from "../../../../models/userModel";
import { Request, Response } from "express";
import verifyToken from "../../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getAllUserInfoLikesPost(req, res);
      break;
    case "PUT":
      await likePost(req, res);
      break;
  }
};
const getAllUserInfoLikesPost = async (req: Request, res: Response) => {
  try {
    const userId: String = await verifyToken(req, res);
    if (!userId) return;
  
    const {postId} = req.body
    const idUsersLikePost = await postModel.findOne({_id: postId})
    const userInfo = await userModel.find({
        _id : { $in: idUsersLikePost.liked},
    }).select('userName displayName avatar')

    res.status(200).json({
      status: "Success",
      data: userInfo
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
    console.log(isFound);
    if (isFound.length === 0) {
    const postUpdated = await postModel.findOneAndUpdate(
        { _id: postId},
        { $push: { liked: userId} as any }
      );
      res.status(200).json({
        status: "Success",
        message: "Liked successfully.",
        data: {
          count: postUpdated.liked.length
        }
      });
    } 
    else if (isFound.length !== 0) {
      const postUpdated = await postModel.findOneAndUpdate(
        { _id: postId},
        { $pull: { liked: userId} as any }
      );
      res.status(200).json({
        status: "Success",
        message: "Unliked successfully.",
        data: {
          count: postUpdated.liked.length
        }
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
