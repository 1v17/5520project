import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState, useRef, useEffect } from 'react';


export default function Input({autoFocus}) {
    const [text, setText] = useState("");
    const inputRef = useRef(null);
    const [characterCount, setCharacterCount] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus();
        }
        setCharacterCount(text.length);
    }, [autoFocus, text]);

    return (
        <>
            <TextInput
                ref={inputRef}
                placeholder="Input sth here"
                keyboardType='default'
                style={{borderBottomColor: "blue", borderBottomWidth: 2}}
                value={text}
                onChangeText={function (changedText) {
                    setText(changedText);
                }}
            />
            {text.length > 0 && autoFocus && <Text>{characterCount}</Text>}
        </>
    )
}

const styles = StyleSheet.create({})