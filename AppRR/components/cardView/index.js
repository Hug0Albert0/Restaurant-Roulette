import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import cardStyles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CardView extends Component <Props> {
  state = {
    statusColor: '#3C77E9'
  }

  componentDidMount () {

  }
  render () {
    return (
        <View style={cardStyles.card}>
          <View style={{flex: 1, height:100,paddingRight:15}}>
            <Image style={{flex:1, height:undefined, width: undefined}} source={require('../../assets/user.png')} resizeMode="contain"/>
          </View>
          <View style={{flex: 3, justifyContent:'space-evenly'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Hugo Alberto Rivera Diaz</Text>
            <Text style={{fontSize:12, color:'grey'}}>hugorivera.cool.player@gmail.com</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="map-marker" size={20} color="#40464D"/>
                <Text style={{paddingLeft:5}}>R/a Arroyo,Nacajuca,Tabasco</Text>
            </View>
          </View>
        </View>
    );
  }
  renderStatus (status) {
    switch (status){
        case 'Solicitado':
          return '#3C77E9'
        case 'Verificado':
          return '#EC9730'
        case 'Finalizado':
          return 'rgb(7, 148, 90)'
        case 'Cancelado':
          return '#CE3733'
        case 'Validado':
          return '#08A494'
        default:
          return status

    }
  }
}
