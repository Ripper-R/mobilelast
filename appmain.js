import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './src/navigation/HomeTab'
import {connect} from 'react-redux'
import {Login} from './src/redux/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashScreen from './src/screens/SplashScreen'
import AuthStack from './src/navigation/AuthStack'


const AppMain= (props) => {

  const [loading,setloading]=useState(true)

  useEffect(()=>{
    
    AsyncStorage.getItem('Name')
    .then((value)=>{
      console.log(value)
      if(value !==null){
        props.Login(value)
        // setloading(false)
      }
    }).catch(()=>{
        // setloading(false)
    }).finally(()=>{
      setloading(false)
    })
  },[])//component didmout




  if(loading){
    return(
      <SplashScreen/>
    )
  }
  console.log(props.Auth.islogin)
  return (
    <>
      <NavigationContainer>
        {
            props.Auth.islogin?
            <HomeTab/>
            :
            <AuthStack/>
        }
      </NavigationContainer>
    </>
  );
};

const Mapstatetoprops=(state)=>{
    return{
        Auth:state.Auth
    }
}
export default connect(Mapstatetoprops,{Login})(AppMain);