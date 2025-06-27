import { View, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
const navigation =useNavigation();
useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('BottomTab'); // Replaces SplashScreen with FirstScreen
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);



  return (
    
    <View style={styles.container}>
     
    <Image source={require('../../assets/logo.png')}/>
    </View>
  )
}

export default SplashScreen

const styles=StyleSheet.create({
  container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
    backgroundColor:'#757575',
  }
})