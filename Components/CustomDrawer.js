/* eslint-disable prettier/prettier */

import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomDrawer = props => {
    const { logout } = useContext(AuthContext);

    const [profileUser, setProfileUser] = useState('');

    const getProfileUsers = async () => {
        const usersProfile = await AsyncStorage.getItem('usersProfile');
        setProfileUser(JSON.parse(usersProfile));
        //console.log(usersProfile);
    };



    useEffect(() => {
        getProfileUsers();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'rgba(240, 255, 200, 0.8)' }}>
                <SafeAreaView>
                    <ImageBackground source={require('../assets/fonts/mg3.jpg')} style={{ padding: 40, backgroundColor: 'rgba(0, 0, 0, 0.9)' }} >
                        <View style={{ flexDirection: 'column' }}>
                            <Image source={require('../assets/fonts/mg4.png')} style={styles.imageStyle} />
                            <View ><Text style={{ paddingLeft: 10, fontWeight: 'bold', fontSize: 25 }}>{profileUser.name}</Text></View>
                        </View>
                    </ImageBackground>

                    <View style={{ paddingTop: 20 }}>
                        <DrawerItemList {...props} />
                    </View>
                </SafeAreaView>
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.6)' }}>
                <TouchableOpacity
                    onPress={() => { logout(); }}



                    style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='md-exit-outline' size={25} />
                        <Text style={{ fontWeight: '900', padding: 6, }}>Sign Out</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;


const styles = StyleSheet.create({
    imageStyle: {
        //position: 'absolute',
        width: 80,
        height: 80,

    }
})