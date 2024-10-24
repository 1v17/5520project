import { View, Text, StyleSheet, Button, Pressable, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import PressableButton from './PressableButton';
import AntDesign from '@expo/vector-icons/AntDesign';

const GoalItem = ({goal, deleteGoalHandler, separators}) => {

  const navigation = useNavigation();

  function deleteGoal() {
    deleteGoalHandler(goal.id);
  }

  function showDetails() {
    navigation.navigate('Details', {goal: goal});
  }

  function handleLongPress() {
    Alert.alert(
      "Delete", // Title of the Alert
      "Are you sure you want to delete this item?", // Message in the Alert
      [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: deleteGoal, // Handle OK action
        },
      ],
      { cancelable: true } // Allows the user to dismiss the alert by tapping outside
    );
  }

  return (
    
    <View key={goal.id} style={styles.textBox}>
      <Pressable 
        onPress={() => {
          showDetails();
        }} 
        onPressIn={() => {separators.highlight();}}
        onPressOut={() => {separators.unhighlight();}}
        onLongPress={() => {
          handleLongPress();
        }}
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