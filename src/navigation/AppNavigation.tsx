import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookScreen from '../views/BookScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Start'>
        <Tab.Screen name="Start" component={HomeStack} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="Book" component={BookScreen} options={{
          tabBarLabel: 'Booking',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  )
}

export default AppNavigation