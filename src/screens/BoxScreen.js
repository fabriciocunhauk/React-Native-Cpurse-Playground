import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>

    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },

    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        marginTop: 50,
        alignSelf: "flex-end"
    },

    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    },
})

export default BoxScreen;