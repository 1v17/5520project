import { View, Text, Button } from 'react-native'
import React from 'react'

const GoalDetails = ({navigation, route}) => {
  // console.log(route.params);
  return (
    <View>
      {route.params ? // conditional rendering when route.params is not undefined
      <Text>Goal: {route.params.goal.text}</Text> :
      <Text>No goal selected</Text>
      }
      <Button 
        title="More Details"
        onPress={() => {navigation.push('Details')}} // TODO: move the button of warning here
      />
    </View>
  )
}

export default GoalDetails