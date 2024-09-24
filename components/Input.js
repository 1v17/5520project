import { StyleSheet, Text, TextInput, Button, View, Modal, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';


export default function Input({autoFocus, inputHandler, modalVisibile, cancelHandler}) {
    const [text, setText] = useState("");
    const [counterVisible, setCounterVisible] = useState(true);
    const [confirmDisabled, setConfirmDisabled] = useState(true);

    function handleConfirm() {
        setText("");
        inputHandler(text);
    }

    function handleCancel() {
        setText("");
        cancelHandler();
    }


    return (

        <Modal animationType="slide" visible={modalVisibile} transparent={true}>

        <View style={styles.wrapper}>        
            <View style={styles.container}>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}}
                    style={styles.image}
                    alt='A dart is positioned at the center of a target, accompanied by a prominent check mark.' />
                <Image source={require('../assets/arrow_icon.png')}
                    style={styles.image}
                    alt='A dart is positioned at the center of a target, accompanied by a prominent check mark.' />
                <TextInput
                    style={styles.input}
                    placeholder="Input words here"
                    keyboardType='default'
                    value={text}
                    onChangeText={function (changedText) {
                        setText(changedText);
                        setConfirmDisabled(changedText.length < 3);
                    }}
                    autoFocus={autoFocus}
                    blurOnSubmit={true}
                    onBlur={function() {setCounterVisible(false)}}
                    onFocus={function() {setCounterVisible(true)}}
                />
                {text.length > 0 && counterVisible && <Text >{text.length}</Text>}
                {!counterVisible && <Text>
                    {text.length >= 3 ? "Thank you" : "Please type more than 3 characters"}
                    </Text>}
                <View style={styles.buttonContainer}>                        
                    <Button title="Cancel"
                        color="blue"
                        onPress={handleCancel} />
                    <Button title="Confirm"
                        color="blue"
                        onPress={handleConfirm}
                        disabled={confirmDisabled} />
                </View>
                
            </View>
        </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        fontSize: 20,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderBottomColor: "blue", 
        borderBottomWidth: 2,
        color: "green",
    },
    container: {
        flex: 1,
        backgroundColor: 'lemonchiffon',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%', // why doesn't this work?
        width: '85%',
      },
    buttonContainer: {
        marginVertical: "5%",
        width: '80%',
        justifyContent: 'center',
        alignItems: 'space-between',
        flexDirection: 'row',
        gap: 10, // don't use percentage gap in Android!!! It will crash!
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
    }
});
