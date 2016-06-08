//Variablen
var apple;
var snake;
var score = -1;

//Spielstand anzeigen
function drawScore(){
	score = score + 1;
	document.getElementById('score').innerHTML = "Spielstand: " + score; 
}

// Apfel malen
function drawApple(){
	apple = Math.floor(Math.random()*99);
	document.getElementById(apple).style.backgroundColor = "red"; 
}

// Schlange startet in 1, 1
function drawSnake(){
	snake = 14;
	document.getElementById(snake).style.backgroundColor = "orange"; 
}

//Kollision mit Apfel
function kollisionserkennung(){
	if (snake === apple){
		//Punktestand erhöht sich um 1 Punkt
		drawScore();
	
	    //Schlange wird länger
	
	    //neuen Apfel malen
		drawApple();
	
		
	}
}

//Spielstart
function start(){
	drawScore();{
	drawApple();
	drawSnake();
	kollisionserkennung();
	}
}
	
// Tasten abfragen und Schlange steuern
document.onkeydown = function (event) {
	//Links
	if (event.keyCode == 37) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake -1 
		document.getElementById(snake).style.backgroundColor = "orange"; 
		kollisionserkennung();
		
	}
	//Hoch
	else if(event.keyCode == 38) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake - 10
		document.getElementById(snake).style.backgroundColor = "orange"; 
		kollisionserkennung();
	}
	//Rechts
	else if(event.keyCode == 39) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake + 1
		document.getElementById(snake).style.backgroundColor = "orange"; 
		kollisionserkennung();
	}
	//Runter
	else if(event.keyCode == 40) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake + 10 
		document.getElementById(snake).style.backgroundColor = "orange";
		kollisionserkennung();
	}
}



