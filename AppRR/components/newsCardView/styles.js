import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
export default cardStyles = StyleSheet.create ({
  card:{
    backgroundColor: "white",
    width: '95%',
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: 'green',
    marginTop: 10,
    padding:15  
  },

  titleData: {
    fontSize:25,
    fontWeight: 'bold',
    color: 'black'
  },

   dateData: {
    fontSize:14,
    fontStyle:'italic', 
  },

   dateBoldData: {
    fontSize:15,
    fontWeight:'bold'

  },

  content: {
     textAlign: 'left'
  }

});
