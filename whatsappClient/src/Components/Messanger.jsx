
//Components
import Login from "./Account/Login"
import { useContext } from "react"
import ChatDialog from "./chat/chatDialog"
import { AccountContext } from "../context/AccountDetails"
import { AppBar, Toolbar, styled, Box } from "@mui/material"
const LoginHeader = styled(AppBar)`
height : 200px;
 background-color:#00a884;
 box-shadow: none;
`
const Header = styled(AppBar)`
height : 120px;
 background-color:#00a884;
 box-shadow: none;
`
const Component = styled(Box)`
height : 100vh; 
background-color:#10191f;`
const Messanger = () => {
    const { account } = useContext(AccountContext);
    return (
        <>
            <Component>
                {
                    account ?
                        <>
                            
                                <Header>
                                    <Toolbar>

                                    </Toolbar>
                                </Header>
                                <ChatDialog />
                            </>
                            :
                            <>
                                <LoginHeader>
                                    <Toolbar>

                                    </Toolbar>
                                </LoginHeader>
                                <Login />
                            </>
                }

                        </Component>
            </>

            );
}
            export default Messanger;