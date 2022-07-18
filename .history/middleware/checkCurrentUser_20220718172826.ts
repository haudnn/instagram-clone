import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { Types } from "mongoose"
interface User {
    userId: Types.ObjectId,      
}
export const checkCurrentUser = (req: Request, res: Response, next: NextFunction) => {
    const Authorization = <string>req.header('authorization')
    if(!Authorization) {
        req.user = null;
        next()
    }
    else{
        const token = Authorization.replace("Bearer ","");
        try{
            const {userId} = <any>jwt.verify(token,process.env.APP_SECRET || "")
            req.user = {userId};
            next()
        }
        catch(err) {
            req.user = null;  
            next()
        }
    }
}