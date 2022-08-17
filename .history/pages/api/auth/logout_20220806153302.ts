//  clear refersh token and token
import { connectDB } from '../../../utils/connectDB'
import { Request, Response} from 'express'
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
        const { cookies } = req;
        const jwt = cookies.OursiteJWT;

        const serialised = serialize("access_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
        });
        res.setHeader("Set-Cookie", serialised);
        res.status(200).json({ message: "Successfuly logged out!" });
    } catch (err:any){
        return res.status(500).json({err: err.message})
    }
};
