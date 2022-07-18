import mongoose from "mongoose";
var schema = new mongoose.Schema({
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
export const commentModel = mongoose.model('Comment', schema)