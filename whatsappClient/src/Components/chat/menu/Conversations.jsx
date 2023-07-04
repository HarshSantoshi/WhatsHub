import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountDetails";
import { Conversation } from "./Conversation";
import { Box, styled , Divider} from "@mui/material";


const Component = styled(Box)`
height:100vh;
overflow:auto;
&::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #374045;
  }
`
const DividerStyle = styled(Divider)`
    margin:-10px 6px 0 65px;
    background-color: #8696a026;
`

const ConversationMenu = ({text}) => {
    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            
            const filteredSearch = response.filter(user=> user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredSearch);
        }
        fetchData();
    }, [text])
    return (
        <>
            <Component>
                {
                    users.map(user => (
                        user.sub !== account.sub &&
                        <>
                            <Conversation user={user} />
                            <DividerStyle/>
                        </>
                    ))
                }
            </Component>
        </>
    )
}
export default ConversationMenu;