//Variablen
var apple;
var snake;

//for-Schleife über alle Tabellenelemente: weiß machen

// 3 Äpfel malen
function drawApple(){
	apple = Math.floor(Math.random()*99);
	document.getElementById(apple).style.backgroundColor = "red"; 
	apple = Math.floor(Math.random()*99);
	document.getElementById(apple).style.backgroundColor = "red";
	apple = Math.floor(Math.random()*99);
	document.getElementById(apple).style.backgroundColor = "red";
}

// Schlange startet in 1, 1
function drawSnake(){
	snake = 0;
	document.getElementById(snake).style.backgroundColor = "orange"; 
}

//Spielstart
function start(){
	drawApple();
	drawSnake();
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
		
	}
	else if(event.keyCode == 38) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake + 10
		document.getElementById(snake).style.backgroundColor = "orange"; 
	}
	else if(event.keyCode == 39) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake + 1
		document.getElementById(snake).style.backgroundColor = "orange"; 
	}
	else if(event.keyCode == 40) {
		document.getElementById(snake).style.backgroundColor = "green"; 
		snake = snake - 10 
		document.getElementById(snake).style.backgroundColor = "orange"; 
	}
}



