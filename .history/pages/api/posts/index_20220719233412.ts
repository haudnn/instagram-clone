import { connectDB } from "../../../utils/connectDB";
import { Request, Response } from "express";
import { postModel } from "../../../models/postModel";
import crypto from "crypto";
// import { upload } from "../../../middleware/multers";
import { v2 as cloudinary } from "cloudinary";
import multer from 'multer';

connectDB();
const storage = multer.diskStorage({}); 
const upload = multer({ storage: storage});
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
function runMiddleware(
  req: Request,
  res: Response,
  fn: (...args: any[]) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const createPost = async (req: Request, res: Response) => {
  // upload.single("file")(req, res, next => {
  //   const file = req.file
  // });
  await runMiddleware(req, res, upload.single("file"));
  const file = req.file;
  console.log(file);
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
export const config = {
  api: { bodyParser: false },
};
