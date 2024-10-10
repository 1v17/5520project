import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import PressableButton from './PressableButton';
import AntDesign from '@expo/vector-icons/AntDesign';

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
      <Pressable 
        onPress={showDetails} 
        style={({pressed}) => {
          return [styles.horizontalView,
            pressed && styles.pressedStyle,
          ]}}
        android_ripple={{color: 'coral', radius: 50, borderless: true, foreground: true}}
      >
        <Text style={styles.textInput}>{goal.text}</Text>
        <PressableButton
          pressFunction={deleteGoal}
          componentStyle={styles.deleteContainer}
          pressedStyle={styles.pressedStyle}
        >
          <AntDesign name="delete" size={24} color="coral" />
        </PressableButton>
      </Pressable>
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
    // paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  pressedStyle: {
    backgroundColor: 'coral',
    opacity: 0.5,
  },
  deleteButton: {
    color: 'red',
    fontSize: 20,
  },
  deleteContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  }
});


export default GoalItem