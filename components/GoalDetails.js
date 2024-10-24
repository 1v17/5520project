import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import PressableButton from './PressableButton';
import GoalUsers from './GoalUsers';
import { updateDB } from '../firebase/FirebaseHelper';

const GoalDetails = ({navigation, route}) => {
  
const [isWarning, setIsWarning] = React.useState(false);
const collectionName = 'goals';

useEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <PressableButton
        pressFunction={handleWarningPress}
        componentStyle={styles.warningButton}
      >
        <AntDesign name="warning" size={24} color='red'/>
      </PressableButton>
    ),
  });
}, []);  // Empty array ensures that the effect is only run once

function handleWarningPress() {
  setIsWarning(true); // Activate warning mode
  navigation.setOptions({ title: "Warning!"});
  updateDB(route.params.goal.id, {warning: true}, collectionName);
}

  return (
    <View>
      {route.params ? // conditional rendering when route.params is not undefined
      <Text style={[styles.text, isWarning && styles.warningText]} >Goal: {route.params.goal.text}</Text> :
      <Text style={[styles.text, isWarning && styles.warningText]} >No goal selected</Text>
      }
      <Button 
        title="More Details"
        onPress={() => {navigation.push('Details')}}
        color={isWarning ? 'red' : 'royalblue'}
      />
      <GoalUsers 
        goalId={route.params.goal.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'royalblue',
  },
  warningText: {
    color: 'red',
  },
  warningButton: {
    backgroundColor: 'royalblue',
  }
});

export default GoalDetails