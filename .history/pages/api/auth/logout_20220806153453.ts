//  clear refersh token and token
import { connectDB } from '../../../utils/connectDB';
import { Request, Response } from 'express';
import { serialize } from 'cookie';
import dotenv from 'dotenv';
dotenv.config();
connectDB();

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case 'POST':
      await logout(req, res);
      break;
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    const { cookies } = req;
    console.log(req.header)
    const jwt = cookies.access_token;

    const serialised = serialize('access_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: -1,
      path: '/',
    });
    res.setHeader('Set-Cookie', serialised);
    res.status(200).json({ message: 'Successfuly logged out!' });
  } catch (err: any) {
    return res.status(500).json({ err: err.message });
  }
};
