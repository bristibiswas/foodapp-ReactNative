import { View, Text , Image} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import imagePath from "./Constant/imagePath";

import Main from "./Drawer/Main";


const AppNavigation = () => {
  const Stack = createStackNavigator();
  
    const Tab = createBottomTabNavigator();


  return (
      <NavigationContainer className="bg-white">
        
     
    <Tab.Navigator initialRouteName={Home}>
    <Tab.Screen name="Home" component={Home} 
    options={{
      tabBarIcon:({focused}) => {
        return(

                <Image source={imagePath.icHome}
                style={{height:30,width:30}}

                />
        )
      }
    }}
    />
    <Tab.Screen name="About" component={About}
        options={{
          tabBarIcon:({focused}) => {
            return(
    
                    <Image source={imagePath.icAbout}
                    style={{height:30,width:30}}
    
                    />
            )
          }
        }}
    
    />
  </Tab.Navigator>

  </NavigationContainer>
  );
};

export default AppNavigation;
