import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	Keyboard,
	ScrollView,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonIOS} from '../../components'

export default class CreateAccount extends Component <Props> {

	constructor (props) {
		super(props);
		this.state = {};
    }

    render () {
    	return (
    		<ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems:'center'}} scrollEnabled={false}  onPress={Keyboard.dismiss}>
				<Text style={{fontSize:20, fontWeight:'bold', padding:10}}>Algo</Text>	 
 			</ScrollView>
    	);
    }
}
