import { connectDB } from '../../../utils/connectDB'
import { Request, Response} from 'express'
import bcrypt from "bcryptjs";
import { userModel } from '../../../models/userModel';
import { createAccessToken,createRefreshToken } from '../../../utils/generateToken';
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
        
        res.status(200).json({
            msg: "Login Success!",
            refresh_token,
            access_token,
            user: {
                name: user.userName,
                fullName: user.fullName,
                mail: user.mail,
                avatar: user.avatar,
                displayName: user.displayName
            }
        });
    } catch (err:any){
        return res.status(500).json({err: err.message})
    }
};