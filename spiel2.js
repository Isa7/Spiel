//Variablen
var apple;
var snake;
var score = -1;

//Spielstand anzeigen
function drawScore(){
	score = score + 1;
	document.getElementById('score').innerHTML = "Spielstand: " + score; 
}


//for-Schleife über alle Tabellenelemente: weiß machen

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

function kollisionserkennung(){
	if (snake === apple){
		alert ("Kollision");
		//neuen Apfel malen
		drawApple();
		//Schlange wird länger
	    //Punktestand erhöht sich um 1 Punkt
		drawScore();
	
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

// Kontakt mit Apfel erkennen

// Kontakt mit Apfel erkennen


//Variablen für Tastensteuerung

document.onkeydown = function (event) {
	if (event.keyCode == 37) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake -1 
		document.getElementById(snake).style.backgroundColor = "orange"; 
		kollisionserkennung();
		
	}
	else if(event.keyCode == 38) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake - 10
		document.getElementById(snake).style.backgroundColor = "orange"; 
		kollisionserkennung();
	}
	else if(event.keyCode == 39) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake + 1
		document.getElementById(snake).style.backgroundColor = "orange"; 
		kollisionserkennung();
	}
	else if(event.keyCode == 40) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake + 10 
		document.getElementById(snake).style.backgroundColor = "orange";
		kollisionserkennung();
	}
}



