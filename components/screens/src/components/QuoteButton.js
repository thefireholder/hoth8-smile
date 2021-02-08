import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoodButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default GoodButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(100,200,100,0.9)",
        borderRadius: 30,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: 25,
        textTransform: "uppercase",
    }
})
