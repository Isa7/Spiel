//Variablen
var apple;
var snake = 0;
var score = 1;
var timer = new Array(100);
var richtung = "rechts";
var aktuelle_Pos = snake;
var ende = false;
var tastenpruefung = false;
var richtung_neu = "rechts";
var Zeit;

//Spielstand anzeigen
function drawScore() {
	document.getElementById('score').innerHTML = "Spielstand: " + score; 
}

// Apfel malen
function drawApple(){
	var set = false;
	while (set === false) {
		apple = Math.floor(Math.random()*99);
		if (timer[apple]=== 0) {
			document.getElementById(apple).style.backgroundColor = "red";
			set = true;
		}
	}
}

// Schlange startet in 1, 1
function drawSnake(){
	snake = 0;
	document.getElementById(snake).style.backgroundColor = "orange";
}

function initialisieren () {
	for (var i=0;i<100;i++) {
		document.getElementById(i).style.backgroundColor = "green";
		timer[i]=0;
	}
}
//Spielstart
function start(){
	initialisieren();
	//elemente zeichnen
	drawScore();
	drawSnake();
	timer[0]=1;
	drawApple();
	//Zeitintervall 
	Zeit = setInterval(aktualisierung, 1000);
}

// Function, die die einzelnen Funktionen zu einem Gesamten vereint
function aktualisierung () {
	kopf ();
	ueberpruefen ();
}

// Schlange : aktuelle Position, Richtung, score

function kopf () {
	//Bewegung nach Richtung -> Positionsverschiebung in aktuelle Richtung
	if (richtung != richtung_neu) {
		richtung = richtung_neu;
	}
	if (richtung == "links") {
		if (aktuelle_Pos === 0||aktuelle_Pos === 10||aktuelle_Pos === 20||aktuelle_Pos ===30||aktuelle_Pos ===40||aktuelle_Pos ===50||aktuelle_Pos ===60||aktuelle_Pos ===70||aktuelle_Pos ===80||aktuelle_Pos ===90) {
			aktuelle_Pos = aktuelle_Pos + 9;
		}
		else {
			aktuelle_Pos = aktuelle_Pos - 1;
		}
	}
	else if (richtung == "rechts") {
		if (aktuelle_Pos === 9||aktuelle_Pos ===19||aktuelle_Pos ===29||aktuelle_Pos ===39||aktuelle_Pos ===49||aktuelle_Pos ===59||aktuelle_Pos ===69||aktuelle_Pos ===79||aktuelle_Pos ===89||aktuelle_Pos ===99) {
			aktuelle_Pos = aktuelle_Pos - 9;
		}
		else {
			aktuelle_Pos = aktuelle_Pos + 1;
		}
	}
	else if (richtung == "hoch") {
		aktuelle_Pos = (aktuelle_Pos - 10) % 100;
	}
	else if (richtung == "unten") {
		aktuelle_Pos = (aktuelle_Pos + 10) % 100;
	}
	else {
		alert('unbekannte Richtung');
	}
	if (aktuelle_Pos<0) {
		aktuelle_Pos+=100;
	}
}

// Feld: Abfrage/Speichern: Kopf auf Feld?, Timer setzen, runterzählen, Farbe?

function ueberpruefen () {
	for (var i=0; i<100; i++) {
		var feldfarbe = document.getElementById(i).style.backgroundColor;
		// wenn Kopf auf feld ist, farbe von feld Prüfen, reagieren
		if (aktuelle_Pos == i) {
			//timer neu setzen auf score, bei bereits orangenem Feld game over, bei Rot scoreup.
			if (feldfarbe == "orange"){
				//gameover
				clearInterval (Zeit);
				alert("GAME OVER!");
			}
			else if (feldfarbe == "red") {
				//scoreup und feld färben und timer setzen.
				score++;
				drawScore();
				document.getElementById(aktuelle_Pos).style.backgroundColor = "orange";
				//timer
				timer[i] = score-1;
				// neuer Apfel
				drawApple ();
				//Timer
				for (var j=0; j<100; j++) {
					if (document.getElementById(j).style.backgroundColor == "orange") {
						timer[j]++;
					}
				}
			}
			else {
				// feld färben und timer setzen.
				document.getElementById(aktuelle_Pos).style.backgroundColor = "orange";
				//timer
				timer[i] = score;
			}
		}
		else {
			if (feldfarbe == "orange"){
				//timer pro ablauf -1, wenn timer 0 feld grün färbern
				timer[i]--;
				if (timer[i] == 0) {
					document.getElementById(i).style.backgroundColor = "green";
				}
			}
		}
	}
}

//Variablen für Tastensteuerung

document.onkeydown = function tastendruck (event) {
	if (event.keyCode == 37) {
			richtung_neu = "links";
			event.returnValue = false;
	}
	else if(event.keyCode == 38) {
		richtung_neu = "hoch";
		event.returnValue = false;
	}
	else if(event.keyCode == 39) {
		richtung_neu = "rechts";
		event.returnValue = false;
	}
	else if(event.keyCode == 40) {
		richtung_neu = "unten";
		event.returnValue = false;
	}
	return event.returnValue;
}