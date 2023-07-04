import grid from "gridfs-stream"
import mongoose from "mongoose";

const URL = "https://localhost:8000"
const conn = mongoose.connection;
let gfs , gridFSBucket ;
conn.once('open',()=>{
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db , {
        bucketName:'fs' 
    });
    gfs = grid(conn.db , mongoose.mongo);
    gfs.collection('fs')

})
export const saveFile = (req, res)=>{
    if(!req.file){
        return res.status(404).json("File not Found");
    }
    const ImageUrl = `${URL}/file/${req.file.filename}`;
    return res.status(200).json(ImageUrl);
}

export const getFile =async(req , res)=>{
    try {
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readStream = gridFSBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (error) {
        return res.status(500).json(error);
    }

}