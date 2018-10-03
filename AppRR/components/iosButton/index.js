import React, {Component} from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import btnStyles from './styles'

export default class ButtonIOS extends Component <Props> {

	render () {
		const {onPress, value, disabled, fontSize, colorcito,ancho} = this.props
		return (
			<TouchableOpacity disabled={disabled} onPress={onPress} style={[btnStyles.main,{opacity: disabled ? 0.4 : 1 , backgroundColor:colorcito, width:ancho}]}>
				<Text style={[btnStyles.text,{fontSize:fontSize}]}>{value}</Text>
			</TouchableOpacity>
		)
	}

}

ButtonIOS.defaultProps = {
	fontSize: 18,
	colorcito: 'green',
	width:'100%'
}
