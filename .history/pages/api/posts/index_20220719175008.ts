import { connectDB } from '../../../utils/connectDB'
import { Request, Response} from 'express'
import { postModel } from '../../../models/postModel';

connectDB()
export default async (req:Request, res:Response) => {
    switch(req.method){
        case "GET":
            await getAllPosts(req,res)
            break;
    }
}
const getAllPosts = async (req:Request, res:Response) => {
    try {
        const posts = await postModel.find()
        .populate('author','userName avatar displayName' )
        res.status(200).json({
            status: 'OK',
            data: {
                posts
            }
        });
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};