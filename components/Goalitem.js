import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GoalItem = ({goal}) => {
  return (
    <View  key={goal.id} style={styles.textBox}>
      <Text style={styles.textInput}>{goal.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    color: 'coral',
    fontSize: 50,
    padding: 10,
  },
  textBox: {
    backgroundColor: 'royalblue',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});


export default GoalItem