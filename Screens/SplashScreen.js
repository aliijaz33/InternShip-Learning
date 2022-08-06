/* eslint-disable prettier/prettier */
import React from 'react';

import { SafeAreaView, ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';

const SplashScreen = ({ navigation }) => {
    return (

        <LayOut>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/fonts/mg2.png')} />
                <Text style={styles.txtStyle}>Lets Get Started By Clicking Below</Text>
                <View style={styles.buttonView}>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate('Login');
                            //   // await AsyncStorage.setItem('userHasViewedSplashScreen', 'yes');

                            //   // navigation.reset({
                            //   //   index: 0,
                            //   //   routes: [{ name: 'Login Now' }],
                            //   // });
                        }}
                        title={'Lets Start'}
                    />
                </View>
            </View>
        </LayOut>

    );
};

export default SplashScreen;



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 140,
    },
    txtStyle: {
        fontSize: 20,
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonView: {
        width: '100%',
        paddingLeft: 80,
        paddingRight: 80,
        flexDirection: 'column-reverse',
        flex: 1,
        marginBottom: 180,
    },

});
