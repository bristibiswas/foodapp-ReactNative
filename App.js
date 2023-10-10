import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View , Image} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Components/Home';
import About from './src/Components/About';
import imagePath from './src/Constant/imagePath';
import AppNavigation from './src/AppNavigation';

function App() {

  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();


  return (
    
  //   <NavigationContainer className="bg-white">
     
  //   <Tab.Navigator initialRouteName={Home}>
  //   <Tab.Screen name="Home" component={Home} 
  //   options={{
  //     tabBarIcon:({focused}) => {
  //       return(

  //               <Image source={imagePath.icHome}
  //               style={{height:30,width:30}}

  //               />
  //       )
  //     }
  //   }}
  //   />
  //   <Tab.Screen name="About" component={About}
  //       options={{
  //         tabBarIcon:({focused}) => {
  //           return(
    
  //                   <Image source={imagePath.icAbout}
  //                   style={{height:30,width:30}}
    
  //                   />
  //           )
  //         }
  //       }}
    
  //   />
  // </Tab.Navigator>
  // </NavigationContainer>
  <AppNavigation/>

  );
};

export default App;


