import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BadButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default BadButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(200,100,50,0.9)",
        borderRadius: 30,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 125,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: 25,
        textTransform: "uppercase",
    }
})
