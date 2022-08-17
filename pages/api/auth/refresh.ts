import { connectDB } from '../../../utils/connectDB'
import { userModel } from '../../../models/userModel';
import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../../../utils/generateToken'

connectDB()

interface JwtPayload {
    id: string
}
export default async (req:Request, res:Response) => {
    switch(req.method){
        case "POST":
            await refreshToken(req,res)
            break;
    }
}

const refreshToken = async (req:Request, res:Response) => {
    try{
        const rf_token = req.cookies.refresh_token;
        if(!rf_token) return res.status(401).json({message: 'Refresh token has expired'})

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET || "") as JwtPayload
        if(!result) return res.status(403)

        const user = await userModel.findById(result.id)
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