import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    person: {
        type: Array
    },
    message: {
        type: String
    }
}
    ,
    {
        timestamps: true
    });

const Conversations = mongoose.model('Chat', conversationSchema );
export default Conversations;
