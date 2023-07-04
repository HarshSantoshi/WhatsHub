import Conversations from "../models/conversation.js";

export const newChat = async (req , res)=>{
    try {
        const senderID = req.body.sender;
        const receiverID = req.body.receiver;
        const exist = await Conversations.findOne({ person : { $all : [receiverID , senderID]}});
        if(exist){
            return res.status(200).json('Conversation already present');
        }
        const newChat = new Conversations({
            person : [senderID , receiverID]
        })
        await newChat.save();
        return res.status(200).json('Conversation saved');

    } catch (error) {
        console.log("Some error occured while saving new Chat ", error);
        return res.status(500).json(error);
    }
}
export const getChat = async(req , res)=>{
    try {
        const senderID = req.body.senderID;
        const receiverID = req.body.receiverID;
        let conversation = await Conversations.findOne({person : { $all : [receiverID , senderID]}})
        return res.status(200).json(conversation);
    } catch (error) {
        console.log("Some error occured while displaying the  Chats ", error);
        return res.status(500).json(error.message);
    }
}
