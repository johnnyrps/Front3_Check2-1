import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState("");
    const [login, setLogin] = useState(false)

    function fillUserDataState(token) {

        localStorage.setItem("token", token)
        setUserData(...userData, token)
        setLogin(true)
    }

    function emptyUserData() {
        setUserData("");
       
    }

    return (
        <AuthContext.Provider
        value={{
            userData,
            fillUserDataState,
            login,
            setLogin,
            emptyUserData
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;