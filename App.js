
import React from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Gameboard from './components/gameboard';
import Entypo from '@expo/vector-icons/Entypo'



export default function App() {

  return (
    <View style={styles.container}>
   
      <Header/>
    
     <Gameboard/>
     <Footer/>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
footer: {
marginTop: 20,
backgroundColor: 'skyblue',
flexDirection: 'row'
},
title: {
color: '#fff',
fontWeight: 'bold',
flex: 1,
fontSize: 23,
textAlign: 'center',
margin: 10,
},
author: {
color: '#fff',
fontWeight: 'bold',
flex: 1,
fontSize: 15,
textAlign: 'center',
margin: 10,
},
gameboard: {
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center'
},


item: {
margin: 15,
padding: 5
},
flex: {
flexDirection: "row"
},
button: {
margin: 30,
flexDirection: "row",
padding: 10,
backgroundColor: "#73CED6",
width: 150,
borderRadius: 15,
justifyContent: 'center',
alignItems: 'center'
},
buttonText: {
color:"#2B2B52",
fontSize: 20
}
});



