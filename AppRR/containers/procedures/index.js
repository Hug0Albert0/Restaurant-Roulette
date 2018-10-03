import React, {Component} from 'react'
import {ScrollView,Keyboard,Text,View,TouchableOpacity} from 'react-native'
import listStyles from './styles'
import {ModalProcedure} from '../../components'

export default class Procedures extends Component <Props> {

	constructor(props){
		super(props);
		this.state = {
			modalVisible: false,
		};
	}

	setModalVisible(visible) {
	    this.setState({modalVisible: !this.state.modalVisible});
	}


	render () {
		return (
			<View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
				<Text> Hola, soy otra vista, llename con JSX :v </Text>
			</View>
			// <ScrollView contentContainerStyle={{alignItems: 'center'}} scrollEnabled={true}  onPress={Keyboard.dismiss}>
			// <View style={listStyles.titleList}>
			// 		<Text style={listStyles.textTitleList}>Constancias</Text>
			// 	</View>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Constancia Parcial de Estudios con Calificacion</Text>
			// 	</TouchableOpacity>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	 style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Constancia Parcial de Estudios sin Calificacion</Text>
			// 	</TouchableOpacity>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	 style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Constancia de Terminacion de Servicio Social</Text>
			// 	</TouchableOpacity>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	 style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Constancia de Terminacion de Residencia Profesional</Text>
			// 	</TouchableOpacity>
			// 	<View style={listStyles.titleList}>
			// 		<Text style={listStyles.textTitleList}>Aperturas</Text>
			// 	</View>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	 style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Apertura de Expediente de Servicio Social</Text>
			// 	</TouchableOpacity>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	 style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Apertura de Expediente de Residencia Profesional</Text>
			// 	</TouchableOpacity>
			// 	<View style={listStyles.titleList}>
			// 		<Text style={listStyles.textTitleList}>Kardex</Text>
			// 	</View>
			// 	<TouchableOpacity onPress={()=> this.setModalVisible()}	 style={listStyles.itemList}>
			// 		<Text style={listStyles.textItemList}>Kardex Parcial</Text>
			// 	</TouchableOpacity>
			// 	<ModalProcedure modalVisible={this.state.modalVisible} setModalVisible={()=> this.setModalVisible()}/>
			//  </ScrollView>
	    )
	}
}
