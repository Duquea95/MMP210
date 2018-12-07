

var serial;
var portName = "COM3";
var inData;
var snareButton = 0, prevSnareButton = 0;
var hatsButton = 0, prevHatsButton = 0;
var sensorValue, sensorValue2;
var osc,osc2,osc3,osc4, fft, type, square, note = "#", playing = false;
var kick, snare, hats, clap, bass;

function preload(){
	kick = loadSound("kick.wav");
	snare = loadSound("snare.wav");
	hats = loadSound("hats.wav");
	clap = loadSound("clap.wav");
	bass = loadSound("808.wav");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

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
	// osc2 = new p5.Oscillator();
	// osc3 = new p5.Oscillator();
	// osc4 = new p5.Oscillator();

	osc.setType('sine');
	osc.freq(400);
	osc.amp(0);
	osc.start();

	// osc2.setType('square');
	// osc2.freq(400);
	// osc2.amp(0);
	// osc2.start();

	// osc3.setType('sawtooth');
	// osc3.freq(400);
	// osc3.amp(0);
	// osc3.start();

	// osc4.setType('triangle');
	// osc4.freq(400);
	// osc4.amp(0);
	// osc4.start();
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
	snareButton = currentString; // save it for the draw method

}

function draw() {
	background('200');

	fill('white');
	ellipse(mouseX, mouseY, 200 , 200);

	fill('black');

	musicNote(note);
	text(note, width/2, height/8);
	osc.freq(mouseX);

	// fill(color(r,g,b));
	fill('white');

	// Sine
	rect(175, 70, 150, 80);
	// Square
	rect(425, 70, 150, 80);
	// Sawtooth
	rect(850, 70, 150, 80);
	// Triangle
	rect(1100, 70, 150, 80);

	fill('black');
	text('sine', 180, 75);
	text('square', 425, 75);
	text('sawtooth', 850, 75);
	text('triangle', 1100, 75);

	textSize(24);
	text(mouseX +"Hz", mouseX, mouseY);

	// console.log(sensorValue);
	// console.log(sensorValue2);

	if (snareButton != 0 && prevSnareButton == 0) {
		console.log('snare');
		snare.play();
		prevSnareButton = snareButton;
	}
	else {
		// snare.stop();
		if (snareButton == 0) {
			prevSnareButton = 0;
		}
	}

	// if (hatsButton != 0 && prevHatsButton == 0) {
	// 	console.log('hats');
	// 	hats.play();
	// 	prevHatsButton = hatsButton;
	// }
	// else {
	// 	// snare.stop();
	// 	if (hatsButton == 0) {
	// 		prevHatsButton = 0;
	// 	}
	// }


}

function keyTyped(){
	if(key === 'a' ){
		kick.play();
	}
	else if(key === 's'){
		snare.play();
	}
	else if(key === 'd'){
		hats.play();
	}
	else if(key === 'f'){
		clap.play();
	}
}

function mousePressed(){
	if(mouseX > 100 && mouseX < 250 && mouseY > 30 && mouseY < 110){
		console.log("btn1 was clicked");
		osc.setType("sine");
		osc.amp(1);
		playing = true;
		r = 0;
		b = 0;

	}
	else if(mouseX > 350 && mouseX < 500 && mouseY > 30 && mouseY < 110){
		console.log("btn2 was clicked");
		osc.setType("square");
		osc.amp(1);
		playing = true;
	}
	else if(mouseX > 775 && mouseX < 925 && mouseY > 30 && mouseY < 110){
		console.log("btn3 was clicked");
		osc.setType("sawtooth");
		osc.amp(1);
		playing = true;
	}
	else if(mouseX > 1025 && mouseX < 1175 && mouseY > 30 && mouseY < 110){
		console.log("btn4 was clicked");
		osc.setType("triangle");
		osc.amp(1);
		playing = true;
	}
	else{
		osc.amp(0);
	}
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
