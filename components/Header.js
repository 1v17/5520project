import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({name, children}) {
//   console.log(props)
  return (
    <View>
      <Text style={styles.header}>Welcome to {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: 'aliceblue',
    color: 'cornflowerblue',
    borderWidth: 2,
    borderColor: 'deepskyblue',
    padding: 10,
  },
})