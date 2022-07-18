import mongoose from "mongoose";
var schema = new mongoose.Schema({
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
export const PostModel = mongoose.model('Post', schema)