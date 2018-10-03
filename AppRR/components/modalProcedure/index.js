import React, {Component} from 'react'
import {Modal, Text, View, Image} from 'react-native'
import {ButtonIOS} from '../../components'
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ModalProcedure extends Component <Props> {
	render () {
		return (
		 <Modal
          animationType="slide"
          transparent
          visible={this.props.visible}
          onRequestClose={this.props.setModalVisible}>
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1,backgroundColor: 'rgba(0,0,0,0.4)'}}>
	          <View style={{backgroundColor:'white',borderRadius: 15,borderWidth: 3,borderStyle: "solid",borderColor: 'green',width: '95%', height: '85%',padding:5}}>
	            <View style={{flex:1, alignItems:'center',width:'100%'}}>
							  <View style={{backgroundColor:'yellow', width:'50%', alignSelf:'center', paddingTop:4,paddingBottom:4, borderRadius:5,borderWidth: 2,borderStyle: "solid",borderColor: 'black',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
									<Icon name='star' size={15}/>
									<Text style={{fontWeight:'bold'}}>Opcion Recomendada</Text>
								</View>
								<View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
								<View style={{flex:1}}>
									 <Image style={{flex:1,width:undefined, height:undefined}} source={require("../../assets/logores.png")}  resizeMode="contain"/>
								</View>
								<View style={{alignItems:'center',  flex:3}}>
									<Text style={{textAlign:'center',fontSize:30}}>{this.props.nombre}</Text>
									<Text style={{textAlign:'center',fontSize:20}}>{this.props.tipo}</Text>
									<Text style={{textAlign:'center',fontSize:16}}>{this.props.especialidad}</Text>
								</View>
								</View>
								<View style={{flex:2}}>
	 								<Text>{this.props.ubicacion}</Text>
									<Text>{this.props.horario}</Text>
									<Text>{this.props.telefono}</Text>
									<Text>{this.props.encargado}</Text>
								</View>
	            </View>
							<ButtonIOS
								value="Cerrar"
								fontSize={15}
								onPress={this.props.setModalVisible}>
							</ButtonIOS>
	          </View>
          </View>
        </Modal>);
	}
}

//backgroundColor: 'rgba(0,0,0,0.1)',
