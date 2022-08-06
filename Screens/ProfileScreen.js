/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import LayOut from '../Components/LayOut';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfileScreen = () => {


    // const [userData, setUserData] = useState('');

    // const userProfileData = (data) => {
    //     setUserData(data);
    // }

    // useEffect(() => {
    //     userProfileData();
    // }, []);

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
            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('../assets/fonts/mg4.png')} style={styles.imageStyle} />
                    <Text style={styles.textStyle}> Welcome  {profileUser.name} </Text>

                </View>

                <View style={styles.bottomViewStyle}>
                    <View style={styles.txtViewStyle}><Text style={styles.profileTextStyle}>
                        Name: {profileUser.name}
                    </Text></View>
                    <View style={styles.txtViewStyle}><Text style={styles.profileTextStyle}>
                        Email: {profileUser.email}
                    </Text></View>
                    <View style={styles.txtViewStyle}><Text style={styles.profileTextStyle}>
                        Phone No: {profileUser.phoneNo}
                    </Text></View>
                </View>
            </View>
        </LayOut>
    );
}

export default ProfileScreen;


const styles = StyleSheet.create({
    bottomViewStyle: {
        //justifyContent: 'flex-end',
        height: 450,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
    },
    imageStyle: {
        marginBottom: 10,
        height: 120,
        width: 120,
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 20,
    },
    profileTextStyle: {
        color: 'black',
        fontWeight: '600',
        fontSize: 22,
        //paddingTop: 20,
        paddingLeft: 10,
    },
    txtViewStyle: {
        height: 60,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,
        justifyContent: 'center'
    }

})