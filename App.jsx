import 'react-native-reanimated';
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/screens/BottomTab';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (

    // <View>
    //   <Text>hello</Text>
    // </View>

    // <GestureHandlerRootView  style={{flex:1}}>
    <NavigationContainer > 
    
     
      <AppNavigation/>
      
    
     </NavigationContainer>

    //  </GestureHandlerRootView>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
     flex:1
  }
})

