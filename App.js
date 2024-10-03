import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Alert, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';


import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
 
  
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
