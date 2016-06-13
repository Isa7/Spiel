//Variablen
var apple;
var snake;
var score = 0;
var timer;
var richtung;
var aktuelle_Pos = snake;
var ende = false;
var tastenpruefung = false;

//Spielstand anzeigen
function drawScore(){
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
return snake;
}

//Spielstart
function start(){
drawScore();{	
drawApple();
drawSnake();
}
}

// Schlange : aktuelle Position, Richtung, score

function kopf (score, aktuelle_Pos, richtung, tastenpruefung) {
//document.getElementById(aktuelle_Pos).style.backgroundColor = "orange";
//Richtungswechsel
if (tastenpruefung = true) {
tastendruck (event, tastenpruefung, richtung);
tastenpruefung = false;
}
return tastenpruefung;
return richtung;
//Längenwechsel -> score + 1:
if (laenger = true) {
score++;
}
return score;
}

// Feld: Abfrage/Speichern: Kopf auf Feld?, Timer setzen, runterzählen, Farbe?

function ueberpruefen (aktuelle_Pos, ende) {
for (i=0; i<100; i++) {
var feldfarbe = document.getElementById(i).style.color;
var position = aktuelle_Pos;
// wenn Kopf auf feld ist, farbe von feld Prüfen, reagieren
if (position = document.getElementById(i)) {
//timer neu setzen auf score, bei bereits orangenem Feld game over, bei Rot scoreup.
if (feldfarbe = "orange"){
//gameover
ende = true;
}
else if (feldfarbe = "red") {
//scoreup und feld färben und timer setzen.
drawScore(score++);
document.getElementById(position).style.backgroundColor = "orange";
//timer
}
else {
// feld färben und timer setzen.
document.getElementById(position).style.backgroundColor = "orange";
//timer
}
}
if (feldfarbe = "orange"){
//timer pro ablauf -1, wenn timer 0 feld grün färbern
}
}
return score;
return ende;
}

//Variablen für Tastensteuerung: http://florianherlings.de/artikel/tastendruck_mit_javascript_abfangen

document.onkeydown = function tastendruck (event, tastenpruefung, richtung) {
tastenpruefung = true;
if (event.keyCode == 37) {
while (!onkeydown) {
//document.getElementById(snake).style.backgroundColor = "green";
//snake = snake -1;
richtung = "links";
//document.getElementById(snake).style.backgroundColor = "orange";
}
}
else if(event.keyCode == 38) {
//document.getElementById(snake).style.backgroundColor = "green";
//snake = snake - 10;
richtung = "hoch";
//document.getElementById(snake).style.backgroundColor = "orange";
}
else if(event.keyCode == 39) {
//document.getElementById(snake).style.backgroundColor = "green";
//snake = snake + 1;
richtung = "rechts";
//document.getElementById(snake).style.backgroundColor = "orange";
}
else if(event.keyCode == 40) {
//document.getElementById(snake).style.backgroundColor = "green";
//snake = snake + 10;
richtung = "unten";
//document.getElementById(snake).style.backgroundColor = "orange";
}
return tastenpruefung;
}

// Laufen

while (ende = false) {
// Zeitintervalle programmieren: http://www.mediaevent.de/javascript/animation.html
var Zeit = setInterval(//Anweisung oder Funktionsaufrufe, 1000);
// Position um eins in Richtung verschieben
kopf (score, aktuelle_Pos, richtung);
ueberpruefen (aktuelle_Pos);
}


