import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CarouselScreen from '../screens/FirstScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTab  from '../screens/BottomTab'
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';
import HomeScreen from '../components/HomeScreen';
import Genre from '../screens/Genre';
import Camera from '../screens/Camera';
import HomePage from '../screens/HomePage';


const  Stack=createNativeStackNavigator();

const AppNavigation = () => {
      const [initializing, setInitializing] = useState(true);
      const [user, setUser] = useState(null);
    
      // Monitor auth state
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
          setUser(user);
          if (initializing) setInitializing(false);
        });
    
        return subscriber;
      }, []);
    
      if (initializing) return null;
    
  return (

    

        user ? (
                   <Stack.Navigator >

     
    {/* <Stack.Screen name='FirstScreen'component={CarouselScreen} /> */}
        {/* <Stack.Screen name='Home'component={HomeScreen} /> */}
            {/* <Stack.Screen name='BottomTab'component={BottomTab} /> */}
                <Stack.Screen name='Genre'component={Genre} />
                <Stack.Screen name='Camera'component={Camera} />
                <Stack.Screen name='HomePage'component={HomePage} />

   </Stack.Navigator>
        )
        :
        
        (

       <Stack.Navigator >

    <Stack.Screen name='SplashScreen'component={SplashScreen} options={{headerShown:false}}/>
    
    {/* <Stack.Screen name='FirstScreen'component={CarouselScreen} /> */}
    <Stack.Screen name='BottomTab'component={BottomTab} />
    <Stack.Screen name='Home'component={HomeScreen} />
    <Stack.Screen name='Genre'component={Genre} />
    <Stack.Screen name='Camera'component={Camera} />
    <Stack.Screen name='HomePage'component={HomePage} />
    

   </Stack.Navigator>

        )



  )
}

export default AppNavigation