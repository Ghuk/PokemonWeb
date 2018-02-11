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
	attack:15
};

function Initialize(){
	var enemBarLife = document.getElementById("barraEnemigo").style.width = "15em",
		personajeBarLife = document.getElementById("barraPersonaje").style.width = "15em";
	enem.width = "15em";
	personaje.width = "15em";

	//enem.hit = enem.width.split("em")[0]*1 - (((enem.life-personaje.attack
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