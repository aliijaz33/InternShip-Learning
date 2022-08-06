/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { SafeAreaView, ScrollView, Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

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
        <LayOut>
            <View style={styles.TopViewStyle}>
                <Text style={styles.TopTextStyle}>Hello {profileUser.name}</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <ImageBackground source={require('../assets/fonts/mg4.png')} style={styles.ImageStyle} />
                </TouchableOpacity>

            </View>
            <View style={styles.Container}><Text style={styles.TextStyle}>Home Screen</Text></View>
        </LayOut>
    );
};

export default HomeScreen;



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: 100,
    },
    TextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    TopViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(80,255,80,0.6)',
        margin: 5,

    },
    TopTextStyle: {
        paddingTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    ImageStyle: {
        width: 60,
        height: 60,
    }
})