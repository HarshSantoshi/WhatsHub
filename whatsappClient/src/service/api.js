import axios from "axios";
const URL = "http://localhost:8000";

export  const ADDuser = async (data) => {
    try {
        await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error occured when api is called", error.message);

    }
}
export const getUsers = async()=>{
    try {
        let res = await axios.get(`${URL}/users`);
        return res.data;
    } catch (error) {
        console.log("Some error occured while fetching the users from the database " , error);
    }
}
export const setChat = async(data)=>{
    try {
        await axios.post(`${URL}/conversation/add` , data);
    } catch (error) {
        console.log("Some error occured while calling setUser function " , error);
    }
}
export const getChat = async(data)=>{
    try {
        let res = await axios.post(`${URL}/conversation/get` , data);
        return res.data;
    } catch (error) {
        console.log("Some error occured while displaying chats " , error);
    }
}
export const newMessage = async (data)=>{
    try {
        await axios.post(`${URL}/message/add ` , data);
    } catch (error) {
        console.log("Some error occured while newMessage api is called " , error);
    }
}
export const fetchMessage = async (id)=>{
    try {
      const messages =  await axios.get(`${URL}/message/get/${id} `);
      return messages.data;
    } catch (error) {
        console.log("Some error occured while newMessage api is called " , error);
    }
}