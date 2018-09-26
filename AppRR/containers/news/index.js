import React, {Component} from 'react'
import {ScrollView,Keyboard,Text, View} from 'react-native'
import {NewsCardView} from '../../components'
import dbRef from '../../firebase'

export default class News extends Component <Props> {

	constructor(props){
		super(props);
		this.state={
			news: []
		};
	}

	componentDidMount () {
  /*dbRef.child('avisos')
         .on('value',(snapshot) => {
         let data =snapshot.val();
         if (data!=null) {
           let arrSnap = Object.values(data);
           arrSnap.reverse();
           this.setState({news:arrSnap});
         } else {
           this.setState({news: []});
         }
    });*/
  }


	render () {
		return (
			<View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
				<Text> Hola, soy un vista en blanco </Text>
			</View>
			// <ScrollView contentContainerStyle={{paddingTop:5, paddingBottom:10, alignItems: 'center'}} scrollEnabled={true}  onPress={Keyboard.dismiss}>
			// 	{
			// 		 this.state.news.length>0?
			// 		 this.state.news.map((card, index) => {
			// 		 	return <NewsCardView key={index} titulo={card.title} fecha={card.date} contenido={card.body}/>
			// 		 }): <Text>Sin Avisos</Text>
			// 	}
			// </ScrollView>
	    );
	}
}
