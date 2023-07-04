import { Box } from "@mui/material";
import ConversationMenu from "./Conversations";
import MenuHeader from "./Menu-Header";
import { useState } from "react";
import Search from "./Search";

const Menu = ()=>{
    const [text , setText] = useState('')
    return (
        <Box>
            <MenuHeader/>
            <Search
            setText = {setText}
            />
            <ConversationMenu
            text = {text}
            />

        </Box>
    )
}
export default Menu;