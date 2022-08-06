/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, ScrollView, View, StyleSheet, Alert } from 'react-native';

import * as EmailValidator from 'email-validator';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import { registerUser } from '../Controllers/authenticationControllers';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <LayOut>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.txtStyle}>Sign Up</Text>
                    <Text style={styles.labelTextStyle}>Full Name</Text>

                    <CustomInput
                        onChangeText={text => setName(text)}
                        abc="user-tie" placeholder="Enter Your Full Name" />
                    <Text style={styles.labelTextStyle}>Email Address</Text>

                    <CustomInput
                        onChangeText={text => setEmail(text)}
                        abc="envelope" placeholder="Enter Your Email" />
                    <Text style={styles.labelTextStyle}>Phone No</Text>

                    <CustomInput
                        onChangeText={text => setPhoneNo(text)}
                        abc="phone" placeholder="Enter Your phone no." />
                    <Text style={styles.labelTextStyle}>Password</Text>

                    <CustomInput
                        onChangeText={text => setPassword(text)}
                        abc="lock" secureTextEntry={true} placeholder="Enter Password" />
                    <Text style={styles.labelTextStyle}>Confirm Password</Text>

                    <CustomInput
                        onChangeText={text => setConfirmPassword(text)}
                        abc="lock" secureTextEntry={true} placeholder="Confirm Password" />
                    <View style={styles.buttonView}>
                        <CustomButton
                            onPress={async () => {

                                if (name.length < 3) {
                                    Alert.alert('Name must be at least 3 words or greater');
                                    return;
                                }

                                if (!EmailValidator.validate(email)) {
                                    Alert.alert('Email is not valid');
                                    return;
                                }

                                if (phoneNo.length < 11 || phoneNo.length > 11) {
                                    Alert.alert('Please Enter valid 11 digit phone no.');
                                    return;
                                }

                                if (password.length < 6) {
                                    Alert.alert('Password must be greater than 6 digits or letters');
                                    return;
                                }

                                if (password !== confirmPassword) {
                                    Alert.alert('Password does not match');
                                    return;
                                }


                                const data = {
                                    name,
                                    email,
                                    phoneNo,
                                    password,
                                    confirmPassword,
                                };

                                await registerUser(data);
                                Alert.alert('User Registered Successfully');
                            }}
                            title={'REGISTER'}
                        />
                        <View style={styles.bottomTextStyle}>
                            <Text style={{ color: 'black', fontSize: 15 }}>
                                Have an account ?{' '}
                            </Text>
                            <Text
                                onPress={() => {
                                    navigation.navigate('Login');
                                }}
                                style={{
                                    color: 'rgb(0,70,0)',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                Sign in
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LayOut>
    );
}


export default RegisterScreen;


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
        marginTop: 30,
    },
    labelTextStyle: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    bottomTextStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
