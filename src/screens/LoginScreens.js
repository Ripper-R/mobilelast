import React, { useState } from 'react';
import {View,Text,Button,StatusBar} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Login} from './../redux/actions'
import {connect} from 'react-redux'
import {Icon} from 'react-native-elements'
import { Input } from 'react-native-elements';

const LoginSc=(props)=>{

    const [inputan,setinputan]=useState('')
    
    const OnLogin=async()=>{
        try{
           await AsyncStorage.setItem('Name', inputan)
            props.Login(inputan)

        }catch (error){

        }
    }
    
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <StatusBar backgroundColor="black"/>
            <View style={{flex:2,width:200,marginTop:10,justifyContent:'center',alignItems:'center',paddingTop:150}}>
            <Text style={{fontSize:30,color:'black'}}>TomatoApp</Text>
                <Icon name='fast-food' type='ionicon' size={75}/>

            </View>
           
            
            <View style={{flex:2,width:'80%'}}>

            <Input
            placeholder='Username'
            value={inputan}
            leftIcon={<Icon name='user' type='font-awesome' size={24}/>}
            onChangeText={(text)=>setinputan(text)}
            />
            <Button color='black' title='LOGIN'
            onPress={OnLogin}
            />
            </View>

            
        </View>
    )

}

export default connect(null,{Login})(LoginSc)