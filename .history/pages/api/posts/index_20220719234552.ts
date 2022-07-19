import { connectDB } from "../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../models/postModel";
import crypto from "crypto";
import { v2 as cloudinary } from "cloudinary";

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
    const slug = crypto.randomBytes(5).toString("hex");
    // const uploadResponse = await cloudinary.uploader.upload(fileStr.path, {
    //     folder:"ig"
    // });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

