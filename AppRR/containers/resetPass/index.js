import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	Keyboard,
	ScrollView,
	Image,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBoxIOS,ButtonIOS} from '../../components'

export default class ResetPass extends Component <Props> {

	constructor (props) {
		super(props);
		this.state = {};
    }

    render () {
    	return (
    		<ScrollView contentContainerStyle={{flex: 1, width:'100%', justifyContent: 'space-evenly', alignItems:'center'}} scrollEnabled={false}  onPress={Keyboard.dismiss}>
				<Image source={require('../../assets/logoitvh.png')} style={{width:120, height:150}}/>
				<Text style={{fontSize:25, fontWeight:'bold', marginBottom:15}}>Olvidaste tu Password?</Text>
				<Text style={{textAlign:'center',fontSize:15}}>Necesitamos el email que registraste para enviarte instrucciones de cambio de password</Text>
				<TextInput style={{fontSize:20, marginBottom:15,marginTop:15, width: '90%', borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,borderColor: Platform.OS === 'ios' ? 'lightgray': 'transparent'}}keyboardType='email-address' placeholder='Correo Electronico'></TextInput>
				<View style={{width: '90%'}}>					
					<ButtonIOS onPress={()=> {}} value="Recuperar"/>
				</View>
			</ScrollView>
    	);
    }
}