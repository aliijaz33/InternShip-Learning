/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useContext, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CheckBox from '@react-native-community/checkbox';
import { AuthContext } from '../Context/AuthContext';
//import { userData } from './ProfileScreen';
import { profileDataGet } from '../Controllers/ProfileData';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LogInScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);

    const [allUsers, setallUsers] = useState([]);

    const getallUsers = async () => {
        const users = await AsyncStorage.getItem('users');
        setallUsers(JSON.parse(users));
        //console.log(users);
    };



    useEffect(() => {
        getallUsers();
    }, []);


    const [logemail, setlogEmail] = useState('');
    const [logpassword, setlogPassword] = useState('');

    allUsers.filter((e) => {
        if (e !== null) {
            if (e.email === logemail && e.password === logpassword) {
                profileDataGet(e);
            }
        }
    });

    return (
        <LayOut>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.txtStyle}>Sign In</Text>
                    <Text
                        style={styles.emailHeaderTextStyle}>
                        Email Address
                    </Text>
                    <CustomInput onChangeText={text => setlogEmail(text)} abc="envelope" placeholder="Enter Your Email" />
                    <Text
                        style={styles.passwordHeaderTextStyle}>
                        Password
                    </Text>
                    <CustomInput onChangeText={text => setlogPassword(text)} abc="lock" secureTextEntry={true} placeholder="Enter Password" />
                    <Text
                        onPress={() => {
                            navigation.navigate('Splash');
                        }}
                        android_ripple={{ color: '#fff' }}
                        style={styles.forgotTextStyle}>
                        Forgot Password?
                    </Text>

                    <View style={{ flexDirection: 'row', marginRight: 230 }}>
                        <CheckBox
                        //value={agree}
                        //onValueChange={() => }
                        />
                        <Text style={{ marginTop: 5, color: 'black', fontWeight: 'bold' }}>
                            Remember me
                        </Text>
                    </View>

                    <View style={styles.buttonView}>
                        <CustomButton
                            onPress={() => {

                                allUsers.filter((e) => {
                                    if (e !== null) {
                                        if (e.email === logemail && e.password === logpassword) {
                                            { login(); }
                                        }
                                        // else if (e.email !== logemail || e.password !== logpassword) {
                                        //     alert('Email or password is incorrect');
                                        // }
                                    }
                                });
                            }}
                            title={'LOGIN'}
                        />
                        <Text style={styles.logInTextStyle}>-OR-</Text>
                        <Text style={styles.logInTextStyle}>Sign In With</Text>

                        <View style={{ flexDirection: 'row', marginLeft: 65 }}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.img4}
                                    source={require('../assets/fonts/img4.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={styles.img5}
                                    source={require('../assets/fonts/img5.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>
                                Don't Have an account ?{' '}
                            </Text>
                            <Text
                                onPress={() => {
                                    navigation.navigate('Register');
                                }}
                                style={{
                                    color: 'rgb(0,70,0)',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                Sign up
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LayOut>
    );
};


export default LogInScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtStyle: {
        marginTop: 40,
        fontSize: 40,
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    buttonView: {
        width: '100%',
        paddingLeft: 80,
        paddingRight: 80,
        flexDirection: 'column',
        flex: 1,
        marginTop: 20,
    },
    TxtInputStyle: {
        alignSelf: 'center',
        borderRadius: 2,
    },
    img5: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        marginTop: 10,
        margin: 5,
        marginLeft: 20,
        borderRadius: 100,
    },
    img4: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        marginTop: 9,
        marginBottom: 10,
        marginLeft: 5,
        borderRadius: 100,
    },
    logInTextStyle: {
        alignSelf: 'center',
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    forgotTextStyle: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    emailHeaderTextStyle: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 50,
        color: 'black',
        fontWeight: 'bold',
    },
    passwordHeaderTextStyle: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 5,
        color: 'black',
        fontWeight: 'bold',
    },
});
