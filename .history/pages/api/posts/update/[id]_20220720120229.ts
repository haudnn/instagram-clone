import { connectDB } from "../../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../../models/postModel";
import verifyToken from "../../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "PUT":
      await updatePost(req, res);
      break;
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await verifyToken(req, res);
    if (!result) {
      return;
    }
    const postId = req.query.id;
    const post = await postModel.findByIdAndUpdate(
      postId,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json({
      status: "OK",
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
