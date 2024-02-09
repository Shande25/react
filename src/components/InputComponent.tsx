import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { InputColor } from '../commons/constantColor'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
interface InputProps{
    placeholder:string;
    name:string;
    isPassword?:boolean;
    hasIcon?:boolean;
    //metodo de captura el valor de input
    onChangeText:(name:string,value:string)=>void
    accionIcon?:()=>void;
}
export const InputComponent = ({placeholder,name,onChangeText,isPassword=false,hasIcon=false,accionIcon=()=>{}}:InputProps) => {
  return (
    <View>
    {(hasIcon)?<Icon style={styles.StyleIconEye}  name='visibility' size={20} color='black' OnPress={accionIcon}/>:null}
    <TextInput placeholder={placeholder} keyboardType={'default'} style={styles.inputText} onChangeText={(value:string)=>onChangeText(name,value)} secureTextEntry={isPassword}/>
    </View>
    )
}

const styles=StyleSheet.create({
    inputText:{
        borderRadius:5,
        backgroundColor:InputColor,
        marginVertical:10,
        paddingHorizontal:10
    },StyleIconEye:{
        position:'absolute',
        right:15,
        zIndex:1,
        marginTop:25
        
    }
})
