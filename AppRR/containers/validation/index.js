import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	Button,
	TextInput,
	CheckBox,
	StyleSheet,
	Keyboard,
	View,
	Platform 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBoxIOS,ButtonIOS} from '../../components'

export default class Validation extends Component {
	constructor(props) {
		super (props);
		this.state= {checkState: false};
	}

	render () {
		return (
			<ScrollView scrollEnabled={false} contentContainerStyle={styles.mainView} onPress={Keyboard.dismiss}>
				<View style={{flex: 1, width: '100%'}}>
					<View style={{padding: 15}}>
						<Text style={{fontSize: 16}}>Ingresa tu Numero de Control</Text>
					</View>
					<View style={{flexDirection:'row', padding: 10, justifyContent: 'flex-start'}}>
						<TextInput style={{width: '65%', fontSize: 20, borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
    borderColor: Platform.OS === 'ios' ? 'lightgray': 'transparent'}} maxLength={8} keyboardType='phone-pad' placeholder="Numero de Control"/>
						<View style= {{paddingLeft:20, width: '35%', justifyContent: 'center'}}>
							<ButtonIOS onPress= { () => {}} value="Buscar"/>
						</View>
					</View>
				</View>
				<View style={{flex: 3, width:'100%', alignItems: 'center'}}>
					<View style={{padding: 5, marginBottom: 10,marginTop: 0, backgroundColor: 'white', flex:1, width: '95%', borderWidth: 3, borderColor: 'green', borderRadius: 10}}>						
						<View style={{width: '100%', flex: 1, flexDirection:'row'}}>
							<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
								<Icon name="user-circle" size={30} color="#40464D" />
							</View>
							<View style={{flex: 3, justifyContent: 'center',paddingLeft:10}}>
								<Text style={{fontSize:18}}>Hugo Alberto Rivera Diaz</Text>
								<Text style={{fontWeight:'bold'}}>Nombre</Text>
							</View>
						</View>
						<View style={{width: '100%', flex: 1, flexDirection:'row'}}>
							<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
								<Icon name="book" size={30} color="#40464D" />
							</View>
							<View style={{flex: 3,  justifyContent: 'center',paddingLeft:10}}>
								<Text style={{fontSize:18}}>Ing. en Sitemas Computacionales</Text>
								<Text style={{fontWeight:'bold'}}>Carrera</Text>
							</View>
						</View>
						<View style={{width: '100%', flex: 1, flexDirection:'row'}}>
							<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
								<Icon name="hourglass-half" size={30} color="#40464D" />
							</View>
							<View style={{flex: 3,  justifyContent: 'center',paddingLeft:10}}>
								<Text style={{fontSize:18}}>10</Text>
								<Text style={{fontWeight:'bold'}}>Semestre</Text>
							</View>
						</View>
						<View style={{width: '100%', flex: 1, flexDirection:'row'}}>
							<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
								<Icon name="hashtag" size={30} color="#40464D" />
							</View>
							<View style={{flex: 3,  justifyContent: 'center',paddingLeft:10}}>
								<Text style={{fontSize:18}}>13301053</Text>
								<Text style={{fontWeight:'bold'}}>No. de Control</Text>
							</View>
						</View>										
					</View>					
				</View>
				<View style={{flexDirection: 'row',alignItems: 'center', flex: 0.7 ,width:'95%',justifyContent:'space-between'}}>
					<View style={{flexDirection: 'row',alignItems: 'center'}}>
					{
						this.renderCheckBox()
					}           
			       
          			</View>
          			<ButtonIOS onPress={()=> this.props.navigation.navigate("CreatingAccount")} disabled={!this.state.checkState} value="Continuar" color='#048E03'/>
				</View>
		    </ScrollView>
		);
	}

	renderCheckBox () {
    if (Platform.OS === 'ios') {
      return <CheckBoxIOS  title="Mis datos son correctos" value={this.state.checkState} onPress={() => {this.setState({checkState:!this.state.checkState})}}/>
    } else {
      return (
      	<View style={{flexDirection: 'row', alignItems: 'center'}}>
      	<CheckBox value={this.state.checkState}  onChange={() => {this.setState({checkState:!this.state.checkState})}}/>
          <Text
            onPress={() => {this.setState({checkState:!this.state.checkState})}}
            style={{fontSize:15, fontWeight:'bold'}}
          >Mis Datos son correctos</Text>
        </View>       

      )
    }
  } 
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  }
});