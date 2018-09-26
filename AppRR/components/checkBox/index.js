import React, {Component} from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import checkStyles from './styles'

export default class CheckBoxIOS extends Component <Props> {
	
	constructor (props){
		super(props)
		this.state={
			width: null
		}
		this.handleLayout = this.handleLayout.bind(this)
	}

	render () {		
		return (
			<TouchableOpacity onLayout={this.handleLayout} onPress={this.props.onPress} style={[checkStyles.main, this.state.width && {width: this.state.width}]}>
				<View style={checkStyles.box}>
					<Icon name="check" size={15} color={this.props.value ? 'black' : 'white'}/>
				</View>             
				<Text style={checkStyles.text}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
	handleLayout ({nativeEvent: {layout: {x, y, width, height}}}) {
		this.setState({
			width
		})
	}

}

