import mongoose,{ Types } from "mongoose";
export interface postDocument extends mongoose.Document {
    description: string;
    attachment: string;
    author: Types.ObjectId,
    comment: Types.ObjectId,
    like: Types.ObjectId,
}
const schema: mongoose.Schema<postDocument > = new mongoose.Schema({
    description: {
        type: 'string'
    },
    attachment: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    like: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})
export const postModel = mongoose.model<postDocument>('Post', schema)