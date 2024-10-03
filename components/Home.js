import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Alert, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

import Header from './Header';
import Input from './Input';
import GoalItem from './Goalitem';

export default function Home({navigation}) {
  const appName = 'Penny Lane';
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function handleInputData(receivedData) {
    // console.log("App ", receivedData);
    let newGoal = {text: receivedData, id: Math.random()};

    setModalVisible(false);
    setGoals((previousGoals) => {
      return [...previousGoals, newGoal]
    });
  }

  function handleCancelButton() {
    Alert.alert(
      "Confirm Action", // Title of the Alert
      "Are you sure you want to cancel?", // Message in the Alert
      [
        {
          text: "Cancel",
          style: "cancel", 
        },
        {
          text: "OK",
          onPress: () => setModalVisible(false), // Handle OK action
        },
      ],
      { cancelable: true } // Allows the user to dismiss the alert by tapping outside
    );
  }

  function handleDeleteGoal(goalId) {
    setGoals((previousGoals) => {
      return previousGoals.filter((goal) => {
        return goal.id !== goalId;
      });
    });
  }
  
  function handleDeleteAll() {
    Alert.alert(
      "Confirm Action", // Title of the Alert
      "Are you sure you want to delete all goals?", // Message in the Alert
      [
        {
          text: "No",
          style: "cancel", 
        },
        {
          text: "Yes",
          onPress: () => setGoals([]), // Delete all goals
        },
      ],
      { cancelable: true } // Allows the user to dismiss the alert by tapping outside
    );
  }

  function handleGoalDetails() {
    navigation.navigate('Details');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        
        <View style={styles.buttonContainer}>
          <Button title="Add a goal" onPress={() => setModalVisible(true)} />
        </View>
      </View>
      <Input autoFocus={true} 
          inputHandler={handleInputData} 
          modalVisibile={modalVisible}
          cancelHandler={handleCancelButton}/>
      <View style={styles.bottomView}>
        <FlatList 
          data={goals} 
          renderItem={({item}) => {
          return (
            <GoalItem 
              goal={item}
              deleteGoalHandler={handleDeleteGoal}
              goalDetailsHandler={handleGoalDetails}
            />
            );
          }}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.listPlaceHolder}>No goals to show</Text>
            );
          }}
          ListHeaderComponent={() => {
            return (
              goals.length > 0 && <Text style={styles.listTitle} >My goals</Text>
            );
          }}
          ListHeaderComponentStyle={styles.listTitleContainer}
          ListFooterComponent={() => {
            return (
              goals.length > 0 && <Button
                title="Delete All"
                onPress={handleDeleteAll}
                />
            );
          }}
          ListFooterComponentStyle={styles.listFooterContainer}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.listSeparator} />
            );
          }}
        />
        {/* <ScrollView contentContainerStyle={styles.contentContainer} >
          {goals.map((goal) => {
            return (
              <View key={goal.id} style={styles.textBox}>
                <Text style={styles.textInput}>{goal.text}</Text>
              </View>
              );
            })
          }
        </ScrollView> */}
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  listPlaceHolder: {
    // marginTop: 10,
    // textAlign: 'center',
    color: 'coral',
    fontSize: 20,
    padding: 10,
  },
  buttonContainer: {
    marginVertical: "5%",
    width: '30%',
  },
  topView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: "10%",
  },
  bottomView: {
    flex:4,
    // alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: 'aliceblue',
  },
  textBox: {
    backgroundColor: 'royalblue',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  listTitle: {
    color: 'coral',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  listTitleContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  listSeparator: {
    height: 2,
    backgroundColor: 'royalblue',
  },
  listFooterContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
});
