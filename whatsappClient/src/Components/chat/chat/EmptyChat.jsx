import { Box , styled } from "@mui/material";
import EmptyChatImg from '../../../constants/EmptyChatImg.png';
import {Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
const Component = styled(Box)`
padding:30px 0px;
text-align:center;
height:100vh;

`
const Image = styled('img')`
height : 260px;
width:380p;
margin-top:60px;
background-color: red;
color:red;
`
const Container = styled (Box)`
color:#8696a0;
`
const Title = styled (Typography)`
font-size : 32px;
margin:20px 0px 12px 0 ;
font-family : inherit;
color: white;
font-weight:100;
`
const Subheading = styled(Typography)`
font-size : 13px;
font-family : inherit;
font-weight : 400;
`
const ImpMessage = styled(Box)`
color:#8696a0;
font-size : 10px;
text-align:center;
display: flex;
margin: 86px auto;
justify-content : center;
`
const Msg = styled(Typography)`
font-size : 12px;
padding-left : 4px;
`
const EmptyWindow = () =>{
    return (
      <>
      <Component >
        <Box>
            <Image src={EmptyChatImg} alt="Img" />
        </Box>
        <Container>
            <Title>Whatsapp Web</Title>
            <Subheading >Send and receive messages without keeping your phone online.
                <br />
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
            </Subheading >
        </Container>
        <ImpMessage>
            <LockIcon 
            style={{fontSize:10 , paddingTop : 3}}/>
            <Msg>End-to-end encrypted</Msg>
        </ImpMessage>
      </Component >
      </>
    )
}
export default EmptyWindow;