import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DBConnection = async ()=>{
    const DBurl = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.l3rwlmz.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(DBurl ,{useUnifiedTopology :true} );
        console.log("Database Connected Successfully");
    }catch(err){
        console.log("Some error occured while connecting with the database OR CHECK YOUR CONNECTION" , err);
    }
}
export default DBConnection;