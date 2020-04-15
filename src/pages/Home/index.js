import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import Conversations from '../Conversations'
import Profile from '../Profile'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Home() {

  return (
      <Tab.Navigator initialRouteName="Conversation" 
        screenOptions={ ({route}) => ({
          tabBarIcon: ( {focused, color, size} ) => {
            let iconName;

            if (route.name === 'Conversas') {
              iconName = 'wechat'
              return <FontAwesome name ={iconName} size={size} color={color} />
            } else if (route.name === 'Perfil') {
              iconName = 'face-profile'
              return <MaterialCommunityIcons name ={iconName} size={size} color={color} />
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: '#F05944',          
          inactiveTintColor: 'gray',
        }}
      >  
        <Tab.Screen name="Conversas" component={Conversations} >
        
        </Tab.Screen>
        <Tab.Screen name="Perfil" component={Profile} >
        </Tab.Screen>
      </Tab.Navigator>
  );
}