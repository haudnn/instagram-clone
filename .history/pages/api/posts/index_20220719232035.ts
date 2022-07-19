import { connectDB } from "../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../models/postModel";
import crypto from "crypto";
import { upload } from "../../../middleware/multers";
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
  const get = upload.single("file")(req, res, err => {
    // console.log(req.file)
    
  });
  console.log(get)
  try {
    // const {userId} = req.user
    const slug = crypto.randomBytes(5).toString("hex");
    const fileStr = req.file || ""
    // const uploadResponse = await cloudinary.uploader.upload(fileStr.path, {
    //     folder:"ig"
    // });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
export const config = {
  api: { bodyParser: false },
};
