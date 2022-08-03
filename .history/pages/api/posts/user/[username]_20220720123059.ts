import { connectDB } from "../../../../utils/connectDB";
import { postModel } from "../../../../models/postModel";
import { Request, Response } from "express";
import { userModel } from "../../../../models/userModel";

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
    const userName = req.query.username
    const user = await userModel.find({
        userName: userName
    })
    const userId = user[0]._id.toString()
    const posts = await postModel.find({author: userId})
      .populate("author", "userName avatar displayName");
    res.status(200).json({
      status: "Success",
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
