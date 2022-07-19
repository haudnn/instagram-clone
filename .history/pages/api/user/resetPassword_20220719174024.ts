import { connectDB } from '../../../utils/connectDB'
import { Request, Response} from 'express'
import bcrypt from "bcryptjs";
import { userModel } from '../../../models/userModel';
import verifyToken from '../../../middleware/verifyToken';
connectDB()

export default async (req:Request, res:Response) => {
    switch(req.method){
        case "PATCH":
            await resetPassword(req, res)
            break;
    }
}


const resetPassword = async (req:Request, res:Response) => {
    try {
        const result = await verifyToken(req, res)
        const { password } = req.body
        const passwordHash = await bcrypt.hash(password, 12)

        // await userModel.findOneAndUpdate({_id: result.id}, {password: passwordHash})

        res.json({ msg: "Update Success!"})
        
    } catch (err:any) {
        return res.status(500).json({err: err.message})
    }   
}