import { Dialog ,Box , styled} from "@mui/material";
import Menu from "./menu/Menu";
import EmptyWindow from "./chat/EmptyChat";
import SelectedChat from "./chat/SelectedChat";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountDetails";

const Component = styled(Box)`
display: flex;
background-color:#222e35;
`
const LeftContainer = styled(Box)
`
width:30%;
min-width : 250px;
background-color:#111b21;
`
const RightContainer = styled(Box)
`
width : 70%;
min-width:300px;
height : 100% ;
border-left : 1px solid #374045;
`

const dialogStyle = {
    height : '100%',
    width:'100%',
    margin :'0px',
    boxShadow:'none',
    overflow:'hidden',
    borderRadius:'0',
    maxWidth:'100%', 
    backgroundColor: '#222e35',
    maxHeight:'100%'
}
const ChatDialog = () => {
    const {user} = useContext(AccountContext);
    return (
        <>
        <Dialog
            open = {true} 
            PaperProps={{sx:dialogStyle}}
            hideBackdrop = {true}
            maxWidth ={'md'}
        >
            <Component>
                <LeftContainer>
                    <Menu/>
                </LeftContainer>
                <RightContainer>
                    {Object.keys(user).length ? <SelectedChat/> : <EmptyWindow/>}
                </RightContainer>
            </Component>
        </Dialog>
        </>
    );
}
export default ChatDialog;