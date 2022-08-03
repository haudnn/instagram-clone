import { connectDB } from "../../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../../models/postModel";
import verifyToken from "../../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "DELETE":
      await deletePost(req, res);
      break;
  }
};
const deletePost = async (req: Request, res: Response) => {
    try {
      await verifyToken(req, res);
      const postId = req.query.id
      await postModel.findByIdAndDelete(postId)
      res.status(200).json({
        status: "Success",
        message:'Post deleted successfully!'
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };