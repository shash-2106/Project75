import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Flatlist, FlatList} from 'react-native';
import db from '../config';

export default class ReadStoryScreen extends React.Component{
   constructor(){
       super();
       this.state={
           search:"",
           allStories:[],
           dataSource:[]
       }
   }
  

    render(){
        return(
            <View>
                <Text style={styles.heading}>Read Story</Text>
          <TextInput
          style={styles.caption}
          placeholder="Type here..."
          onChangeText={(text)=>{this.setState({
              search:text
          })}}>
            

          </TextInput>
          <TouchableOpacity style={styles.searchBox} onPress={()=>{this.retrieveStories()}}>
            <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
       <FlatList data = {this.state.allStories}
       renderItem={({item})=>(
           <View style={{borderBottomWidth:2}}>
               <Text>{"title :"+" "+item.title}</Text>
               <Text>{"author :"+" "+item.author}</Text>
              
           </View>
       )}
       keyExtractor={(item,index)=>index.toString()}
       />
            </View>
        )
      
    }
    retrieveStories=async()=>{
       
         
        var document = "HkF9bU169F9lfrXRhW9h";
    const query = await db.collection("books").where("title","==",this.state.search).get();
    query.docs.map(doc=>{
        this.setState({
         allStories:[...this.state.allStories, doc.data()],
    
        })
    })

    }

}
const styles = StyleSheet.create({
    caption:{
        fontSize:30,
        alignSelf:'center',
        justifyContent:'center',
        padding:20,
        margin:20,
        
    },
    searchBox:{
        
        alignSelf:'center',
        justifyContent:'center',
        padding:20,
        margin:20,
        color:'blue',
        alignItems:'center',
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
    searchText:{
        color:"white",
        justifyContent:'center',
       alignSelf:'center',
    
     
        
    },
    heading:{
        alignSelf:'center',
       
        color:'black',
        fontSize:30
        
    },
    
});
