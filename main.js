var cont = 0;
var enem={
	name:"Gato",
	life:100,
	width:"",
	hit:"",
	attack:15
},
personaje={
	name:"Tucan",
	life:100,
	width:"",
	attack:15,
	img:""
},characters=[{
		name:"Feraligatr",
		life:100,
		width:"",
		attack:15,
		img:"https://vignette.wikia.nocookie.net/es.pokemon/images/9/9a/Feraligatr_XY.gif/revision/latest?cb=20150421234039"
	},{
		name:"Arcanine",
		life:100,
		width:"",
		attack:15,
		img:"https://vignette.wikia.nocookie.net/es.pokemon/images/f/f5/Arcanine_XY.gif/revision/latest?cb=20140103062618"
    },{
		name:"Gliscor",
		life:100,
		width:"",
		attack:15,
		img:"https://vignette.wikia.nocookie.net/es.pokemon/images/0/0e/Gliscor_XY.gif/revision/latest?cb=20140111115758"
    },{
		name:"Aggron",
		life:100,
		width:"",
		attack:15,
		img:"https://vignette.wikia.nocookie.net/es.pokemon/images/2/2b/Aggron_XY.gif/revision/latest?cb=20140505212219"
}];

function Initialize(){
	var enemBarLife = document.getElementById("barraEnemigo").style.width = "15em",
		personajeBarLife = document.getElementById("barraPersonaje").style.width = "15em",
		onSelection=null, onSelection2 = null;
	var selection = localStorage.getItem("option");
	var selection2 = localStorage.getItem("option2");

	for(var i = 0; i<characters.length;i++){
		onSelection = characters[i].name == selection ? characters[i]: null;
		if(onSelection!=null){
			break;
		}
	}
	for(var i = 0; i<characters.length;i++){
		onSelection2 = characters[i].name == selection2 ? characters[i]: null;
		if(onSelection2!=null){
			break;
		}
	}

	document.getElementById("miPookemonnombre").innerHTML = onSelection.name;
	document.getElementById("miPokemonFoto").src = onSelection.img;

	document.getElementById("elEnemigoNombre").innerHTML = onSelection2.name;
	document.getElementById("elEnemigoFoto").src = onSelection2.img;

	enem.width = "15em";
	personaje.width = "15em";
	console.log("Que seleccione?",localStorage.getItem("option"));
	
	enem.hit = 3;
}

function Atacar(){
	var enemBarLife = document.getElementById("barraEnemigo").style.width,
		personajeBarLife = document.getElementById("barraPersonaje").style.width;

	enemBarLife = (enemBarLife.split("em")[0]*1)-enem.hit;
	document.getElementById("barraEnemigo").style.width = enemBarLife+"em";

	if(enemBarLife<1){
		alert('Enemigo Muerto - Ganaste!');
	}
	
}

function Escapar(){
	alert('No puedes escapar');
}

function on() {
    document.getElementById("cambio").style.display = "block";
    document.getElementById("accion").style.display = "none";
}

function off() {
    document.getElementById("cambio").style.display = "none";
    document.getElementById("accion").style.display = "flex";
}

function cambio(srcNueva, nombreNuevo){
	document.getElementById("miPokemonFoto").src = srcNueva;
	document.getElementById("miPookemonnombre").innerHTML = nombreNuevo;
	
}

function Seleccion(valor){
	cont++;
	if(valor==0){
		var select = document.getElementById("opciones").value;
		localStorage.setItem("option",select);
	}else{
		var select = document.getElementById("opcionesEnemigo").value;
	    localStorage.setItem("option2",select);
	}
	
	if(cont == 2)
		window.open("fight.html");

	console.log(cont);
}
//If de asignación, donde si la edad es mayor o igual a 18, entonces se asigna "true", de lo contrario asigna "false"
//mayor=(edad>=18)?true:false;