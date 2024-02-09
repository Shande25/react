import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { Primary_Color } from '../commons/constantColor'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler'

interface LoginForm{
  user:string;
  password:string;
}
export const LoginScreen = () => {
  //Hook - control de los datos en el form
  const [form,setform] =useState<LoginForm>({
  user:'',
  password:''
});
const [numero, setNumero] = useState(0)
//Hoohk -desemcriptar la contraseña
const [hiddenpassword, sethiddenPassword]= useState(true);
//Funcion que cambie el valor de useState
const handlerChangeText=(name:string, value:string)=>{
  // console.log(name);
  // console.log(value);
  setform(prevState=>({
  ...prevState,[name]:value
  }))
}
//Funcion que envie los datos del formulario
const hanlderSendInfo=()=>{
  console.log(form)
  console.log(numero) 
}
  return (
    <View>
        <StatusBar backgroundColor={Primary_Color}/>
        <TitleComponent   title='Sign In'/>
        <BodyComponent>
        <Text style={styles.Welcome}>Welcome Back !</Text>
          <Text style={styles.keep}>To keep connected with us please login with your personal info</Text>
           <View style={styles.containerInput}>
           <InputComponent placeholder='Email Adress' name='username' onChangeText={handlerChangeText}/>
           <InputComponent placeholder='Password' name='password' onChangeText={handlerChangeText} isPassword={true} hasIcon={true} accionIcon={()=>sethiddenPassword(!hiddenpassword)} />
           <TextInput placeholder='numero' keyboardType='default'onChangeText={(numero:string)=>setNumero(parseInt(numero))}/>
           </View>
           <View>
           <ButtonComponent title='Sign In' OnPress={hanlderSendInfo}/>
           </View>
        </BodyComponent>
        
    </View>
  )
}

const styles=StyleSheet.create({
  Welcome:{
  fontSize:27,
  color:'black',
  fontWeight:'bold',
  paddingHorizontal:0,
  paddingVertical:0,
  },keep:{
  fontSize:15,
  width:'90%',
  paddingVertical:5,
  },containerInput:{
    marginVertical:5
  }
})

