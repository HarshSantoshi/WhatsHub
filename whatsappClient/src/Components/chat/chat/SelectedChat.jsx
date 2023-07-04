import { Box } from "@mui/material";
import SelectedChatHeader from "./SelectedChatHeader";
import SelectedChatBody from "./SelectedChatBody";
import { useContext, useEffect ,useState } from "react";
import { AccountContext } from "../../../context/AccountDetails";
import { getChat }  from "../../../service/api.js";
const SelectedChat = ()=>{
    const { account} = useContext(AccountContext)
    const { user} = useContext(AccountContext);
    const [ chat , setChat] = useState({});
    useEffect(()=>{
        const getChatDetails = async() => {

            let data = await getChat( { senderID :account.sub , receiverID : user.sub  } )
            setChat(data);
        }
        getChatDetails();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user.sub]);
    return(

        <>
        <Box>
            <Box>
                <SelectedChatHeader
                user= {user}
                />
            </Box>
            <Box>
                <SelectedChatBody
                user = {user}
                chat = {chat}
                />
            </Box>
            
        </Box>
        </>
    )
}
export default SelectedChat;