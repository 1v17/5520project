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
      <View>
        {children}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  defaultPressedStyle: {
    backgroundColor: 'white',
    opacity: 0.5,
  },
  defaultStyle: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingHorizontal: 3,
  }
});

export default PressableButton