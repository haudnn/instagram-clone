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
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    comment_count: { 
        type: Number,
        default:0
    }
}, {
    timestamps: true
})
schema.index({title: 'text'});
export const PostModel = mongoose.model('Post', schema)