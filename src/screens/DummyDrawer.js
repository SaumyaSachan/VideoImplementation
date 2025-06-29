// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text, StyleSheet } from 'react-native';

// const Drawer = createDrawerNavigator();

// // Dummy About screen
// const AboutScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.text}>This is the About Screen</Text>
//   </View>
// );

// // Dummy Contact screen
// const ContactScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.text}>This is the Contact Screen</Text>
//   </View>
// );

// // Drawer Navigator component
// const DummyDrawer = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="About" component={AboutScreen} />
//       <Drawer.Screen name="Contact" component={ContactScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default DummyDrawer;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#222',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

import 'react-native-reanimated';

import { View, Text, Settings } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NewHome from '../components/NewHome'
// import HelpSupport from './newScreenNavigation/HelpSupport'
// import Chats from './newScreenNavigation/Chats'
// import Setting from './newScreenNavigation/Setting'
// import { Image } from 'react-native';

const Drawer =createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator  
         screenOptions={{
            drawerActiveBackgroundColor:'#D6A0A9',
            drawerStyle:{
              backgroundColor:'#A34757',

          },
         }}>

            <Drawer.Screen name="newHome" component={NewHome} 
           
            options={{drawerIcon:
              ({size,focused})=>  {
              return( <Image  style={{width:size, height:size, tintColor:focused?'#240F13':'white'}} 
              
              source={require('../../assets/Intro1.png')}/>
              );
            },

            drawerLabel:({size,focused})=>{
              return (
                <Text  style={{color:focused?'#240F13':'white'}}>
                  {'newHome'}
                </Text>
              )
            }

            }} />

            {/* <Drawer.Screen name="Settings1" component={Setting}
             options={{drawerIcon:
              ({size,focused})=>  {
              return( <Image  style={{width:size, height:size, tintColor:focused?'#240F13':'white'}} 
              
              source={require('../../assets/images/settings.png')}/>
              );
            },
            drawerLabel:({size,focused})=>{
              return (
                <Text  style={{color:focused?'#240F13':'white'}}>
                  {'Settings1'}
                </Text>
              )
            }


            }} />

            <Drawer.Screen name="Chats" component={Chats} 
             options={{drawerIcon:
              ({size,focused})=>  {
              return( <Image  style={{width:size, height:size, tintColor:focused?'#240F13':'white'}} 
              
              source={require('../../assets/images/messenger.png')}/>
              );
            },


            drawerLabel:({size,focused})=>{
              return (
                <Text  style={{color:focused?'#240F13':'white'}}>
                  {'Chats'}
                </Text>
              )
            }
            }}
            />
            <Drawer.Screen name="HelpSupport" component={HelpSupport} 
             options={{drawerIcon:
              ({size,focused})=>  {
              return( <Image  style={{width:size, height:size, tintColor:focused?'#240F13':'white'}} 
              
              source={require('../../assets/images/question.png')}/>
              );
            },

            drawerLabel:({size,focused})=>{
              return (
                <Text  style={{color:focused?'#240F13':'white'}}>
                  {'HelpSuppor'}
                </Text>
              )
            }

            }}
            /> */}

         </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigator;
