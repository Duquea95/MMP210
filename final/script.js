// var snareButton = 0, prevSnareButton = 0;
// var hatsButton = 0, prevHatsButton = 0;
var serial;
var portName = "COM3";
var sensorValue;
var osc,osc2,osc3,osc4, note = "#";
var kick, snare, hats, clap, bass;
var note;
var oscState1 = 0, oscState2 = 0, oscState3 = 0, oscState4 = 0;

function preload(){
	kick = loadSound("kick.wav");
	snare = loadSound("snare.wav");
	hats = loadSound("hats.wav");
	clap = loadSound("clap.wav");
	bass = loadSound("808.wav");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	// Connect to p5
	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);

	serial.open(portName);

	// snare.playMode("restart");

	// text setting
	textFont("Helvetica");
	textAlign(CENTER, CENTER);
	rectMode(CENTER);
	osc = new p5.Oscillator();
	osc2 = new p5.Oscillator();
	osc3 = new p5.Oscillator();
	osc4 = new p5.Oscillator();

	// Envelope Values
	env = new p5.Envelope();
	env2 = new p5.Envelope();
	env3 = new p5.Envelope();
	env4 = new p5.Envelope();
	env.setADSR(.0001, 1, 100, 1);
	env.setRange(1, 0);
	env2.setADSR(.0001, 1, 1, 1);
	env2.setRange(1, 0);
	env3.setADSR(.0001, 1, 1, 1);
	env3.setRange(1, 0);
	env4.setADSR(.0001, 1, 1, 1);
	env4.setRange(1, 0);

	// Oscillator Values
	osc.amp(env);
	osc.start();
	//
	// osc2.amp(env2);
	// osc2.start();
	//
	// osc3.amp(env3);
	// osc3.start();
	//
	// osc4.amp(env4);
	// osc4.start();
	// console.log(osc);
	// osc.freq(200);
}

function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
	// console.log(sensorValue);
	if(sensorValue <= 160){
		osc.setType("sine");
		type = "sine";
	}
	if(sensorValue >= 161 && sensorValue <= 500){
		osc.setType("square");
		type = "square";
	}
	if(sensorValue >= 501 && sensorValue <= 750){
		osc.setType("triangle");
		type = "triangle";
		// console.log(type);
	}
	if(sensorValue >= 751){
		osc.setType("sawtooth");
		type = "sawtooth";
		// console.log(type);
	}
}

