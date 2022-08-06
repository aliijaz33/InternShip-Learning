/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: 'rgba(60, 255, 60, 0.8)' }, tabBarInactiveTintColor: 'black' }}>
            <Tab.Screen name="Home2" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;


const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'black',
    },
});
