import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountDetails";
import { Box, styled } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import ProfileDrawer from "../../Drawer/ProfileDrawer";
import MoreFeatures from "./MoreFeatures";

const Component = styled(Box)`
height :35px;
background-color:#202c33;
display:flex;
justify-content : space-between;
align-items : center ;
padding: 10px 12px;
`
const Dp = styled('img')` 
height:33px;
width:33px;
border-radius:50%;
cursor:pointer;`

const Features = styled(Box)`
& >*{
    cursor:pointer;
    margin-right:14px;
    color:#aebac1;
    padding:8px;
    font-size:20px;
}
`
const MenuHeader = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);
   
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <Component>
                <Dp src={account.picture} alt="dp" onClick={() => toggleDrawer()}
                />
                <Features>
                    <PeopleIcon />
                    <ChatIcon />
                    <MoreFeatures />
                </Features>
            </Component>
            <ProfileDrawer

                open={openDrawer}
                setOpen={setOpenDrawer}

            />
        </>

    )
}

export default MenuHeader;
