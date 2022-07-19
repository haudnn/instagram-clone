
import { Request, Response} from 'express'

const runMiddleware = (req: Request, res:Response, fn:any) => {
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