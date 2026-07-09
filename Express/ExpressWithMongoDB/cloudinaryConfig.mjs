import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

import { CloudinaryStorage } from 'multer-storage-cloudinary';
 

console.log('Cloudinary file loading')
cloudinary.config({ 
    cloud_name: 'dwabmkhhu', 
    api_key: '612239926297594', 
    api_secret: 'IqWtOITDwG58r1UjjgCxVKS1R7k'
});

console.log('Cloudinary Auth done........')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'hello',
    allowed_formats: ['png','jpg','jpeg','gif']
  },
});
 
export const parser = multer({ storage: storage });
 
