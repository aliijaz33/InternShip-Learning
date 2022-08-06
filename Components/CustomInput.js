/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CustomInput({ style, abc, ...props }) {
    return (
        <View style={styles.TxtInputBoxStyle}>
            <View style={styles.iconStyle}>
                <FontAwesome5 style={{ fontSize: 17, paddingLeft: 10 }} name={abc} />

                <TextInput style={{ marginLeft: 10, fontSize: 18 }} {...props} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    TxtInputBoxStyle: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: '#98fb80',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 2,
        marginHorizontal: 30,
        width: '85%',
    },
    iconStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
});
