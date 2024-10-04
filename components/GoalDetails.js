import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';

const GoalDetails = ({navigation, route}) => {
  
const [isWarning, setIsWarning] = React.useState(false);

useEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Warning"
        color="coral"
        onPress={handleWarningPress}
      />
    ),
  });
}, []);

function handleWarningPress() {
  setIsWarning(true); // Activate warning mode
  navigation.setOptions({ title: "Warning!", headerTintColor: 'red' });
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
});

export default GoalDetails