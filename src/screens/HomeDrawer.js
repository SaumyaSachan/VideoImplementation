import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomePage from './HomePage'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="HomePage" component={HomePage}/>
    </Drawer.Navigator>
  )
}

export default HomeDrawer