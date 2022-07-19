
import { Request,Response } from 'express'

function runMiddleware(
  req: Request,
  res: Response,
  fn: (...args: any[]) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
// await runMiddleware(req, res, upload.single("file"));
// const file = req.file;
// console.log(req.body);
// console.log(file);
export default runMiddleware