import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Chat from './pages/Chat'

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer  >
            <Stack.Navigator screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }} >
                <Stack.Screen component={Login} name="Login" ></Stack.Screen>
                <Stack.Screen component={Home} name="Home" ></Stack.Screen>
                <Stack.Screen component={Contacts} name="Contatos" options={{
                    headerShown: true
                }} />
                <Stack.Screen component={Chat} name="Chat" options={{
                    headerShown: true
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}