
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'

let board = [];

const RANDOM_SHIP = 3;
const NBR_OF_ROWS = 4;
const NBR_OF_COLS = 4;
const START = 'plus';

const CIRCLE = 'circle';
const SHIP = 'warning';
let initialBoard = new Array(NBR_OF_ROWS * NBR_OF_COLS).fill(START);
let random = 1


export default function Gameboard() {

    function initializeBoard(){
        for (let i = 0; i <NBR_OF_ROWS * NBR_OF_COLS; i++){
            board[i] = START;
        }

    }
    
    const[isCross, setCross] = useState(true);
    const[isCircle, setCircle] = useState(true);
    const[isShip, setShip] = useState(true);
    
    const[winner, setWinner] = useState("");
    const[board, setBoard] = useState(initialBoard);

   function drawItem(number){

       if (board[number]==START ){
           board[number] =  CIRCLE;
           (isCircle)
         
         
        
          


       }else if (board[number]=== SHIP)  {
        board[number] = SHIP;
      
      
      }else{
        Alert.alert("Game over.")
        
      }


   }
   function chooseItemColor(number){
     if (board[number] === CIRCLE){
       return "#FF3031"

     }
     else if  (board[number] === SHIP){
      return "#FF3031"
     }
     else{
       return "black"
     }

     
     
  

  
}
function randomNumbers(){


let random = 0;
for (let i = 0; i <RANDOM_SHIP; i++){

  board[i] = SHIP;
  board.sort(() => Math.random() - 0.5);
 
  
}





}

    



    function WinGame(){
      return ""
       
    } 
    function resetGame(){
     
      setWinner('');
      let initialBoard = [...board];
      initialBoard = new Array (NBR_OF_COLS * NBR_OF_ROWS).fill(START);
      setBoard(initialBoard);

    }
    const items = [];
for (let x = 0; x < NBR_OF_ROWS; x++ ){
  const cols = [];
  for (let y = 0; y < NBR_OF_COLS; y++){
    cols.push(
      <Pressable
      key={ x * NBR_OF_COLS +  y}
      style={StyleSheet.item}
      onPress={() => drawItem(x * NBR_OF_COLS + y)}>

<Entypo
key={x * NBR_OF_COLS + y}
name={board[x* NBR_OF_COLS + y]}
size={32}
color={chooseItemColor(x* NBR_OF_COLS + y)}/>
      </Pressable>
    );
  }
  let row=
  <view key={"row" + x}>
    {cols.map((item) => item)}
  </view>
  items.push(row);
}


    
  return (
    <View style={styles.gameboard}>
      <View style={styles.flex}>{items}</View>
     
      <Pressable style={styles.buttonText} onPress={()=>resetGame()}>
        <button>Reset game</button>
     
      </Pressable>
      
      <Pressable style={styles.buttonText} onPress={()=>randomNumbers()}>
        <button>Place the Battleships</button>
     
      </Pressable>
      
    
    </View>
  )
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
},
selected: {
  backgroundColor:'green'
}
});
