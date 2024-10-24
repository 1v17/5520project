import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Alert, Dimensions, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import Header from './Header';
import Input from './Input';
import GoalItem from './Goalitem';
import PressableButton from './PressableButton';
import { writeToDB, deleteFromDB, deleteAllFromDB } from '../firebase/FirebaseHelper';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../firebase/FirebaseSetup';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({navigation, options}) {
  // console.log(database);
  const appName = 'Penny Lane';
  const collectionName = 'goals';
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function handleInputData(receivedData) {
    // console.log("App ", receivedData);
    let newGoal = {text: receivedData};
    writeToDB(newGoal, collectionName);

    setModalVisible(false);
    // setGoals((previousGoals) => {
    //   return [...previousGoals, newGoal]
    // });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, collectionName), (querySnapshot) => {
      let goalsArray = [];
      querySnapshot.forEach((docSnapshot) => {
        // console.log(docSnapshot.id, docSnapshot.data());
        goalsArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
      });
      setGoals(goalsArray);
    })
    return () => {
      unsubscribe(); // Detach the listener
    }
  }, []); // Set the database listener only once

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
    deleteFromDB(goalId, collectionName);
    // setGoals((previousGoals) => {
    //   return previousGoals.filter((goal) => {
    //     return goal.id !== goalId;
    //   });
    // });
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
          onPress: () => {
            deleteAllFromDB(collectionName);
          }, // Delete all goals
        },
      ],
      { cancelable: true } // Allows the user to dismiss the alert by tapping outside
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        
        <View style={styles.buttonContainer}>
          {/* <Button title="Add a goal" onPress={() => setModalVisible(true)} /> */}
          <PressableButton
            pressFunction={() => setModalVisible(true)}
            componentStyle={{backgroundColor: 'aliceblue'}}
          >
            <Text style={styles.buttonText}>Add a goal</Text>
          </PressableButton>
        </View>
      </View>
      <Input autoFocus={true} 
          inputHandler={handleInputData} 
          modalVisibile={modalVisible}
          cancelHandler={handleCancelButton}/>
      <View style={styles.bottomView}>
        <FlatList 
          data={goals} 
          renderItem={({item, separators}) => {
          return (
            <GoalItem 
              goal={item}
              deleteGoalHandler={handleDeleteGoal}
              separators={separators}
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
          ItemSeparatorComponent={({ highlighted }) => {
            return (
              <View 
                style={[styles.listSeparator, 
                  highlighted && {backgroundColor: 'coral'}]} 
              />
            );
          }}
        />
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
    marginVertical: windowHeight > 500 ? "5%": "1%",
    width: '30%',
  },
  topView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: windowHeight > 500 ? "10%": "1%",
    gap: windowHeight > 500 ? 0: 10,
    minHeight: 50,
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
  buttonText: {
    color: 'coral',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
