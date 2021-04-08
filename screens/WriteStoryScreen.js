import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, Alert} from 'react-native';
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
        <KeyboardAvoidingView behavior="padding" enabled>
        <View>
            
                <TouchableOpacity  style={styles.box}>
       <Text style={styles.text}>Write title below</Text> 
       </TouchableOpacity>  

        <TextInput style={styles.inputBox,styles.text1}
        value={this.state.title}
        onChangeText={(text)=>(this.setState({
            title:text
        }))}
        >           
        </TextInput> 
        <TouchableOpacity style={styles.box}>
                <Text style={styles.text}> Author - write below</Text>
                </TouchableOpacity>

            <TextInput style={styles.inputBox,styles.text1}
            value={this.state.author}
            onChangeText={(text)=>{this.setState({
                author:text
            })}}
            >           
            </TextInput>
           
       
        <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>Write story below</Text>
            </TouchableOpacity>

        <TextInput style={styles.inputBox,styles.text1} multiline={true}
        value={this.state.story}
        onChangeText={(text)=>this.setState({
            story:text
        })
        }
        >
           
        </TextInput>
       
      
      
        <TouchableOpacity style={styles.button} onPress={()=>{this.submitStory()}}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
       
        
           
      
        </View>
        </KeyboardAvoidingView>
    )
}
submitStory=async()=>{
    
   db.ref("title").update({"title":this.state.title});
   db.ref("author").update({"author":this.state.author});
   db.ref("story").update({"story":this.state.story});
   var submitMessage = "Story and details submitted";
  ToastAndroid.show(submitMessage, ToastAndroid.SHORT);
        
}


}

const styles = StyleSheet.create({
    box:{
        width:'50%',
    backgroundColor:'black',
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    margin:10,
    borderRadius:5,
    height:50,
    alignItems:'center'
       
    },
    inputBox:{
       
       margin:10,
    borderWidth:5,
    height:100,
    width:300,
    alignItems:'center',
    alignSelf:'center',
    },
    text:{
        color:"white",
        justifyContent:'center',
       alignSelf:'center',
    
    },
    button:{
        backgroundColor:"blue",
        width:'45%',
        height:20,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:5,
        padding:10,
        margin:10,
        textAlign: 'center'
    },
    text1:{
        color:"black",
        justifyContent:'center',
       alignSelf:'center',
    }
})