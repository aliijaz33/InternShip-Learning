/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomButton({ title, ...props }) {
    return (
        <View>
            <TouchableOpacity
                {...props}
                android_ripple={{ color: '#fff' }}
                style={styles.buttonPressable}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
    },
    buttonPressable: {
        backgroundColor: '#28fb10',
        width: '100%',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
