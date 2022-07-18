import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'
import { Types } from "mongoose"
interface User {
    userId: Types.ObjectId,      
}
export const verifyToken = (req:Request,res:Response,next:NextFunction) => {
    const Authorization = req.header('authorization')
    if(!Authorization) {
        const err = new Error ('Dont have token in the Authorization header!')
        err.status = 401
        return next(err)
    }
    // Get token
    const token = Authorization.replace("Bearer ","");
    // Verify token
    const {userId} = jwt.verify(token,process.env.APP_SECRET || "dsrfioewurfioeus")
    // Assign req
    req.user = {userId};
    next()
}