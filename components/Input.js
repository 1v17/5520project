import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState, useRef, useEffect } from 'react';


export default function Input({autoFocus}) {
    const [text, setText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [counterVisible, setCounterVisible] = useState(true);

    useEffect(() => {
        setCharacterCount(text.length);
    }, [text]);

    return (
        <>
            <TextInput
                placeholder="Input words here"
                keyboardType='default'
                style={{borderBottomColor: "blue", borderBottomWidth: 2}}
                value={text}
                onChangeText={function (changedText) {
                    setText(changedText);
                }}
                autoFocus={autoFocus}
                blurOnSubmit={true}
                onBlur={function () {setCounterVisible(false)}}
                onFocus={function () {setCounterVisible(true)}}
            />
            {text.length > 0 && counterVisible && <Text >{characterCount}</Text>}
            {!counterVisible && <Text>{text.length >= 3 ? "Thank you" : "Please type more than 3 characters"}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
