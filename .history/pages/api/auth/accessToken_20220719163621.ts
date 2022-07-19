import { connectDB } from '../../../utils/connectDB'
import { userModel } from '../../../models/userModel';
import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../../../utils/generateToken'

connectDB()

export default async (req:Request, res:Response) => {
    try{
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token) return res.status(400).json({err: 'Please login now!'})

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET || "")
        if(!result) return res.status(400).json({err: 'Your token is incorrect or has expired.'})

        const user = await userModel.findById(result.id)
        if(!user) return res.status(400).json({err: 'User does not exist.'})

        const access_token = createAccessToken({id: user._id})
        res.json({
            access_token,
            user: {
                name: user.userName,
                fullName: user.fullName,
                mail: user.mail,
                avatar: user.avatar,
                displayName: user.displayName
            }
        })
    }catch(err:any){
        return res.status(500).json({err: err.message})
    }
}