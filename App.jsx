import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

