import { connectDB } from "../../../../utils/connectDB";
import { postModel } from "../../../../models/postModel";
import verifyToken from "../../../../middleware/verifyToken";
import { Request, Response } from "express";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getPostByUsername(req, res);
      break;
  }
};
const getPostByUsername = async (req: Request, res: Response) => {
  try {    
    const { username } = req.query
    const post = await postModel
      .findOne({ slug: req.query.slug })
      .populate("author", "userName avatar displayName");
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
