import connectDB from '../../../utils/connectDB'
import { userModel }  from '../../../models/userModel'
import { Request, Response, NextFunction} from 'express'
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
        const {userName, email } = req.body

        const foundEmail = await userModel.findOne({ email })
        if (foundEmail) return res.status(400).json({err: 'Another account is using the same email.'})

        const foundUserName = await userModel.findOne({ userName })
        if (foundUserName) return res.status(400).json({err: 'This user is already registered'})

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
        return res.status(500).json({err: err.message})
    }
};