function draw() {
	background('black');

	fill('white')
	rect(639,0,displayWidth, 300);

	fill('white');
	ellipse(sensorValue, 100, 150 , 150);

	fill('black');

	text(note, 1020, 75);

	// fill(color(r,g,b));
	fill('white');

	// // Sine
	// rect(175, 70, 150, 80);
	// // Square
	// rect(425, 70, 150, 80);
	// // Sawtooth
	// rect(850, 70, 150, 80);
	// // Triangle
	// rect(1100, 70, 150, 80);

	fill('black');
	text('sine', 120, 75);
	text('square', 320, 75);
	text('triangle', 620, 75);
	text('sawtooth', 820, 75);

	textSize(24);
	// text(mouseX +"Hz", mouseX, mouseY);

	// musicNote(note);
	// keyPressed(note);

	if(keyIsPressed && oscState1 == 0){
		oscState1 == 1;
		if(key == 'a'){
			n = 60;
			console.log(oscState1);
			note = 'C';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'w'){
			n = 61;
			note = 'C#';
			// console.log(oscState1);
			console.log(n);
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 's'){
			n = 62;
			note = 'D';
			osc.freq(n);
			console.log(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'e'){
			n = 63;
			note = 'D#';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'd'){
			n = 64;
			note = 'E';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'f'){
			n = 65;
			note = 'F';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 't'){
			n = 66;
			note = 'F#';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'g'){
			n = 67;
			note = 'G';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'y'){
			n = 68;
			note = 'G#';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'h'){
			n = 69;
			note = 'A';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'u'){
			n = 70;
			note = 'A#';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'j'){
			n = 71;
			note = 'B';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'k'){
			n = 72;
			note = 'C(5)';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'o'){
			n = 73;
			note = 'C#(5)';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'l'){
			n = 74;
			note = 'D(5)';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'p'){
			n = 75;
			note = 'D#(5)';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == ';'){
			n = 76;
			note = 'E(5)';
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == '\''){
			note = 'F(5)';
			n = 77;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		// console.log("osc1");
	}
	else if(keyIsPressed && oscState1 == 1 && osc2 == 0){
		oscState2 == 1;
		if(key == 'a'){
			oscState2 = 1;
			n = 60;
			console.log(oscState2);
			console.log(n);
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'w'){
			oscState1 = 1;
			n = 61;
			// console.log(oscState1);
			console.log(n);
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 's'){
			oscState1 = 1;
			n = 62;
			osc.freq(n);
			console.log(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'e'){
			oscState1 = 1;
			n = 63;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'd'){
			oscState1 = 1;
			n = 64;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'f'){
			oscState1 = 1;
			n = 65;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 't'){
			oscState1 = 1;
			n = 66;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'g'){
			oscState1 = 1;
			n = 67;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'y'){
			oscState1 = 1;
			n = 68;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'h'){
			oscState1 = 1;
			n = 69;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'u'){
			oscState1 = 1;
			n = 70;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'j'){
			oscState1 = 1;
			n = 71;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'k'){
			oscState1 = 1;
			n = 72;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'o'){
			oscState1 = 1;
			n = 73;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'l'){
			oscState1 = 1;
			n = 74;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == 'p'){
			oscState1 = 1;
			n = 75;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == ';'){
			oscState1 = 1;
			n = 76;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		if(key == '\''){
			oscState1 = 1;
			n = 77;
			osc.freq(n);
			env.triggerAttack();
			env.triggerRelease();
		}
		console.log("osc2");
	}
}


function keyReleased(){
	if(oscState1 == 1){
		oscState1 = 0;
	}
	if(oscState2 == 1){
		oscState2 = 0;
	}
	if(oscState3 == 1){
		oscState3 = 0;
	}
	if(oscState4 == 1){
		oscState4 = 0;
	}
}

// function keyPressed(){
	// Notes C4 - F5
	// if(oscState1 == 0){
	// 	if(key == 'a'){
	// 		oscState1 = 1;
	// 		n = 60;
	// 		console.log(oscState1 + n);
	// 		osc.freq(n);
	// 		env.triggerAttack();
	// 		env.triggerRelease();
	// 	}
	// 	if(key == 'w'){
	// 		oscState1 = 1;
	// 		n = 61;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 's'){
	// 		oscState1 = 1;
	// 		n = 62;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'e'){
	// 		oscState1 = 1;
	// 		n = 63;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'd'){
	// 		oscState1 = 1;
	// 		n = 64;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'f'){
	// 		oscState1 = 1;
	// 		n = 65;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 't'){
	// 		oscState1 = 1;
	// 		n = 66;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'g'){
	// 		oscState1 = 1;
	// 		n = 67;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'y'){
	// 		oscState1 = 1;
	// 		n = 68;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'h'){
	// 		oscState1 = 1;
	// 		n = 69;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'u'){
	// 		oscState1 = 1;
	// 		n = 70;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'j'){
	// 		oscState1 = 1;
	// 		n = 71;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'k'){
	// 		oscState1 = 1;
	// 		n = 72;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'o'){
	// 		oscState1 = 1;
	// 		n = 73;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'l'){
	// 		oscState1 = 1;
	// 		n = 74;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == 'p'){
	// 		oscState1 = 1;
	// 		n = 75;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == ';'){
	// 		oscState1 = 1;
	// 		n = 76;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// 	if(key == '\''){
	// 		oscState1 = 1;
	// 		n = 77;
	// 		osc.freq(n);
	// 		env.play();
	// 	}
	// }
	//
	// if(oscState1 == 1 && oscState2 == 0){
	// 	if(key == 'a'){
	// 		n = 60;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'w'){
	// 		n = 61;
	// 		console.log(oscState2 + n);
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 's'){
	// 		n = 62;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'e'){
	// 		n = 63;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'd'){
	// 		n = 64;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'f'){
	// 		n = 65;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 't'){
	// 		n = 66;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'g'){
	// 		n = 67;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'y'){
	// 		n = 68;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'h'){
	// 		n = 69;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'u'){
	// 		n = 70;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'j'){
	// 		n = 71;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'k'){
	// 		n = 72;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'o'){
	// 		n = 73;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'l'){
	// 		n = 74;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == 'p'){
	// 		n = 75;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == ';'){
	// 		n = 76;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// 	if(key == '\''){
	// 		n = 77;
	// 		oscState2 = 1;
	// 		osc2.freq(n);
	// 		env2.play();
	// 	}
	// }
	// console.log(oscState1);
	// console.log(oscState2);
// }

function mmousePressed(){
	// if(mouseX > 100 && mouseX < 250 && mouseY > 30 && mouseY < 110){
	// 	console.log("btn1 was clicked");
	// 	osc.setType("sine");
	// 	// playing = true;
	// 	r = 0;
	// 	b = 0;
	//
	// }
	// else if(mouseX > 350 && mouseX < 500 && mouseY > 30 && mouseY < 110){
	// 	console.log("btn2 was clicked");
	// 	osc.setType("square");
	// 	// osc.amp(1);
	// 	// playing = true;
	// }
	// else if(mouseX > 775 && mouseX < 925 && mouseY > 30 && mouseY < 110){
	// 	console.log("btn3 was clicked");
	// 	osc.setType("sawtooth");
	// 	// osc.amp(1);
	// 	// playing = true;
	// }
	// else if(mouseX > 1025 && mouseX < 1175 && mouseY > 30 && mouseY < 110){
	// 	console.log("btn4 was clicked");
	// 	osc.setType("triangle");
	// 	// osc.amp(1);
	// 	// playing = true;
	// }
	// else{
	// 	osc.amp(0);
	// }
}

function musicNote(n){

	//
	// 1st Octave
	if(mouseX >= 32 && mouseX <= 33){
		n = "C1";
		console.log(n);
		return note = n;
	}
	if(mouseX >= 34 && mouseX <= 35){
		n = "C#1 / Db1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 36 && mouseX <= 37){
		n = "D1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 38 && mouseX <= 40){
		n = "D#1 / Eb1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 41 && mouseX <= 42){
		n = "E1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 43 && mouseX <= 45){
		n = "F1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 46 && mouseX <= 48){
		n = "F#1 / Gb1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 49 && mouseX <= 50){
		n = "G1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 51 && mouseX <= 54){
		n = "G#1 / Ab1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 55 && mouseX <= 57){
		n = "A1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 58 && mouseX <= 60){
		n = "A#1 / Bb1";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 61 && mouseX <= 64){
		n = "B1";
		// console.log(n);
		return note = n;
	}

	//
	// 2ND OCTAVE
	//
	if(mouseX >= 65 && mouseX <= 68){
		n = "C2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 69 && mouseX <= 72){
		n = "C#2 / Db2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 73 && mouseX <= 76){
		n = "D2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 77 && mouseX <= 81){
		n = "D#2 / Eb2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 82 && mouseX <= 86){
		n = "E2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 87 && mouseX <= 91){
		n = "F2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 92 && mouseX <= 97){
		n = "F#2 / Gb2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 98 && mouseX <= 102){
		n = "G2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 103 && mouseX <= 109){
		n = "G#2 / Ab2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 110 && mouseX <= 115){
		n = "A2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 116 && mouseX <= 122){
		n = "A#2 / Bb2";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 123 && mouseX <= 129){
		n = "B2";
		// console.log(n);
		return note = n;
	}

	//
	// 3rd Octave
	//
	if(mouseX >= 130 && mouseX <= 137){
		n = "C3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 138 && mouseX <= 145){
		n = "C#3 / Db3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 146 && mouseX <= 154){
		n = "D3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 155 && mouseX <= 163){
		n = "D#3 / Eb3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 164 && mouseX <= 173){
		n = "E3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 174 && mouseX <= 184){
		n = "F3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 185 && mouseX <= 195){
		n = "F#3 / Gb3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 196 && mouseX <= 206){
		n = "G3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 207 && mouseX <= 219){
		n = "G#3 / Ab3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 220 && mouseX <= 232){
		n = "A3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 233 && mouseX <= 245){
		n = "A#3 / Bb3";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 246 && mouseX <= 260){
		n = "B3";
		// console.log(n);
		return note = n;
	}

	if(mouseX >= 261 && mouseX <= 276){
		n = "C4";
		// console.log(n);
		return note = n;
	}
	//
	// 4th Octave
	//
	if(mouseX >= 277 && mouseX <= 292){
		n = "C#4 / Db4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 293 && mouseX <= 310){
		n = "D4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 311 && mouseX <= 328){
		n = "D#4 / Eb4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 329 && mouseX <= 348){
		n = "E4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 349 && mouseX <= 368){
		n = "F4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 369 && mouseX <= 391){
		n = "F#4 / Gb4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 392 && mouseX <= 414){
		n = "G4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 415 && mouseX <= 439){
		n = "G#4 / Ab4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 440 && mouseX <= 465){
		n = "A4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 466 && mouseX <= 492){
		n = "A#4 / Bb4";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 493 && mouseX <= 522){
		n = "B4";
		// console.log(n);
		return note = n;
	}

	if(mouseX >= 523 && mouseX <= 553){
		n = "C5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 554 && mouseX <= 586){
		n = "C#5 / Db5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 587 && mouseX <= 621){
		n = "D5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 622 && mouseX <= 658){
		n = "D#5 / Eb5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 659 && mouseX <= 697){
		n = "E5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 698 && mouseX <= 738){
		n = "F5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 739 && mouseX <= 782){
		n = "F#5 / Gb5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 783 && mouseX <= 829){
		n = "G5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 830 && mouseX <= 879){
		n = "G#5 / Ab5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 880 && mouseX <= 931){
		n = "A5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 932 && mouseX <= 986){
		n = "A#5 / Bb5";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 987 && mouseX <= 1045){
		n = "B5";
		// console.log(n);
		return note = n;
	}

	if(mouseX >= 1046 && mouseX <= 1107){
		n = "C6";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 1108 && mouseX <= 1173){
		n = "C#6 / Bb6";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 1174 && mouseX <= 1243){
		n = "D6";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 1244 && mouseX <= 1317){
		n = "D#6 / Eb6";
		// console.log(n);
		return note = n;
	}
	if(mouseX >= 1318 && mouseX <= 1395){
		n = "E6";
		// console.log(n);
		return note = n;
	}




}

// function keyTyped1(){
	// if(key === 'a' ){
	// 	kick.play();
	// }
	// else if(key === 's'){
	// 	snare.play();
	// }
	// else if(key === 'd'){
	// 	hats.play();
	// }
	// else if(key === 'f'){
	// 	clap.play();
	// }
// }

// if (snareButton != 0 && prevSnareButton == 0) {
// 	console.log('snare');
// 	snare.play();
// 	prevSnareButton = snareButton;
// }
// else {
// 	// snare.stop();
// 	if (snareButton == 0) {
// 		prevSnareButton = 0;
// 	}
// }
// console.log(osc);
