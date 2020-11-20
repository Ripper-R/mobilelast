import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen  from './../screens/HomeScreen'
import DetailScreen from'./../screens/DetailScreen'

const Ausio=createStackNavigator()

const AuthStack=()=>{
   return(
       <Ausio.Navigator headerMode='none'>
           <Ausio.Screen name='Homesc' component={HomeScreen}/>
           <Ausio.Screen name='Details' component={DetailScreen}/>

       </Ausio.Navigator>

   )
   
}

export default AuthStack 