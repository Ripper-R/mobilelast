import React from 'react';
import {View,Text,Button} from 'react-native'
import {LOGOUT} from './../redux/actions'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
const OnLogOutpress= async ()=>{
    try{
        await AsyncStorage.removeItem('Name')
       LOGOUT()
    }catch(error){
        console.log(error)
    }
   }
const LogoutScreen=()=>{
    return(
      <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',flex:1}}>  
       <Button
       title='to logout'
       onPress={OnLogOutpress}
     />
 </View>
    )
}
export default connect(null,{LOGOUT}) (LogoutScreen)