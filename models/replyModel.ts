import mongoose, { Types } from "mongoose";
export interface replyDocument extends mongoose.Document {
    content: string;
    isLike: Boolean;
    author: Types.ObjectId,
    post: Types.ObjectId,
    parent_id: Types.ObjectId,
}
const schema: mongoose.Schema<replyDocument>= new mongoose.Schema({
    content: {
        type: String,
    }, 
    isLike: {
        type: Boolean,
        default: false,
    }, 
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    parent_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, {
    timestamps: true
})
export const replyModel = mongoose.model<replyDocument>('Reply', schema)