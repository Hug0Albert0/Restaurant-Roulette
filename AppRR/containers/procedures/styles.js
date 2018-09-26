import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
export default listStyles = StyleSheet.create ({
  
  titleList:{
    backgroundColor:'#00BA00',
    width: '100%',
    padding:5
  },

  textTitleList: {
    fontSize: 20 , 
    fontWeight:'bold', 
    color: 'white'
  },

  itemList: {
     backgroundColor:'white',
      width:'100%',
      padding:15,
      borderTopWidth: 1,
      borderColor: 'lightgray'
  },

  textItemList : {
    fontSize: 18
  } 
});
