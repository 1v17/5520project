import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { writeToDB } from "../firebase/FirebaseHelper";

const GoalUsers = ({ goalId }) => {
  useEffect(() => {
    async function fetchData() {
      // can't mark the useEffect callback as async,
      // so create an async function inside
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP error happend with status ${response.status}`);
        }
        const usersData = await response.json();
        const collectionName = `goals/${goalId}/users`;
        usersData.forEach((user) => {
          writeToDB(user, collectionName);
        });
        setUsers(usersData.map((user) => user.name));
      } catch (err) {
        console.log("Fetch user data", err);
      }
    }
    fetchData();
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default GoalUsers;
