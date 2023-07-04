import { Box, styled, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Component = styled(Box)`
height :39px;
background-color:#202c33;
display:flex;
padding: 8px 16px;
align-items : center ;
cursor:pointer;
`
const Image = styled('img')`
height : 40px;
width : 40px;
object-fit:cover;
border-radius : 50%;
`

const Name = styled(Typography)`
margin-left : 15px;
color:#e9edef;
font-weight:600;
font-size : 14px;
`
const Status = styled(Typography)`
margin-left : 15px;
color:#e9edef;
font-size : 10px;
`
const RightIcons = styled(Box)`
color:#aebac1;
margin-left:auto;
&>*{
    font-size:20px;
    margin-left : 24px;
    cursor:pointer;
}
`
const SelectedChatHeader = ({user}) => {
    return (
        <>
            <Component>
                <Box>
                    <Image src={user.picture} alt="dp" />
                </Box>
                <Box>
                    <Name>
                       {user.name}
                    </Name>
                    <Status>
                        Online
                    </Status>
                </Box>
                <RightIcons>
                    <SearchIcon />
                    <MoreVertIcon />
                </RightIcons>
            </Component>
        </>
    )
}
export default SelectedChatHeader;