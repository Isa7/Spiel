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