import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const GoalItem = ({goal, deleteGoalHandler}) => {

  function deleteGoal() {
    deleteGoalHandler(goal.id);
  }

  return (
    <View key={goal.id} style={styles.textBox}>
      <Text style={styles.textInput}>{goal.text}</Text>
      <Button 
        title="X" 
        color="red"
        onPress={deleteGoal}
      />
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
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default GoalItem