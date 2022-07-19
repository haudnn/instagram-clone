
import { NextApiRequest, NextApiResponse } from 'next'

const runMiddleware = (req:  NextApiReques, res:NextApiResponse, fn:any) => {
    return new Promise((resolve, reject) => {
      fn(req, res, (result:any) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }
export default runMiddleware