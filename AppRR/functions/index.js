const functions = require('firebase-functions');
const admin = require('firebase-admin');
var _ = require ('lodash');
var array = require('lodash/array');
var object = require('lodash/fp/object');
admin.initializeApp();

exports.sendNewMessageNotification = functions.database.ref('/avisos/{id}')
.onCreate(event => {
const getValuePromise = admin.database()
                             .ref('avisos')
                             .limitToLast(1)
                             .once('value')

return getValuePromise.then(snapshot => {    	
    const {body,date,title} = _.values(snapshot.val())[0]     
        const payload = {
          notification: {
            title: '¡Tienes un Nuevo Aviso!',
            body: title,
            sound: 'default'
          }
        }

        const options = {
		collapseKey: 'Avisos',
		contentAvailable:true,
		priority:'high',
		timeToLive: 60 * 60 * 30,
	}; 

	return admin.database().ref('/tokens').once('value').then((result,index) => {
 		let tokenList = _.valuesIn(result.val());  
 		return admin.messaging().sendToDevice(tokenList,payload,options) 		 
 	})      
  
  })
})




