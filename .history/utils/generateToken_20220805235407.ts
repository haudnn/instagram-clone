import jwt from 'jsonwebtoken'
export interface UserInfo{
    id: string
}
export const createAccessToken = (payload: UserInfo) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || "", {expiresIn: '5m'})
}

export const createRefreshToken = (payload: UserInfo) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET || "", {expiresIn: '7d'})
}

