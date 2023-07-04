import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu , MenuItem ,styled} from '@mui/material';

import { useState } from 'react';


const MoreOptions = styled(MenuItem)`
font-size:12px;
background-color:#233138;
padding-right: 58px;
padding-left: 24px;
color:#d1d7db;
line-height:1.5rem;

&:hover {
    background-color:#182229;
    cursor: pointer;
  }
`
const MenuContainer = styled(Menu)`
& .MuiPaper-root {
    background-color: transparent;
    background-color:#233138;
    margin-top: -10px; 
    margin-bottom: -10px;
    box-shadow:none;
    border-radius: 6px; 
  }
& .MuiPopover-paper {
    margin-top:4px;
    margin-left: 20px; 
  }

`
const MoreFeatures = () => {

    const [open, setOpen] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const handleClose =()=>{
        setOpen(null);
        setIsActive(false);
     }
    const handleClick =(e)=>{
        setOpen(e.currentTarget);
        setIsActive(true);
     }
    return (
        <>
            <MoreVertIcon onClick={handleClick} 
             style={{  backgroundColor: isActive ? '#374248' : 'transparent',
             borderRadius: isActive ? '50%' : '0', }}/>
            <MenuContainer
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1 ={null}
                anchorOrigin =  {{
                    vertical : 'bottom',
                    horizontal : 'center'
                }}
                transformOrigin={{
                    vertical :'top' , 
                    horizontal :'right'
                }}
            >
                <MoreOptions onClick={handleClose}>New group</MoreOptions>
                <MoreOptions onClick={handleClose}>New community</MoreOptions>
                <MoreOptions onClick={handleClose}>Starred Messages</MoreOptions>
                <MoreOptions onClick={handleClose}>Select chat</MoreOptions>
                <MoreOptions onClick={handleClose}>Settings</MoreOptions>
                <MoreOptions onClick={handleClose}>Logout</MoreOptions>
            </MenuContainer>
        </>
    )
}
export default MoreFeatures;