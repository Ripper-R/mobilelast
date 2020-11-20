import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,FlatList,RefreshControl,ImageBackground,TouchableWithoutFeedback} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Button,Header,Icon} from 'react-native-elements'
import Axios from 'axios'
import {connect} from 'react-redux'
const key='ee626128a1f8191066f1db8b0f8781e6'

const HomeScreen=({navigation,Auth,props})=> {
    // const [product,setproduct]=useState([])
    // const [refresh,setrefresh]=useState(false)

    // const fetchdata= async ()=>{
    //     try {
    //         const {data} = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
    //             headers:{"user-key":key},
    //         })
    //         console.log(data)
    //         setproduct(data)
    //         setrefresh(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
        
    //     fetchdata()
    // },[])

    // const onTodetailsPress=(item)=>{
       
    //     props.navigation.navigate('Details',{data:item})
    // }
    // const RenderProduct=({item})=>{ //item sama dengan val di map
    //     console.log(item)
    //     return(
    //         <ImageBackground
    //                 source={{uri: item.url}}
    //                 style={{width:100}}
    //                 imageStyle={{borderRadius:5}}
    //             >
    //             <TouchableWithoutFeedback onPress={()=>onTodetailsPress(item)}>
    //                 <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.4)',flex:1}}>
    //                     <Text style={{color:'white',textTransform:'capitalize'}}>
    //                         {item.namaproduct}
    //                     </Text>
    //                 </View>
    //             </TouchableWithoutFeedback>
    //         </ImageBackground>
    //     )
    // }
    // const OnRefreshFlatlist=()=>{
    //     setrefresh(true)
        
    //     fetchdata()
    // }
  return (
    <View style={{ flex: 1 }}>
        <Header 
        leftComponent={{icon:'user' ,type:'feather'}}
        rightComponent={{text:'halo,'+ Auth.Name }}
        />
        <ScrollView>
        


      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',marginTop:10}}>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="creditcard"
                    type='ant-design'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>Credit</Text>
        </View>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="location"
                    type='entypo'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>location</Text>
        </View>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="pizza"
                    type='ionicon'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>Pizza</Text>
        </View>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="shopping-cart"
                    type='entypo'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>Cart</Text>
        </View>
      </View>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
      <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
            <Icon
           
            name="hamburger"
            type='font-awesome-5'
            size={30}
            
            color="black"
            iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
            />
        
       
        
        <Text>Burger</Text>
        </View>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="treehouse"
                    type='fontisto'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>About this</Text>
        </View>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="drink"
                    type='entypo'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>Drinks</Text>
        </View>
        <View style={{flex:2,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            
                    <Icon
                   
                    name="dots-three-horizontal"
                    type='entypo'
                    size={30}
                    
                    color="black"
                    iconStyle={{paddingLeft:10,paddingTop:10,borderRadius:25,width:50,height:50,borderColor:'black',borderWidth:2}}
                    />
                
               
                
                <Text>More</Text>
        </View>
        
      </View>

      <View style={{flex:1,marginTop:20}}>
           
            {/* <View style={{paddingHorizontal:10}}>
                <FlatList
                    data={product.restaurants}
                    keyExtractor={(item)=>`${item.id}`}//harsu string biar nggak warning
                    renderItem={RenderProduct}
                    showsVerticalScrollIndicator={false}
                    // onRefresh={OnRefreshFlatlist}
                    // refreshing={refresh}
                    refreshControl={<RefreshControl colors={['#FE6B8B','#FF8E53']} progressBackgroundColor={'white'} onRefresh={OnRefreshFlatlist} refreshing={refresh} />}
                />

            </View> */}
        </View>

    </ScrollView>
        </View>
  );
}
      const Mapstatetoprops=(state)=>{
        return{
            Auth:state.Auth
        }
      }
export default connect(Mapstatetoprops)(HomeScreen)