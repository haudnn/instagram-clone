import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const checkCurrentUser = (req: NextRequest, res:NextResponse ,next:any) => {
    const Authorization = req.header('authorization')
    if(!Authorization) {
        req.user = null;
        next()
    }
    else{
        const token = Authorization.replace("Bearer ","");
        try{
            const {userId} = jwt.verify(token,process.env.APP_SECRET)
            req.user = {userId};
            next()
        }
        catch(err) {
            req.user = null;  
            next()
        }
    }
}