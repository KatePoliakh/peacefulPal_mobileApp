import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = async () => {
        setIsLoading(true);
        setUserToken('token');
        await AsyncStorage.setItem("userToken", 'token');
        setIsLoading(false);
    }
    const logout = async () => {
        setIsLoading(true);
        setUserToken(null);
        await AsyncStorage.removeItem("userToken");
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem("userToken");
            setUserToken(userToken);
            setIsLoading(false);    
        }
        catch(e){
            console.log('Is logged in error: ', e);
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, []);
    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}