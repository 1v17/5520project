import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Input() {
    const [text, setText] = useState("");
  return (
    <TextInput placeholder="Input sth here"
        keyboardType='default'
        style={{borderBottomColor: "blue", borderBottomWidth: 2}}
        value={text}
        onChangeText={function (changedText) { // alternative: use arrow function
          // console.log(changedText);
          setText(changedText);  // don't just call the function here
        }}/>
  )
}

const styles = StyleSheet.create({})