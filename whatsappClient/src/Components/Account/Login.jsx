import { useContext } from "react";
import { Dialog, Box, Typography, styled, List, ListItem } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import jwt_decode from "jwt-decode"
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../../context/AccountDetails";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import iconImg from "../../constants/iconImg.png";
import {ADDuser} from "../../service/api";
const dialogStyle = {
    height: '100%',
    marginTop: '7%',
    width: '70%',
    boxShadow: 'none',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: '100%'
}
const Component = styled(Box)`
 display:flex;
`
const LeftContainer = styled(Box)`
padding:50px;
`
const RightContainer = styled(Box)`
position:relative;
`

const LoginBtn = styled(Box)`
position:absolute;
top:42%;
left:10%;

`
const QRCode = styled('img')(
    {
        maxHeight: 230,
        maxWidth: 230,
        margin: '48px 0 0 50px',
    }
)

const Heading = styled(Typography)`
font-size: 26px;
font-family:inherit;
font-weight: 200;
line-height: normal;
margin-bottom:30px;
color: #41525d;
`

const ListStyle = styled(List)
    `
&>li{
    padding:1px;
    margin-bottom:10px;
    font-size:17px;
    line-height:28px;
    color:#3b4a54;
}
`
const IconStyle = styled(MoreVertIcon)`
margin: 0px 3px;
border-radius:2px;

background-color:#f2f2f2;
`
const SettingIcon = styled(SettingsSuggestIcon)`
margin: 0px 3px;
border-radius:2px;

background-color:#f2f2f2;
`
const Title = styled(Box)`
height : 50px;
font-size:12px;
width:100%;
color:white;
display:flex;
font-weight:600;
background-color:#00a884;
align-items:center;
padding-bottom : 20px;
`
const Icon = styled('img')`
height:50px;
width:50px;
`
const Login = () => {
    const { setAccount } = useContext(AccountContext);
    const getLogin = async (res) => {
        const cred = res.credential;
        const decoded = jwt_decode(cred);
        // console.log(decoded)
        setAccount(decoded);
        await ADDuser(decoded);
    }
    const LoginFailed = (err) => {
        console.log("Can't Login into the system ! ",err);
    }

    return (
       
        <>
       
        <Dialog open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Title>
            <Icon src={iconImg} alt="Img"  style={{paddingTop:'6px'}}/>
              WHATSAPP WEB
            </Title>
            <Component>
                <LeftContainer>
                    <Heading>
                        Use WhatsApp on your computer:
                    </Heading>
                    <ListStyle>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap <span style={{ fontWeight: 600, color: 'black', paddingLeft: '3px' }}> Menu </span>
                            <IconStyle /> or <span style={{ fontWeight: 600, color: 'black', paddingLeft: '3px' }}> Setting </span>
                            <SettingIcon/>
                            and select Linked Devices</ListItem>
                        <ListItem>3. Tap on  <span style={{ fontWeight: 600, color: 'black', paddingLeft: '3px' }}> Link a device </span></ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </ListStyle>

                </LeftContainer>
                <RightContainer>
                    <QRCode src={qrCodeImage} alt="QR code" />
                    < LoginBtn >
                        <GoogleLogin
                            onSuccess={getLogin}
                            onError={LoginFailed}
                        />
                    </ LoginBtn >
                </RightContainer>


            </Component>
        </Dialog>
        </>
    );
}
export default Login;