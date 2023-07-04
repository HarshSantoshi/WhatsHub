import { Box , Drawer ,  styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {Typography} from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountDetails";
const drawerStyle = {
    left : 0 ,
    top : 0 ,
    height : '100%',
    width:'30%',
    boxShadow:'none',
    backgroundColor:'#111b21'
    
}
const UpperStyle = styled(Box)`
background-color:#202c33;
height :16% ;
display : flex;
color:#d9dee0;
align-items :center;
& >*{
    margin-top:auto;
    padding:17px 13px;
    font-size:20px;
}
`
const Dp = styled('img')
`
height:180px;
width:180px;
border-radius : 50%;
margin:30px;
`

const NameContainer = styled(Box)`
color:#d9dee0;
padding : 10px 26px 2px;
& :first-child{
    color:#008069;
    font-size:13px;
    font-weight:100;
}
& :last-child{
    margin:14px 0px;
    color:#8696a0;
    font-size:14px;
}
`
const DpContainer = styled(Box)`
display:flex;
justify-content : center;
`
const Content = styled(Box)`
padding : 10px 26px 2px;
color:#8696a0;
& > *{
    font-size:12px;
}
`
const ProfileDrawer = ( { open, setOpen } ) => {
    const handleClose = ()=>{
        setOpen(false);
    }
    const {account} = useContext(AccountContext)
    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    open: false
                  }}
                PaperProps={{ sx: drawerStyle}}
                style={{zIndex : 1500}}
            >
                <UpperStyle>
                    <ArrowBack onClick={()=> setOpen(false)}  style={{cursor:'pointer'}}/>
                    <Typography style={{fontWeight:600 , fontSize : '17px',fontFamily : 'Segoe UI'}}>Profile</Typography>
                </UpperStyle>
                <Box>
                    <DpContainer>
                    <Dp src={account.picture} alt="dp" />
                    </DpContainer>
                    <NameContainer>
                        <Typography>Your Name</Typography>
                        <Typography>{account.name}</Typography>
                    </NameContainer>
                    <Content>
                        <Typography>
                        This is not your username or pin. This name will be visible to your WhatsApp contacts.
                        </Typography>
                    </Content>
                    <NameContainer>
                        <Typography style={{paddingTop:'20px'}}>About</Typography>
                        <Typography>Available</Typography>
                    </NameContainer>
                </Box>
            </Drawer>
        </>
    )
}
export default ProfileDrawer;