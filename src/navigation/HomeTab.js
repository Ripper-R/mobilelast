import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import AuthHome from './AuthHome'
import Logouts from './../screens/LogoutScreen'
import {View} from 'react-native'
const Tab=createBottomTabNavigator()

function HomeTabby(){
    return(
        <Tab.Navigator 
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let type;
                if (route.name === 'Home') {
                    iconName = focused? 'home': 'home';
                    type='feather'
                } else if (route.name === 'Logout') {
                    iconName = focused ? 'power' : 'power';
                    type='feather'
                }
                  return (
                        <View style={{
                            marginTop:-40,
                            backgroundColor:'gray',
                            height:60,
                            width:60,
                            padding:10,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:30,    
                            borderWidth:5,
                            borderColor:'white',
                            shadowColor:'black',
                            shadowOffset:{
                                width:10,
                                height:100
                            },
                            elevation:7,
                            shadowRadius:50
                        }}>
                          <Icon name={iconName} type={type} size={size}  color={color} />
                        </View>
                  )
            },
            tabBarLabel:({focused,color})=>{
                // You can return any component that you like here!
                return null
            }
        })}
        tabBarOptions={{
            inactiveTintColor:'white',
            activeTintColor:'black'
        }}
    >
            <Tab.Screen name='Home' component={AuthHome}/>
            <Tab.Screen name='Logout' component={Logouts}/>
        </Tab.Navigator>
    )

}
export default HomeTabby