var restaurantes = [
	{nombre:'El Premium',isPremium:true},
	{nombre:'El Premium 2 recargado',isPremium:true},
	{nombre:'El Normal Probre 1',isPremium:false},
	{nombre:'El Normal Probre 2',isPremium:false},
	{nombre:'El Normal Probre 3',isPremium:false},
	{nombre:'El Normal Probre 4',isPremium:false},
	{nombre:'El Normal Probre 5',isPremium:false}
]
var premiumsClones= [];
var premiumNormales = [];
var ruletaTotal = [];
var local = {};

restaurantes.map((item) => {
		if(item.isPremium===true) {
			for (var i = 0; i <5; i++) {
				premiumsClones=[...premiumsClones,item];
			}
		} else if(item.isPremium===false) {
			premiumNormales = [...premiumNormales, item]
		}
})

ruletaTotal=ruletaTotal.concat(premiumsClones,premiumNormales);
local = ruletaTotal[Math.floor(Math.random()*ruletaTotal.length)];
console.log(local);
