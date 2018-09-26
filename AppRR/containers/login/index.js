import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
  Image,
  Keyboard,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {CheckBoxIOS,ButtonIOS} from '../../components'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
type Props = {};
export default class Login extends Component<Props> {
  constructor(props){
    super (props);
    this.state = {
      checkState: false,
      numCont:'',
      pass:'',
      passwordVisibility:true,     
    }
 }

registerUser () {
  const {
    numCont,
    pass
  } =this.state;

  console.log(`Usuario: ${numCont} - Password: ${pass}`);
}

  render() {
    return (
      <ScrollView scrollEnabled={false} contentContainerStyle={styles.mainView} onPress={Keyboard.dismiss}>
        <View style={styles.logoView}> 
        <Image source={require('../../assets/logoitvh.png')} style={{width:150, height:200}}/>
        <Text style={{fontSize: 25, fontWeight:'bold'}}>Inicio de Sesión</Text>                             
        </View> 
        <View style={styles.formView}>
          <TextInput onChangeText={(x) => this.setState({numCont: x })} maxLength={8} keyboardType='phone-pad' placeholder="Numero de Control" style={styles.txtinput}/>
          <TextInput onChangeText={(x) => this.setState({pass: x })} secureTextEntry={this.state.passwordVisibility} placeholder= "Contraseña" style={styles.txtinput}/>          
        </View>
        <View style={{alignItems: 'flex-start', width:'90%'}}>
          {this.renderCheckBox()}
        </View>       
        <Text onPress={()=> this.props.navigation.navigate("ResetPassword")} style={{textAlign: 'center', fontSize: 15, fontWeight:'bold',marginTop: 5, color:'#048E03'}}>¿Olvidó su Contraseña?</Text>
        <View style={styles.btnView}>
          <View style={{width: '100%', padding: 8}}>
             <ButtonIOS onPress={()=> this.props.navigation.navigate("CardMainView")} value="Entrar"/>           
          </View>
          <View style={{width: '100%', padding: 8}}>  
           <ButtonIOS onPress={()=> this.props.navigation.navigate("StudentValidation")} value="Crear Cuenta"/>
         </View>               
        </View> 
      </ScrollView>
    );
  }

  renderCheckBox () {
    if (Platform.OS === 'ios') {
      return <CheckBoxIOS
                onPress={()=>{this.setState({checkState:!this.state.checkState})}}
                value={!this.state.checkState}
                title="Recuerdame" 
              />
    } else {
      return (<View style={{flexDirection: 'row',alignItems: 'center',marginTop: 10,marginBottom:10}}>
        <CheckBox
          value={this.state.checkState}
          onChange={() => {this.setState({checkState:!this.state.checkState})}}
        />
        <View>
          <Text
            onPress={() => {this.setState({checkState:!this.state.checkState})}}
            style={{fontSize:15, fontWeight:'bold'}}
          >Recuerdame</Text>
        </View>            
      </View>)
    }
  } 
}

const styles = StyleSheet.create({
  txtinput: {
    width: '100%',
    fontSize:20,
    borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
    borderColor: Platform.OS === 'ios' ? 'lightgray': 'transparent',    
  },
  mainView: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white'
  },

  logoView: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:'center',   
    width:'90%',
    paddingTop:10   
  },
  formView: {
    flex: 0.8,     
    width:'90%',
    justifyContent: 'space-evenly'
     
  },
  btnView: {
    flex: 0.8,
    justifyContent:'center',
    alignItems: 'center',    
    width: '90%'
  }  
});
