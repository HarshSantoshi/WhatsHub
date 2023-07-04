import { Box , Typography , styled} from "@mui/material"
import {  useContext } from "react"
import { AccountContext } from "../../../context/AccountDetails"
import { setChat } from "../../../service/api"
const Image = styled('img')`
height :44px;
width :44px;
border-radius : 50%;
padding : 0px 10px;
objectFit: cover;

`

const Component = styled(Box)`
display:flex;
height:48px;
cursor:pointer;
padding:17px 0px;
color:#e9edef;
`
export const Conversation =  ({user})=>{
    const {setUser ,account} = useContext(AccountContext);
    const selectUser = async()=>{
        setUser(user);
        await setChat({sender : account.sub  , receiver : user.sub});
    }
    return (
        <>
        <Component on onClick={()=> selectUser()}>
            <Box>
                <Image src={user.picture} alt="Dp" />
            </Box>
           <Box>
           <Box>
                <Typography>
                    {user.name}
                </Typography>
            </Box>
           </Box>
        
        </Component>
        
        {/* <Component>
            <Box>
                <Image src={user.picture} alt="Dp" />
            </Box>
           <Box>
           <Box>
                <Typography>
                    {user.name}
                </Typography>
            </Box>
           </Box>
          
        </Component> */}

        </>
    )
}
