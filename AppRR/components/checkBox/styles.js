import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
export default checkStyles = StyleSheet.create ({
 	main:{
 		flexDirection: 'row', 		
 		marginTop: 10,
 		marginBottom:10
 	},
 	box: {
 		borderWidth:1, 
 		borderColor: 'lightgray',
 		backgroundColor: 'white',
 	},
 	text : {
 		fontSize:15,
 		fontWeight:'bold',
 		paddingLeft:5,
 		width: 'auto'
 	}
});
