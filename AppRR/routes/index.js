import React, {Component} from 'react'
import {Text,Platform} from 'react-native'
import {Login,Validation,CreateAccount,ResetPass,MainView,News,Procedures} from '../containers'
import  {StackNavigator,TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';


export const AuthStack = StackNavigator({
	SignIn : {
		screen: Login,
		navigationOptions: {
			header: null
		}
	},
	StudentValidation: {
		screen:Validation,
		navigationOptions: {
			headerTitle: "Validacion"
		}
	},

	CreatingAccount: {
		screen:CreateAccount,
		navigationOptions: {
			headerTitle: "Crear Cuenta"
		}
	},
	ResetPassword: {
		screen:ResetPass,
		navigationOptions: {
			headerTitle: "Restablecer Password"
		}
	}
});

const TramitesStack = StackNavigator({
	CitasFeed: {
		screen: MainView,
		navigationOptions: {
			headerTitle: "Ruleta de Restaurantes",
			headerStyle: {
				backgroundColor:'#FF530D'
			},
			headerTitleStyle: {
				color: 'white'
			}
		}
	}
})

export const MainStack = TabNavigator ({

	NewsTabView: {
		screen: StackNavigator({
			NewsFeed: {
				screen: News,
				navigationOptions: {
					headerTitle: "Algo :v",
					headerStyle: {
						backgroundColor:'#FF530D'
					},
					headerTitleStyle: {
						color: 'white'
					}
				}
			}
		}),
		navigationOptions: {
			tabBarIcon: ({focused,tintColor}) => (<Icon name="newspaper-o" size={22} color={(focused) ? tintColor : 'grey'} />),
			tabBarLabel: 'Algo',
			swipeEnabled:true
		}
	},

	CardMainView: {
		screen:TramitesStack,
		navigationOptions: {
			tabBarIcon: ({focused,tintColor}) => (<Icon name="coffee" size={22} color={(focused) ? tintColor : 'grey'}/>),
			tabBarLabel: 'Ruleta',
			swipeEnabled:true

		}
	},

	ProceduresTabView: {
		screen: StackNavigator ({
			ProceduresFeed: {
				screen: Procedures,
				navigationOptions: {
					headerTitle: "Lista de Tramites",
					headerStyle: {
						backgroundColor:'#FF530D'
					},
					headerTitleStyle: {
						color: 'white'
					}
				}
			}
		}),
		navigationOptions: {
			tabBarIcon: ({focused,tintColor}) => (<Icon name="copy" size={23} color={(focused) ? tintColor : 'grey'}/>),
			tabBarLabel: 'Otra cosa',
			swipeEnabled:true
		}
	}
}, {
	initialRouteName: 'CardMainView',
	swipeEnabled:true,
	animationEnabled:true,
	tabBarOptions: {
	upperCaseLabel:false,
		showIcon: true,
		activeTintColor: '#C22100',
		style: {
			backgroundColor: 'white',
			padding:0,
			height:65
		},
		labelStyle: {
			fontWeight:'bold',
			fontSize:16
		},
		indicatorStyle: {
			backgroundColor: '#C22100',
			height: 4
		},
		inactiveTintColor: 'grey',
	},
	tabBarPosition: 'bottom'

});

export const createNavigator = (signedIn) => {
	return StackNavigator({
		Auth: { screen: AuthStack },
		Main: { screen : MainStack}
	}, {
		headerMode: 'none',
		initialRouteName: signedIn?'Auth':'Main'
	})
}
