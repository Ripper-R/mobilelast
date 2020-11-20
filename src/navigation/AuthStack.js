import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './../screens/LoginScreens'

const Aus=createStackNavigator()

const AuthStack=()=>{
   return(
       <Aus.Navigator headerMode='none'>
           <Aus.Screen name='LOGIN' component={LoginScreen}/>
       </Aus.Navigator>

   )
   
}

export default AuthStack 