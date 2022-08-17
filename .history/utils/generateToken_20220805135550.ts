import jwt from 'jsonwebtoken'
export interface User{
    id: string
}
export const createAccessToken = (payload: User) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || "", {expiresIn: '15m'})
}

export const createRefreshToken = (payload: Object) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET || "", {expiresIn: '7d'})
}

