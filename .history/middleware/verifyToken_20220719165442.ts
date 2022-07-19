import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'
import { userModel } from '../models/userModel';
interface JwtPayload {
    id: string
}
  declare module 'express' {
    interface Request {
      user?: any;
    }
  }
const verifyToken = async (req:Request, res:Response, next:NextFunction) => {

    const Authorization = req.header('authorization')
    if(!Authorization) return res.status(400).json({err: 'Dont have token in the Authorization header!'})

    const token = Authorization.replace("Bearer ","");

    const decoded = jwt.verify(token,process.env.APP_SECRET || "dsrfioewurfioeus")  as JwtPayload
    if(!decoded) return res.status(400).json({err: 'Invalid Authentication.'})

    const user = await userModel.findOne({_id: decoded.id})

    return {id: user._id};
}

export default verifyToken 