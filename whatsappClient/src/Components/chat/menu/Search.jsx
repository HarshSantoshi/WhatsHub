import { Box , styled} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";

const Component = styled(Box)`
background-color:#111b21;
height:43px;
display:flex;
align-items : center;
`
const SearchField = styled(Box)`
background-color:#202c33;
margin:0px 14px;
position : relative;
height:32px;
border-radius : 7px;
width:100%;
`
const Icon = styled(Box)`
position:absolute;
padding:6.5px 10px;
color:#8696a0;
`

const Text = styled(InputBase)`
width:100%;
padding : 16px;
height : 15px;
padding-left:60px;
font-size :13px;
font-weight:100;
color:white;
`
const Search = ({setText})=>{
    return (
        <Component>
            <SearchField>
                <Icon>
                    <SearchIcon
                    fontSize="12px"
                    />
                </Icon>
                <Text
                placeholder="Search and start a new chat"
                onChange={(e)=>setText(e.target.value)}
                />

            </SearchField>
        </Component>
    )
}
export default Search;