import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Create a storage object with a given configuration
const storage = new GridFsStorage({
    url: `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.l3rwlmz.mongodb.net/?retryWrites=true&w=majority`, 
    options :{useUnifiedTopology : true , useNewUrlParser:true} ,
    file: (req, file) => {
        const match = ["image/jpg" , " image/png" , "image/jpeg"];
        if (match.indexOf(file.mimetype ) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        } 
        return {
            bucketName : "photos",
            filename : `${Date.now()}-file-${file.originalname}`
        }
      }
});
export default multer({storage});