import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class WriteStoryScreen extends React.Component{
render(){
    return(
        <View>
            
                <TouchableOpacity  style={styles.box}>
       <Text style={styles.text}>Title</Text>
        <TextInput style={styles.inputBox}>
           
        </TextInput>
        </TouchableOpacity>
       
        
            <TouchableOpacity style={styles.box}>
                <Text style={styles.text}> Author</Text>
            <TextInput style={styles.inputBox}>
           
            </TextInput>
            </TouchableOpacity>
       
        <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>Write story</Text>
        <TextInput style={styles.inputBox} multiline={true}>
           
        </TextInput>
        </TouchableOpacity>
      
      
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      
        </View>

    )
}
}
const styles = StyleSheet.create({
    box:{
        width:'50%',
    backgroundColor:'black',
    alignContent:'CENTER',
    justifyContent:'CENTER',
    alignSelf:'CENTER',
    margin:10,
    borderRadius:5,
    height:50,
    alignItems:'CENTER'
       
    },
    inputBox:{
        width:'50%',
    backgroundColor:'black',
    alignContent:'CENTER',
    justifyContent:'CENTER',
    alignSelf:'CENTER',
    margin:10,
    borderRadius:5,
    height:30,
    alignItems:'CENTER'
    },
    text:{
        color:"white",
        justifyContent:'CENTER',
       alignSelf:'CENTER',
    
    },
    button:{
        backgroundColor:"blue",
        width:'45%',
        height:20,
        justifyContent:'CENTER',
        alignSelf:'CENTER',
        alignItems:'CENTER',
        alignContent:'CENTER',
        borderRadius:5,
        padding:10,
        margin:10,
        textAlign: 'CENTER'
    }
})