import { connectDB } from "../../../utils/connectDB";
import { postModel } from "../../../models/postModel";
import { userModel } from "../../../models/userModel";
import verifyToken from "../../../middleware/verifyToken";
import { Request, Response } from "express";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      await getUserInfo(req, res);
      break;
  }
};
const getUserInfo = async (req: Request, res: Response) => {
  try {    
    const userId = await verifyToken(req, res);
    if (!userId) {
      return;
    }
    const userInfo = await userModel.findById(userId)
    res.status(200).json({
      status: "Success",
      data: {
        userInfo
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
