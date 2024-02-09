import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions} from 'react-native'
// indica propiedades de nuestro componente reutilizable
interface TitleProps{
    title:string;

}
export const TitleComponent = ({title}:TitleProps) => {
const {height}=useWindowDimensions();
  return (
        <Text style={{height:height*0.12,...styles.title}}>{title}</Text>
)
}
const styles=StyleSheet.create({
    title:{
        fontSize:27,
        color:'white',
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:30,
    }
});
