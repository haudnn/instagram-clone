import { connectDB } from "../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../models/postModel";
import crypto from "crypto";
import { v2 as cloudinary } from "cloudinary";
import verifyToken from "../../../middleware/verifyToken";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getAllPosts(req, res);
      break;
    case "POST":
      await createPost(req, res);
      break;
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postModel
      .find()
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


const createPost = async (req: Request, res: Response) => {
  try {
    const userId = await verifyToken(req, res)
    const slug = crypto.randomBytes(5).toString("hex");
    const {attachment, description, location} = req.body
    const post = await postModel.create({description, location, author: userId, attachment, slug})
    res.status(200).json({
      status: "Success",
      data: {
        attachment:post.attachment,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

