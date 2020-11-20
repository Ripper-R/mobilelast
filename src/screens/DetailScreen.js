import React,{useState,useRef} from 'react';
import {
    View,
    Text,
 
    ImageBackground,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'




const DetailScreen=({navigation,route})=>{

    // const [loading,setloading]=useState(false)
   

   
    // const {name,featuredimage,user_rating,location,cuisines,timings}=route.params.data
    

    // const renderHeader = () => (
    //     <View style={styles.header}>
    //       <View style={styles.panelHeader}>
    //         <View style={styles.panelHandle} />
    //       </View>
    //     </View>
    // )

    // const renderContent = () => (
    //     <View
    //       style={{
    //         backgroundColor: 'white',
    //         padding: 16,
    //         height: 300,
    //       }}
    //     >
    //         <Input
    //             placeholder='berapa orang'
    //             keyboardType='numeric'
    //             value={qty}
    //             onChangeText={(text)=>setqty(text)}

    //         />
    //          <Button
    //             ViewComponent={LinearGradient}
    //             style={{
    //                 paddingVertical:5
    //             }}
    //             linearGradientProps={{
    //                 useAngle:true,
    //                 angle:45,
    //                 locations:[0.3,0.9],
    //                 colors:['#FE6B8B','#FF8E53']
    //             }}
    //             title='Add to cart'
    //             onPress={AddtoCart}
    //             loading={loading}
    //         />
    //     </View>
    // );

    

    // const sheetRef = React.useRef(null);

    // const fall = new Animated.Value(1)
    
  

    return(
        <>
        <Text>
            a
        </Text>
            {/* <TouchableWithoutFeedback  onPress={()=>sheetRef.current.snapTo(1)}>
                <Animated.View
                    style={{flex:1,backgroundColor:'white',opacity: Animated.add(0.1, Animated.multiply(fall, 0.9))}}
                >
                    <ImageBackground 
                        source={{uri: API_URL+banner}}
                        style={{flex:2}}
                        imageStyle={{resizeMode:'cover'}}
                    >
                        <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                            <View style={{alignSelf:'flex-start',marginLeft:20,marginTop:10,backgroundColor:'rgba(161, 153, 135, 0.58)',borderRadius:70}}>
                                <Icon
                                    name='arrowleft'
                                    type='antdesign'
                                    color='white'
                                    size={30}
                                    style={{fontWeight:'bold'}}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                    <View style={{flex:2,paddingHorizontal:10,paddingTop:20}}>
                        <Text style={{fontSize:20,color:'black',marginVertical:5,textTransform:'capitalize'}}>{name} </Text>
                        <Text style={{fontSize:20,color:'#FF8E53',marginVertical:5}}>rating :{user_rating} </Text>
                        <Text style={{marginVertical:5}} >location :{location}</Text>
                        <Text style={{fontSize:20,color:'#FF8E53',marginVertical:5}}>cuisines:{cuisines} </Text>
                        <Text style={{marginVertical:5}} >open : {timings}</Text>

                        {/* <Text style={{fontSize:20,color:'#FF8E53',marginVertical:5}}>Jumlah orang </Text>
                        <Input
                            placeholder='berapa orang'
                            keyboardType='numeric'
                        /> */}
                        {/* <Button
                            ViewComponent={LinearGradient}
                            style={{
                                paddingVertical:5
                            }}
                            linearGradientProps={{
                                useAngle:true,
                                angle:45,
                                locations:[0.3,0.9],
                                colors:['#FE6B8B','#FF8E53']
                            }}
                                title='Fill Quantity'
                                onPress={()=>sheetRef.current.snapTo(0)}
                            />
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[300, 0]}
                borderRadius={10}
                initialSnap={1}
                renderContent={renderContent}
                renderHeader={renderHeader}
                callbackNode={fall}
                
            /> */} 
        </>
    )
}
const styles=StyleSheet.create({
    header: {
        backgroundColor: 'white',
        shadowColor: '#000000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    }
})

export default DetailScreen