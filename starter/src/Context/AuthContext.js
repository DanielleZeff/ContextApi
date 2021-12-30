import React, { createContext, useState, useEffect} from "react";
import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({children}) {
    const{authenticated, loading, handleLogin, handleLogOut} = useAuth();
    return (
        <Context.Provider value={{loading, authenticated, handleLogin, handleLogOut}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};