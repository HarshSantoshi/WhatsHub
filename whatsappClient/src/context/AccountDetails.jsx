import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountAccess = ({children}) => {

    const [user , setUser]  = useState({});
    const [account, setAccount] = useState();
    return (
        <AccountContext.Provider value = {{ account, setAccount , user , setUser}}>
        {children}
        </AccountContext.Provider>
    )
}


export default AccountAccess;