import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import cardStyles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewsCardView extends Component <Props> {
  render () {
    return (
      <View>
        <Text>Hola</Text>
      </View>
    );
  }
}

  /*{<TouchableOpacity onPress={() => {}}>
                          <Icon name="trash-o" size={25} color="green"/>
                        </TouchableOpacity>}*/

/*G{<View style={cardStyles.card}>
  <View style={{flex:0.5, paddingBottom:10}}>
     <Text style={cardStyles.titleData}>{this.props.titulo}</Text>
     <Text style={cardStyles.dateData}>{this.props.fecha}</Text>
  </View>
  <View style={{flex:0.3, width:'100%',paddingBottom:10}}>
    <Text style={cardStyles.content}>{this.props.contenido}</Text>
  </View>
  <View style={{width:'100%',alignItems:'flex-end'}}>
  </View>
</View>}*/
