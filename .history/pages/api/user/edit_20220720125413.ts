import { connectDB } from "../../../utils/connectDB";
import { postModel } from "../../../models/postModel";
import { userModel } from "../../../models/userModel";
import verifyToken from "../../../middleware/verifyToken";
import { Request, Response } from "express";

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "PUT":
      await editProfile(req, res);
      break;
  }
};
const editProfile = async (req: Request, res: Response) => {
  try {    
    const userId = await verifyToken(req, res);
    if (!userId) {
      return;
    }
    await userModel.findByIdAndUpdate(userId, {...req.body}, {new: true,runValidator: true})
    res.status(200).json({
      status: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
