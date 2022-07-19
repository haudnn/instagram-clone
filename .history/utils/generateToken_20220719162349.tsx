import jwt from 'jsonwebtoken'
import { Types } from "mongoose";
export const createAccessToken = (payload: Types.ObjectId) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || "", {expiresIn: '15m'})
}

export const createRefreshToken = (payload: Types.ObjectId) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET || "", {expiresIn: '7d'})
}