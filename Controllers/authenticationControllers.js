/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function registerUser(data) {
    const users = await AsyncStorage.getItem('users');

    if (users === null) {

        const userData = [data];
        await AsyncStorage.setItem('users', JSON.stringify(userData));
    }
    else {
        const userData = await AsyncStorage.getItem('users');
        const userDataJson = JSON.parse(userData);

        const allUsers = [...userDataJson, data];

        await AsyncStorage.setItem('users', JSON.stringify(allUsers));
        //return (allUsers);

        //console.log(allUsers);
    }
}