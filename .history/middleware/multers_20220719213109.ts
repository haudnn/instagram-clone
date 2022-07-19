import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

const storage = multer.diskStorage({});
const upload = multer({ storage: storage });
const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
async function multers (req: NextApiRequest, res: NextApiResponse) {
  try {
    await runMiddleware(req, res, upload.single("file"));
  } catch (e) {
    /* handle error */
  }
  return res.json({ message: "Hello Everyone!" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default multers;
