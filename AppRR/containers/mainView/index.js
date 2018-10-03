import React, {Component} from  'react';
import {
	ScrollView,
	Keyboard,
	Text,
	View,
	Image,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CardView,ModalCita,ModalProcedure} from '../../components'
import dbRef from '../../firebase'

export default class MainView extends Component <Props> {

	constructor (props) {
		super(props);
		this.state = {
			modalVisible: false,
			modalRestaurante:false,
			locals: [],
			item: {},
			colaGiros :[],
			colaNormal : [],
			ruletaTotal: [],
			opcionesPremium:5,
			opcionesNormales: 1,
			fullCounter: 0
 		};
  }

	componentDidMount() {
	dbRef.child('locales')
			 .once('value',(snapshot) => {
			 let data =snapshot.val();
			 if (data!=null) {
				 let arrSnap = Object.values(data);
				 this.setState({locals:arrSnap.sort(() => Math.random()-0.5)});
				 //console.log("Revueltos",this.state.locals);
				 if(this.state.locals.length >0 ) {
					 this.state.locals.map( item => {
						 if (item.isPremium === true) {
						 	for (var i = 0; i <5; i++) {
								this.setState({colaGiros : [...this.state.colaGiros,item]})
								}
						 }
						 else if (item.isPremium === false){
							 this.setState({colaNormal : [...this.state.colaNormal,item]})
						 }
					 })
					this.setState({ruletaTotal:this.state.ruletaTotal.concat(this.state.colaGiros,this.state.colaNormal)})
					this.setState({item:this.state.ruletaTotal[Math.floor(Math.random()* this.state.ruletaTotal.length)]})
					console.log(this.state.item)
				 }
			 } else {
				 this.setState({locals: []});
			 }
	});
}

 	setModalVisible(visible) {
	    this.setState({modalVisible: !this.state.modalVisible});
		  setTimeout(() => {
				this.setState({modalVisible:false})
				this.setState({modalRestaurante:true})
			}, 500);
	}

	closeModal () {
		 this.setState({modalRestaurante:false});
	}

	takeItem() {
		this.setState({item:this.state.ruletaTotal[Math.floor(Math.random()* this.state.ruletaTotal.length)]})
	//console.log(this.state.item)
	}

    render () {
    	return (
    		<View style={{alignItems: 'center',flex:1, flexDirection:'column'}}>
					<View style={{flex:1}}>
						<CardView/>
					</View>
					<View style={{flex:2.5, width:'95%',alignItems:'center',justifyContent:'space-evenly'}}>
						<View style={{flex:1,width:'100%', alignItems:'center', justifyContent:'center'}}>
							<Text style={{fontSize:25, fontWeight:'bold', paddingTop:20}}> ¿Que vamos a comer hoy? </Text>
						</View>
							<View style={{flex:4,width:'100%'}}>
								<ImageBackground style={{flex:1,height: '100%', width:'100%',backgroundColor:'transparent', alignItems:'center', justifyContent:'center'}} source={require('../../assets/main.png')} resizeMode="contain">
								<TouchableOpacity style={{width:'66%',height:"30%", alignSelf:'center'}} onPress={()=> {this.setModalVisible();this.takeItem();}}>
									<Image style={{width:"100%", height:"100%"}} source={require("../../assets/spin.png")}/>
								</TouchableOpacity>
								</ImageBackground>
							</View>
					</View>
					<ModalCita modalVisible={this.state.modalVisible} setModalVisible={()=> {this.setModalVisible()}}/>
					{<ModalProcedure
						visible={this.state.modalRestaurante}
						setModalVisible= {()=>this.closeModal()}
						encargado={this.state.item.encargado}
						especialidad={this.state.item.especialidad}
						horario={this.state.item.horario}
						nombre={this.state.item.nombre}
						telefono={this.state.item.telefono}
						tipo={this.state.item.tipo}
						ubicacion={this.state.item.ubicacion}
					/>}
			  </View>
    	);
    }
}
