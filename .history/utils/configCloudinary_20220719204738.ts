import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()
cloudinary.config({ 
    cloud_name: 'trumblogapp', 
    api_key: '228477458325852',
    api_secret: 'Fp5C-5r0nBs120YcwkiLCDkiphU'
  });