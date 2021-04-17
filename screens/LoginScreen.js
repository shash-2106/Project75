import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
constructor(){
    super();
    this.state={
        username:"",
        password:""
    }
}
userLogin=async(username,password)=>{
   try{
   const response = await firebase.auth().signInWithEmailAndPassword(username,password)
    if(response){
        this.props.navigation.navigate('Write');
    }
   }
   catch(error){
       alert(error.message);
   }

}
userSignUp=(username,password)=>{
    try{
    firebase.auth().createUserWithEmailAndPassword(username,password);
    this.props.navigation.navigate('Write');
    }
    catch(error){
        alert(error.message);
    }
}
    render(){
        return(
            <View>
                <TextInput style={styles.textBox} onChangeText={text=>{this.setState({username:text})}} placeholder="Enter email address" keyboardType='email-address'>

                </TextInput>
                <TextInput style={styles.textBox} onChangeText={text=>{this.setState({password:text})}} placeholder="Enter password" secureTextEntry={true}>

                </TextInput>
                <TouchableOpacity style={styles.login} onPress={()=>{this.userLogin(this.state.username,this.state.password)}}><Text>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.login} onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}><Text>Sign Up</Text></TouchableOpacity>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    textBox:{
        width:'60%',
        height:30,
        backgroundColor:'blue',
        borderWidth:3,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:5,
        alignSelf:'center',
        padding:10,
        margin:15,


    },
    login:{
        width:'50%',
        height:30,
        backgroundColor:'red',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:5,
        alignSelf:'center',
        padding:10,
        margin:15
    },
    text:{
        color:'white',

    }
})