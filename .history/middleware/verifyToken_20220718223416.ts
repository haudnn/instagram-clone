import jwt from 'jsonwebtoken'
import express,{NextFunction, Request, Response} from 'express'
interface JwtPayload {
    userId: string
}
  declare module 'express' {
    interface Request {
      user?: any;
    }
  }
  interface Error {
    status?: number;
}
export const verifyToken = (req:Request,res:Response,next:NextFunction) => {
    const Authorization = req.header('authorization')
    if(!Authorization) {
        const err = new Error ('Dont have token in the Authorization header!') as Error
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