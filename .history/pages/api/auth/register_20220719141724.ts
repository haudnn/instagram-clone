import connectDB from '../../../utils/connectDB'
import { userModel }  from '../../../models/userModel'
import { Request, Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'
connectDB()

export default async (req:Request, res:Response, next:NextFunction) => {
    switch(req.method){
        case "POST":
            await register(req,res,next)
            break;
    }
}

const register = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const user = await userModel.create({
            ...req.body
        })
        const token = jwt.sign({
            userId: user._id
        }, process.env.APP_SECRET || "")
        res.status(200).json({
            status: 'Register Success!',
            data: {
                token,
            }
        });
    } catch (err:any){
        return res.status(400).json({err: 'This username already exists'})
    }
};