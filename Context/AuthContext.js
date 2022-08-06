/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userTokken, setUserTokken] = useState(null);

    const login = () => {
        setIsLoading(true);
        setUserTokken('ali');
        AsyncStorage.setItem('userTokken', 'ali');
        setIsLoading(false);
    };

    const logout = () => {
        setIsLoading(true);
        setUserTokken(null);
        AsyncStorage.removeItem('userTokken');
        AsyncStorage.removeItem('usersProfile');
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userTokken = await AsyncStorage.getItem('userTokken');
            setUserTokken(userTokken);
            setIsLoading(false);
        } catch (e) {
            console.log(` isLogged in error ${e} `);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userTokken }}>
            {children}
        </AuthContext.Provider>
    );
};
