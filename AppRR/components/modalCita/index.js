import React, {Component} from 'react'
import {Modal, Text, View,Image,ActivityIndicator} from 'react-native'
import modalCitaStyle from './styles'
import {ButtonIOS} from '../../components'
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ModalCita extends Component <Props> {
	state = {
    progress:0.1,
    statusColor: '#3C77E9'
  }
  componentDidMount () {

  }
	render () {
		return (
		 <Modal
          animationType="fade"
          transparent
          visible={this.props.modalVisible}
          onRequestClose={this.props.setModalVisible}>
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1,backgroundColor: 'rgba(0,0,0,0.4)'}}>
	          <View style={{backgroundColor: 'white',borderRadius: 20,borderWidth: 3,borderStyle: "solid",borderColor: '#FF530D',width: '80%', height: '70%', alignItems:'center', justifyContent:'space-evenly'}}>
								<Text style={{fontSize:25, fontWeight:'bold'}}> Espera un momento...</Text>
								<Image style={{flex:0.7, width:"80%", height:"80%"}} source={require("../../assets/waiting.gif")}/>
								<ActivityIndicator size="large" color='#FF530D' />
								{/*<ButtonIOS
								 value="Ok"
								 fontSize={15}
								 colorcito='#FF530D'
								 onPress={this.props.setModalVisible}>
							 </ButtonIOS>*/}
	          </View>
          </View>
        </Modal>);
	}
}

//backgroundColor: 'rgba(0,0,0,0.1)',
