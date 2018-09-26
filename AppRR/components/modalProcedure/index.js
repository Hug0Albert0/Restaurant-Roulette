import React, {Component} from 'react'
import {Modal, Text, View} from 'react-native'
import modalCitaStyle from './styles'
import {ButtonIOS} from '../../components'
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ModalProcedure extends Component <Props> {
	state = {
    progress:0.1,
    statusColor: '#3C77E9'
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          progress: 0.25
        }
      })
    }, 2000)
    setTimeout(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          progress: 0.50
        }
      })
    }, 4000)
    setTimeout(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          progress: 0.75
        }
      })
    }, 6000)
  }
	render () {
		return (
		 <Modal
          animationType="slide"
          transparent
          visible={this.props.visible}
          onRequestClose={this.props.setModalVisible}>
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1,backgroundColor: 'rgba(0,0,0,0.4)'}}>
	          <View style={{backgroundColor: 'white',borderRadius: 10,borderWidth: 3,borderStyle: "solid",borderColor: 'green',width: '85%', height: '75%',padding:15}}>
	            <View style={{flex:1,justifyContent:'space-evenly'}}>
								<Text>{this.props.nombre}</Text>
								<Text>{this.props.tipo}</Text>
								<Text>{this.props.especialidad}</Text>
								<Text>{this.props.ubicacion}</Text>
								<Text>{this.props.horario}</Text>
								<Text>{this.props.telefono}</Text>
								<Text>{this.props.encargado}</Text>
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
