/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function profileDataGet(data) {
    const usersProfile = await AsyncStorage.getItem('usersProfile');

    if (usersProfile === null) {

        const userProfileData = data;
        await AsyncStorage.setItem('usersProfile', JSON.stringify(userProfileData));
    }
    // else {
    //     const userProfileData = await AsyncStorage.getItem('usersProfile');
    //     const userProfileDataJson = JSON.parse(userProfileData);

    //     const allUsers = [...userProfileDataJson, data];

    //     await AsyncStorage.setItem('usersProfile', JSON.stringify(allUsers));
    //     //return (allUsers);

    //     console.log(allUsers, 'profile Data');
    // }
}