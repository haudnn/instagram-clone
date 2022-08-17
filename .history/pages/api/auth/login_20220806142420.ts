import { connectDB } from '../../../utils/connectDB'
import { Request, Response} from 'express'
import bcrypt from "bcryptjs";
import { userModel } from '../../../models/userModel';
import { createAccessToken,createRefreshToken } from '../../../utils/generateToken'
import { serialize } from "cookie";
import dotenv from 'dotenv'
dotenv.config()
connectDB()

export default async (req:Request, res:Response) => {
    switch(req.method){
        case "POST":
            await login(req,res)
            break;
    }
}

const login = async (req:Request, res:Response) => {
    try {
        const {mail, password} = req.body

        const user = await userModel.findOne({ mail })
        if (!user) return res.status(400).json({err: "Email bạn vừa nhập không thuộc bất kỳ tài khoản nào!"})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({err: 'Mật khẩu bạn vừa nhập không chính xác!'})

        const access_token = createAccessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id})

            
        const serialised = serialize("access_token",access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 15,
            path: "/",
        });
        res.setHeader("Set-Cookie", serialised);
        res.status(200).json({
            msg: "Login Success!",
            refresh_token,
            user: {
                name: user.username,
                fullName: user.fullname,
                mail: user.mail,
                avatar: user.avatar,
                displayName: user.displayname
            }
        });
    } catch (err:any){
        return res.status(500).json({err: err.message})
    }
};