import { View, Text } from 'react-native'
import React from 'react'

const GoalDetails = ({navigation, route}) => {
  // console.log(route.params);
  return (
    <View>
      <Text>Goal: {route.params.goal.text}</Text>
    </View>
  )
}

export default GoalDetails