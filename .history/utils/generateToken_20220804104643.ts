import jwt from 'jsonwebtoken'
export const createAccessToken = (payload: Object) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || "", {expiresIn: '15m'})
}

export const createRefreshToken = (payload: Object) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET || "", {expiresIn: '7d'})
}


111