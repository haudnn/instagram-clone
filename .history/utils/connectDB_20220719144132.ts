import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const URI = process.env.DB_URI
export async function connectDB() {
    try {
     await mongoose.connect(URI || "", {useNewUrlParser: true,useUnifiedTopology: true});
     console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log('err', err);
    }
 }