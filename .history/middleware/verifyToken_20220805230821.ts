import jwt from 'jsonwebtoken'
import { Request, Response} from 'express'
import { userModel } from '../models/userModel';
interface JwtPayload {
    id: string
}

const verifyToken = async (req:Request, res:Response) => {

    const authorizationHeader = req.headers['authorization'];
    // Beaer
    const token = authorizationHeader?.split(' ')[1]
    if(!token) return res.status(401).json({message: 'Authorization not valid'})

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "") as JwtPayload
    if(!decoded) return res.status(401).json({message: 'Authorization not valid'})

    const user = await userModel.findOne({_id: decoded.id}) 
    if(!user) return res.status(401).json({message: 'Unauthenticated User.'})

    return user._id;
}

export default verifyToken 