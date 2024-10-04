import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GoalItem = ({goal, deleteGoalHandler}) => {

  const navigation = useNavigation();

  function deleteGoal() {
    deleteGoalHandler(goal.id);
  }

  function showDetails() {
    navigation.navigate('Details', {goal: goal});
  }

  return (
    <View key={goal.id} style={styles.textBox}>
      <Text style={styles.textInput}>{goal.text}</Text>
      <Button 
        title="X" 
        color="red"
        onPress={deleteGoal}
      />
      <Button 
        title="i"
        color="pink"
        onPress={showDetails}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    color: 'coral',
    fontSize: 20,
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