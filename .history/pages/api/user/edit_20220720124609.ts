import { connectDB } from "../../../utils/connectDB";
import { postModel } from "../../../models/postModel";
import { userModel } from "../../../models/userModel";
import verifyToken from "../../../middleware/verifyToken";
import { Request, Response } from "express";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "PUTT":
      await editProfile(req, res);
      break;
  }
};
const editProfile = async (req: Request, res: Response) => {
  try {    
    const result = await verifyToken(req, res);
    if (!result) {
      return;
    }
    console.log(result);
    // const userId = result
    // const userInfo = await userModel.find({
    //     userName: userName
    // })
    // const posts = await postModel.find({author: userId})
    // res.status(200).json({
    //   status: "Success",
    //   data: {
    //     posts,
    //     userInfo
    //   },
    // });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
