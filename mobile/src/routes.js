import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Appstack = createStackNavigator()

import Incidents from './pages/incidents'
import Detail from './pages/detail'

export default function Routes(){
    return(
        <NavigationContainer >
            <Appstack.Navigator screenOptions={{headerShown: false}} >
                <Appstack.Screen name="incidents"component={Incidents} />
                <Appstack.Screen name="Detail"component={Detail} />
            </Appstack.Navigator>
        </NavigationContainer>
    )
}