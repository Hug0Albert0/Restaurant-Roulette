var restaurantes = [
	{nombre:'La Guerrera',isPremium:true},
	{nombre:'La Computadora',isPremium:true},
	{nombre:'La Waifu',isPremium:true},
	{nombre:'La Gordi',isPremium:true},
	{nombre:'La Malinche',isPremium:true},
	{nombre:'La Cola',isPremium:true},
	{nombre:'La Tecla',isPremium:true},
	{nombre:'La Cosa',isPremium:true},
	{nombre:'La Letra',isPremium:true},
	{nombre:'La Cancion',isPremium:true},
	{nombre:'La Pajarita',isPremium:false},	
	{nombre:'La Vaca',isPremium:false},	
	{nombre:'La Pixula',isPremium:false},	
	{nombre:'La Concha de tu madre',isPremium:false},
	{nombre:'La Wea fome',isPremium:false},
	{nombre:'La Network',isPremium:false},
	{nombre:'La Radio',isPremium:false},	
	{nombre:'La Nota',isPremium:false},	
	{nombre:'La Carretera',isPremium:false},	
	{nombre:'La Casa',isPremium:false},
	{nombre:'La Avenida',isPremium:false},
	{nombre:'La Virginia',isPremium:false},
]

restaurantes = restaurantes.sort(()=> Math.random()-0.5)
var colaPremium =[];
var colaNormal = [];
var ruletaTotal= [];
var probPremium = 5;
var probNormal = 1;
var pruebaGiro= [];
var item = {}


restaurantes.map(item => {
	if(item.isPremium==true) {
		colaPremium.push(item);
	} 
	else if(item.isPremium==false){
		colaNormal.push(item);		
	}
})
//Probar con hacerlo quitando los elementos del array en si :V 
console.log("RESTAURANTES PREMIUM: ",colaPremium);
console.log('=============================================')
console.log("RESTAURANTES NORMALES: ",colaNormal);
colaPremium.map(item => {
	 if(probPremium>0) {
	 	pruebaGiro.push(item);
	 	probPremium=probPremium-1;
	 } 
})
colaNormal.map(item => {
	 if(probNormal>0) {
	 	pruebaGiro.push(item);
	 	probNormal=probNormal-1;
	 } 
})
console.log('=============================================')
console.log(pruebaGiro)

