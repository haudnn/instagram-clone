import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const verifyToken = (req:NextResponse,res:NextRequest,next:any) => {
    const Authorization = req.header('authorization')
    if(!Authorization) {
        const err  = new Error ('Dont have token in the Authorization header!')
        err.statusCode = 401
        return next(err)
    }
    // Get token
    const token = Authorization.replace("Bearer ","");
    // Verify token
    const {userId} = jwt.verify(token,process.env.APP_SECRET)
    // Assign req
    req.user = {userId};
    next()
}