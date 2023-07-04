import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountDetails";
import { formateDate } from "../../../Utilities/commonUtility";
const Sent = styled(Box)`
background:#005c4b;
max-width:55%;
margin-left:auto;
padding:2px 5px;
align-items:center;
width:fit-content;
color:#e9edef;
display:flex;
border-radius:8px;
margin-top:10px;
word-break:break-word;
`
const Received = styled(Box)`
background:#202c34;
max-width:55%;
color:white;
padding:5px;
width:fit-content;
display:flex;
border-radius:8px;
margin-top:10px;
word-break:break-word;
`
const Chat = styled(Typography)`
font-size:13px;
padding : 0 18px 0 5px;
`
const Time = styled(Typography)`
color:#ffffff99;
font-size:10px;
margin-top:auto;
word-break:keep-all;
`
export const Message = ({ message }) => {
    const { account } = useContext(AccountContext);
    return (
        <>
            {
                account.sub === message.senderID ?
                    <Sent>
                        <Chat>{message.text} </Chat>
                        <Time>{formateDate(message.createdAt)}</Time>
                    </Sent>
                    :
                    <Received>
                        <Chat>{message.text} </Chat>
                        <Time>{formateDate(message.createdAt)}</Time>
                    </Received>

            }


        </>
    )
}
