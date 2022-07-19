import mongoose,{ Types } from "mongoose";
import bcrypt from 'bcryptjs'
export interface userDocument extends mongoose.Document {
    userName: string;
    password: Boolean;
    author: Types.ObjectId,
    post: Types.ObjectId,
    parent_id: Types.ObjectId,
}
const schema = new mongoose.Schema({
    userName:{  
        type: 'string',
        unique:true,
        trim:true,
    },
    password:{  
        type: 'string',
        trim:true,
    },
    fullName:{  
        type: 'string',
    },
    mail: {
        type: 'string',
    },
    mobile: {
        type: 'string'
    },
    displayName: {
        type: 'string',
    },
    gender : {
        type:'string'
    },
    bio: {
        type: 'string',
    },
    website: {
        type: 'string',
    },
    avatar: {
        type: 'string',
    },
    followers : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default:[],
        }
    ],   
    following : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default:[],
        }
    ],   
    postSaved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            default:[],
        }
    ],
    isVerified: {
        type: Boolean,
        default: false,
    },  
    
}, {
    timestamps: true
})
schema.pre('save', function(next){
    let user = this;
    bcrypt.hash(user.password,10,(err:any,hash:any) =>{
        if(err){
            return next(err)
        }else{
            user.password  = hash
            next()
        }
    })
})
export const userModel = mongoose.model('User', schema)