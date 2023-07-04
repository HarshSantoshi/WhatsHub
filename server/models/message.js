import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    chatID : {
        type : String
    },
    senderID :{
        type:String
    },
    receiverID : {
        type:String
    }
    ,
    text :{
        type : String
    }
    ,
    type :{
        type : String
    }
},
{
    timestamps : true
}
);

const Message  = mongoose.model('Message' , MessageSchema);
export default Message;
