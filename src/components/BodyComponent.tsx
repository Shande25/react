import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Body_Color } from '../commons/constantColor';

export const BodyComponent = (props:any) => {
    const{height}=useWindowDimensions();
  return (
    <View style={{height:height*0.88, ...style.container}}>
        {props.children}
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:Body_Color,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:25,
        paddingVertical:25

    }
})
