import { connectDB } from "../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../models/postModel";
import verifyToken from "../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getPost(req, res);
      break;
  }
};
const getPost = async (req: Request, res: Response) => {
  try {
    const post = await postModel.findOne({slug: req.params.slug })
    // .populate("author", "userName avatar displayName");
    res.status(200).json({
      status: "Success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
