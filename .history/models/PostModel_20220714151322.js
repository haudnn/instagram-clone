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
    }
}, {
    timestamps: true
})
schema.index({title: 'text'});
export const PostModel = mongoose.model('Post', schema)