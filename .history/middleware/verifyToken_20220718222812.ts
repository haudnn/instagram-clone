import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'
interface JwtPayload {
    userId: string
}
  interface Error {
    status?: number;
    code?: number;
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
    const {userId} = jwt.verify(token,process.env.APP_SECRET || "dsrfioewurfioeus")  as JwtPayload
    // Assign req
    req.user = {userId};
    next()
}