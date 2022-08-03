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
    case "DELETE":
      await deletePost(req, res);
      break;
    case "PUT":
      await updatePost(req, res);
      break;
  }
};
const getPost = async (req: Request, res: Response) => {
  try {
    await verifyToken(req, res);
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
const deletePost = async (req: Request, res: Response) => {
  try {
    await verifyToken(req, res);
    const post = await postModel
      .findOne({ _id: req.query.slug })
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
const updatePost = async (req: Request, res: Response) => {
    try {
        const {postId} = req.query
        const post = await postModel.findByIdAndUpdate(postId, {...req.body} , {new: true, runValidator:true})
        res.status(200).json({
            status: 'OK',
            data:post
        })
    } catch (err) {
        res.status(500).json({
            error: err,
          });
}}
