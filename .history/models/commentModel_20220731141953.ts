import mongoose,{ Types } from "mongoose";

export interface commentDocument extends mongoose.Document {
    content: string;
    isLike: Boolean;
    author: Types.ObjectId,
    post: Types.ObjectId,
    reply: Types.ObjectId,
}
const schema: mongoose.Schema<commentDocument> = new mongoose.Schema({
    content: {
        type: String,
    }, 
    isLike: {
        type: Boolean,
        default: false,
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    reply:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }
}, {
    timestamps: true
})
export const commentModel = mongoose.model<commentDocument>('Comment', schema)