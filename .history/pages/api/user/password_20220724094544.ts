import { connectDB } from "../../../utils/connectDB";
import { userModel } from "../../../models/userModel";
import verifyToken from "../../../middleware/verifyToken";
import { Request, Response } from "express";
import bcrypt from 'bcryptjs'

connectDB();
export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "PUT":
      await changePassword(req, res);
      break;
  }
};
const changePassword = async (req: Request, res: Response) => {
  try {    
    const userId = await verifyToken(req, res);
    if (!userId) {
      return;
    }
    const {oldPassword, newPassword} =  req.body
    const userInfo = await userModel.findById(userId)
    const checkOldPassword = bcrypt.compareSync(oldPassword, userInfo.password)

    if(checkOldPassword){
      const passwordHash = await bcrypt.hash(newPassword, 12)
      await userModel.findByIdAndUpdate(userId, {password: passwordHash})
      res.status(200).json({
          status: 'OK',
          data:"Updated password successfully!"
      });
    }
    else {
      res.status(400).json({
        status: 'Error',
        data: ""
    });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
