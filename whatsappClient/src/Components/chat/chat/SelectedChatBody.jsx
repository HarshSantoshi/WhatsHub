import { Box, styled} from "@mui/material";
import SelectedChatFooter from "./SelectedChatFooter";
import { useContext  , useState , useEffect} from "react";
import { AccountContext } from "../../../context/AccountDetails"
import { Message } from "./Messages";
import { fetchMessage, newMessage } from "../../../service/api";
const Component = styled(Box)`

height:81.5vh;
background-image : url(${'https://wallpapercave.com/wp/wp6988787.png'});
background-size: contain;
overflow-y:scroll;
&::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #374045;
  }
`
const MessageBox = styled(Box)`
padding:1px 70px;
`
const SelectedChatBody = ({user , chat}) => {
  const [msg , setMsg] = useState('');
  const {account} = useContext(AccountContext)
  const [newMessageBool , setnewMessage] = useState(false);
  const [conversations , setConversation] = useState([]);

  useEffect(()=>{
    const getMessagesInfo = async()=>{
      let data = await fetchMessage(chat._id);
      setConversation(data);

    }

    chat._id &&  getMessagesInfo();
  },[user._id , chat._id , newMessageBool]);
  const sendMsg = async(e)=>{
    const KEYCODE = e.keyCode || e.which;
    console.log(e);
    if(KEYCODE===13){
      let message = { 
        senderID:account.sub,
        receiverID : user.sub,
        chatID : chat._id,
        type : 'text' , 
        text : msg
      }
      await newMessage(message);
      setMsg('');
      setnewMessage(prev => !prev);
    }

  }
  return (
    <>
      <Component>
        {
          conversations && conversations.map(message=>(
            <MessageBox>
              <Message message ={message}/>
            </MessageBox>
          ))
        }
      </Component>
      
        <SelectedChatFooter 
        sendMsg={sendMsg}
        setMsg = {setMsg}
        msg = {msg}
        />
       

    </>
  )
}
export default SelectedChatBody;