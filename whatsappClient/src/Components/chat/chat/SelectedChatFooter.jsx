import { Box , styled , InputBase } from "@mui/material";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

const Component = styled(Box)`
height:54px;
display:flex;
align-items:center;
width:100%;
&>*{
    margin:5px;
    color:#8696a0;
    cursor:pointer;
}
&>:first-child{
    margin-left:20px !important;
}
& > *:last-of-type {
    margin-left: auto;
    margin-right:18px;
  }
`
const Icon = styled(AttachFileIcon)`
transform: rotate(45deg) scaleX(-1);

`
const InputField = styled(Box)`
width:83%;
background-color:#2a3942;
border-radius:5px;
height:38px;
cursor:text;
`
const TypeField = styled(InputBase)`
color:#d1d7db;
width:100%;
padding:5px 2px 5px 10px ;
font-size:14px;
`
const SelectedChatFooter = ({sendMsg , setMsg , msg})=>{
   
    return (
        <>
        <Component>
            <TagFacesIcon/>
            <Icon/>
            <InputField>
                <TypeField
                    placeholder="Type a message"
                    onChange={(e)=>setMsg(e.target.value)}
                    onKeyPress={(e)=>sendMsg(e)}
                    value={msg}
                />
            </InputField>
            <MicIcon/>
          
        </Component>
        </>
    )
}
export default SelectedChatFooter;