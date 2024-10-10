import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableButton = ({children, pressFunction, componentStyle, pressedStyle}) => {
  return (
    <Pressable
      onPress={pressFunction}
      hitSlop={20}
      style={({pressed}) => {
        return [styles.defaultStyle, 
          componentStyle,
          pressed && styles.defaultPressedStyle,
          pressed && pressedStyle,
        ]}}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  defaultPressedStyle: {
    backgroundColor: 'white',
    opacity: 0.5,
  },
  defaultStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 3,
  }
});

export default PressableButton