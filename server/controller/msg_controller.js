import Conversations from "../models/conversation.js";
import Message from "../models/message.js"
export const newMessage = async(req , res)=>{
    try {
        const newMessage  = new Message(req.body);
        await newMessage.save();
        await Conversations.findByIdAndUpdate(req.body.chatID , {
            message : req.body.text
        })
        return res.status(200).json("Message send successfully");
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
export const fetchMessage = async(req, res)=>{
    try {
        const messages = await Message.find({chatID : req.params.id});
        return res.status(200).json(messages);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}