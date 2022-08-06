/* eslint-disable prettier/prettier */

import React from 'react';
import ProfileScreen from '../Screens/ProfileScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false, drawerLabelStyle: { marginLeft: -25 }, tabBarInactiveTintColor: 'black' }}>
            <Drawer.Screen name="Home" component={TabNavigator} options={{
                drawerIcon: (({ color }) => <Icon name="home" size={30} color={color} />)
            }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="md-person-outline" size={27} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
};

export default AppStack;
