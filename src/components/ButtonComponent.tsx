import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Primary_Color } from '../commons/constantColor'
interface ButtonProps{
    title:string;
    OnPress:()=>void;
}
export const ButtonComponent = ({title,OnPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={style.buttonContiner} onPress={OnPress}>
        <Text style={style.buttoText}>{title}</Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    buttonContiner:{
        backgroundColor:Primary_Color,
        paddingVertical:17,
        borderRadius:10,
    },buttoText:{
        textAlign:'center',
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    }
})