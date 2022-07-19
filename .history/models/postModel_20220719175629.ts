import mongoose,{ Types } from "mongoose";
export interface postDocument extends mongoose.Document {
    description: string;
    attachment: string;
    location: string;
    author: Types.ObjectId,
    comment: Types.ObjectId,
    like: Types.ObjectId,
}
const schema: mongoose.Schema<postDocument > = new mongoose.Schema({
    description: {
        type: 'string'
    },
    attachment: {
        type: 'string', 
        unique: true,
    },
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
    },
    location: {
        type: 'string'
    }
}, {
    timestamps: true
})
export const postModel = mongoose.model<postDocument>('Post', schema)