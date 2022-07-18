import mongoose from "mongoose";
const schema = new mongoose.Schema({
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
export const postModel = mongoose.model('Post', schema)