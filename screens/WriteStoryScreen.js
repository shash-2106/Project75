import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
    
    constructor(){
        super();
        this.state={
            title:"",
            author:"",
            story:""
        }
    }
render(){
    return(
        <View>
            
                <TouchableOpacity  style={styles.box}>
       <Text style={styles.text}>Title</Text>
        <TextInput style={styles.inputBox,styles.text}
        value={this.state.title}
        onChangeText={(text)=>(this.setState({
            title:text
        }))}
        >
           
        </TextInput>
        </TouchableOpacity>
       
        
            <TouchableOpacity style={styles.box}>
                <Text style={styles.text}> Author</Text>
            <TextInput style={styles.inputBox,styles.text}
            value={this.state.author}
            onChangeText={(text)=>{this.setState({
                author:text
            })}}
            >
           
            </TextInput>
            </TouchableOpacity>
       
        <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>Write story</Text>
        <TextInput style={styles.inputBox,styles.text} multiline={true}
        value={this.state.story}
        onChangeText={(text)=>this.setState({
            story:text
        })
        }
        >
           
        </TextInput>
        </TouchableOpacity>
      
      
        <TouchableOpacity style={styles.button} onPress={()=>{this.submitStory()}}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      
        </View>

    )
}
submitStory=async()=>{
   db.ref("title").update({"title":this.state.title});
   db.ref("author").update({"author":this.state.author});
   db.ref("story").update({"story":this.state.story});
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