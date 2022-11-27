import axios from "axios";
import React, { useEffect, useState } from "react";
const UserContext = React.createContext();
const TOKEN_KEY = 'token';
export const UserContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        let _token = getTokenLocalStorage();
        if (_token)
            setToken(_token);
    },[]);

    useEffect(()=>{
        getUser();
    },[token]);
    const getUser = async () => {
        if (!token)
            return;
        try {
            const {data} = await axios.get('/user/', {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            setUser(data);
        }  catch (e) {
            logout();
            console.log(e);
        }
    }
    const logout = () => {
        removeTokenLocalStorage();
        setToken(null);
        setUser(null);
        window.location.pathname = '/';
    }
    const login = async (email, password) => {
        try {
            const {data} = await axios.post('/user/login', {email, password});
            const _token = data.token;
            setToken(_token);
            setTokenLocalStorage(_token);
        }catch(e) {
            const {status} = e.response || {status:500};
            console.log(e.response.data.message);
            logout();
        }
    }

    const register = async (username, email, telefono, password) => {
        try {
            await axios.post('/user/signup', {username, email, telefono, password});
        } catch (e) {
            const {status} = e.response || {status:500};
            console.log(e.response.data.message);
        }
    }

    const state = {
        token,
        user,
        login,
        logout,
        register
    };
    
    return <UserContext.Provider value={state} {...props}></UserContext.Provider>
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context)
        throw new Error('useUserContext debe ser llamado dentro de un hijo del proveedor');
    return context;
}

const setTokenLocalStorage = (token) => localStorage.setItem(TOKEN_KEY, token);
const getTokenLocalStorage = (token) => localStorage.getItem(TOKEN_KEY, token);
const removeTokenLocalStorage = (token) => localStorage.removeItem(TOKEN_KEY);
