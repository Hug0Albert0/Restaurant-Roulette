import React, { Component } from 'react';
import{AppStack, AuthStack, createNavigator} from './routes'
import firebase from 'react-native-firebase'
import dbRef from './firebase'
import {AsyncStorage} from 'react-native'

export default class App extends Component {

	// async componentDidMount () {
	// try {
	// 	const value = await AsyncStorage.getItem('FCMToken');
	// 	if (value !== null) {
	// 		console.log("Value: ", value);
	// 	}
	// 	else {
	// 		firebase.messaging().getToken().then(async fcmToken => {
	// 			dbRef.child('tokens').push(fcmToken);
	// 			console.log("Pushed fcmToken: ",fcmToken);
	// 			try {
	// 				await AsyncStorage.setItem('FCMToken',fcmToken);
	// 			} catch (error) {
	// 				console.log('error',error);
	// 			}
	// 		});
	// 	}
	// } catch (error) {
	// 	console.log('error',error);
	// }
	// 	// firebase.messaging().onTokenRefresh(() => {
	// 	// 	firebase.messaging().getToken().then(async refreshedToken => {
	// 	// 		dbRef.child('tokens').push(refreshedToken);
	// 	// 		console.log("Pushed refreshed Token: ",refreshedToken);
	// 	// 		try {
	// 	// 		ss	await AsyncStorage.setItem('FCMToken',refreshedToken);
	// 	// 		} catch (error) {
	// 	// 			console.log('error',error);
	// 	// 		}
	// 	// 	})
	// 	// })
	// }

  render() {
  	const Stack = createNavigator()
    return (
      <Stack />
    );
  }
}
