import mongoose from "mongoose";
var schema = new mongoose.Schema({
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
export const replyModel = mongoose.model('reply', schema)