import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const schema = new mongoose.Schema({
    userName:{  
        type: 'string',
        unique:true,
        trim:true,
        required:[true,'Tên tài khoản là bắt buộc và phải chứa từ 6 đến 30 ký tự'],
        minlength:[6, 'Tên tài khoản là bắt buộc và phải chứa từ 6 đến 30 ký tự']
    },
    password:{  
        type: 'string',
        trim:true,
        required:[true,'Mật khẩu nên chứa từ 6 đến 100 ký tự'],
        minlength:[6, 'Mật khẩu nên chứa từ 6 đến 100 ký tự']
    },
    mail: {
        type: 'string',
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
    mobile: {
        type: 'string'
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