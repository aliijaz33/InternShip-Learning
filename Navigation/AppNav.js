/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../Context/AuthContext';
import { ActivityIndicator, View } from 'react-native';


const AppNav = () => {

    const { isLoading, userTokken } = useContext(AuthContext);

    if (isLoading) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>;
    }

    return (
        <NavigationContainer>
            {userTokken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNav;
