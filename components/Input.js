import { StyleSheet, Text, TextInput, Button, View } from 'react-native'
import React from 'react'
import { useState } from 'react';


export default function Input({autoFocus, inputHandler}) {
    const [text, setText] = useState("");
    const [counterVisible, setCounterVisible] = useState(true);

    function handleConfirm() {
        // console.log(text);
        inputHandler(text);
    }

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Input words here"
                keyboardType='default'
                value={text}
                onChangeText={function (changedText) {
                    setText(changedText);
                }}
                autoFocus={autoFocus}
                blurOnSubmit={true}
                onBlur={function() {setCounterVisible(false)}}
                onFocus={function() {setCounterVisible(true)}}
            />
            {text.length > 0 && counterVisible && <Text >{text.length}</Text>}
            {!counterVisible && <Text>{text.length >= 3 ? "Thank you" : "Please type more than 3 characters"}</Text>}
            <Button title="Confirm"
                color="blue"
                onPress={handleConfirm} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderBottomColor: "blue", 
        borderBottomWidth: 2
    },
});
