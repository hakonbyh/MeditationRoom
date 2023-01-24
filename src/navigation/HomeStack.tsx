import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import CardComponent from '../components/CardComponent';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActivitiesScreen from '../views/ActivitiesScreen';
import MeditationScreen from '../views/MeditationScreen';
import MusicScreen from '../views/MusicScreen';
import ScentScreen from '../views/ScentScreen';
import HomeScreen from '../views/HomeScreen';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Scents" component={ScentScreen} />
        <Stack.Screen name="Meditation" component={MeditationScreen} />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack