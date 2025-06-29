import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CarouselScreen from '../screens/FirstScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTab  from '../screens/BottomTab'
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';
import LogOut from '../components/LogOut';
import Genre from '../screens/Genre';
import Camera from '../screens/Camera';
import HomePage from '../screens/HomePage';
import PlayVideo from '../components/PlayVideo';
import HomeDrawer from '../screens/HomeDrawer';
import DummyDrawer from '../screens/DummyDrawer';
import Notification from '../screens/Notification';
import Search from '../screens/Search';
import VideoDetailScreen from '../screens/VideoDetailScreen';
import DownloadedVideo from '../screens/DownloadedVideo';


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
    <Stack.Screen name='SplashScreen'component={SplashScreen} options={{headerShown:false}}/>
     
    {/* <Stack.Screen name='FirstScreen'component={CarouselScreen} /> */}
        {/* <Stack.Screen name='LogOut'component={LogOut} /> */}
            {/* <Stack.Screen name='BottomTab'component={BottomTab} /> */}

                <Stack.Screen name='Genre'component={Genre} />
                <Stack.Screen name='Camera'component={Camera} />
                <Stack.Screen name='HomePage'component={HomePage} />

                {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer}/> */}

                <Stack.Screen name='PlayVideo' component={PlayVideo} />
                {/* <Stack.Screen name='DummyDrawer'component={DummyDrawer}  options={{ headerShown: false }}/> */}
                <Stack.Screen name='Notification' component={Notification} />
                 <Stack.Screen name='Search' component={Search} />
                 <Stack.Screen name='VideoDetailScreen' component={VideoDetailScreen} />
                 <Stack.Screen name='DownloadedVideo' component={DownloadedVideo} />

   </Stack.Navigator>
        )
        :
        
        (

       <Stack.Navigator >

    <Stack.Screen name='SplashScreen'component={SplashScreen} options={{headerShown:false}}/>
    
    {/* <Stack.Screen name='FirstScreen'component={CarouselScreen} /> */}
    <Stack.Screen name='BottomTab'component={BottomTab} />
    <Stack.Screen name='LogOut'component={LogOut} />
    <Stack.Screen name='Genre'component={Genre} />
    <Stack.Screen name='Camera'component={Camera} />
    <Stack.Screen name='HomePage'component={HomePage} />
     <Stack.Screen name='PlayVideo'component={PlayVideo} />
      <Stack.Screen name='Search' component={Search} />

   </Stack.Navigator>

        )



  )
}

export default AppNavigation