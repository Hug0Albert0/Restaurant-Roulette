var restaurantes = [
	{nombre:'La Guerrera',isPremium:true},
	{nombre:'La Computadora',isPremium:true},
	{nombre:'La Waifu',isPremium:true},
	{nombre:'La Gordi',isPremium:true},
	{nombre:'La Malinche',isPremium:true},
	{nombre:'La Pajarita',isPremium:false},	
	{nombre:'La Vaca',isPremium:false},	
	{nombre:'La Pixula',isPremium:false},	
	{nombre:'La Concha de tu madre',isPremium:false},
	{nombre:'La Wea fome',isPremium:false},
	{nombre:'La Network',isPremium:false},
]

restaurantes = restaurantes.sort(()=> Math.random()-0.5)
//console.log(restaurantes);

var colaGiros =[];
var colaNormal = [];
var ruletaTotal= [];
var opcionesPremium = 4;
var opcionesNormales = 6;

//Primero se tomarán 4 premiums 
restaurantes.map(item => {
	if(item.isPremium==true && opcionesPremium>0) {
		colaGiros.push(item);
		opcionesPremium=opcionesPremium-1;
	} 
	else if(item.isPremium==false && opcionesNormales>0){
		colaNormal.push(item);
		opcionesNormales=opcionesNormales-1;
	}
})

ruletaTotal=colaGiros.concat(colaNormal)

console.log(ruletaTotal)
