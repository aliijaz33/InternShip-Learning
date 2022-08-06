/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LayOut({ children }) {
    return (
        <View style={styles.container}>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            <View style={styles.circle3} />
            <View style={styles.circle4} />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#98fb88',
        flex: 1,
    },
    circle1: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        width: 200,
        height: 200,
        top: -80,
        left: -13,
        borderRadius: 100,
    },
    circle2: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        width: 200,
        height: 200,
        top: -13,
        left: -80,
        borderRadius: 100,
    },
    circle3: {
        position: 'absolute',
        bottom: -80,
        right: -13,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: 200,
        height: 200,
        borderRadius: 100,

    },
    circle4: {
        position: 'absolute',
        bottom: -13,
        right: -80,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});
