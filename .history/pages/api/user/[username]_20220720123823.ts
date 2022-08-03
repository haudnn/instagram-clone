import { connectDB } from "../../../utils/connectDB";
import { postModel } from "../../../models/postModel";
import { userModel } from "../../../models/userModel";
import { Request, Response } from "express";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getProfile(req, res);
      break;
  }
};
const getProfile = async (req: Request, res: Response) => {
  try {    
    const userName = req.query.username
    const user = await userModel.find({
        userName: userName
    })
    const userId = user[0]._id.toString()
    const posts = await postModel.find({author: userId})
    res.status(200).json({
      status: "Success",
      data: {
        posts,
        user
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
