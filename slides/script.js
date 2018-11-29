var slide = 0;
var note1, note2, note3, keys;
var btn1, btn2, btn3, btn4;
var osc, fft, type, square, note = "#", playing = false;

function preload(){
	note1 = loadImage("singleNotes.png");
	note2 = loadImage("note2.svg");
	note3 = loadImage("3.png");
	keys = loadImage("keys.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont("Helvetica");
	textAlign(CENTER, CENTER);
	rectMode(CENTER);

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(400);
	osc.amp(0);
	osc.start();
	type = osc.setType();
}

function draw() {
	background(255);

	if(slide == 0){
		textSize(42);
		fill("black");
		text("Final Project Idea", width/2, height/8);
		textSize(24);
		text("Online oscillator.", width/2, height/4);
		text("It will feature 4 types of oscillators for a variety in sounds.", width/2, height/3);
		text("It also identifies the note played by the oscillator as well as the Hertz.", width/2, height/2.3);

	}
	else if (slide == 1) {
		textSize(42);
		stroke(1);
		fill("black");
		text("Sensor Used: Potentiometer", width/2, height/8);

		textSize(24);
		text("The Potentiometer will be used to cycle between frequency notes", width/2, height/5);
		text("The Button will be used to cycle between oscillator", width/2, height/4);

		fill(220);
		ellipse(400, 400, 200, 200);
		ellipse(400, 400, 150, 150);

		rect(400, 350, 100, 200, 150, 150,150, 150);
		line(440, 270, 440, 430);
		line(430, 260, 430, 440);
		line(420, 255, 420, 445);
		line(410, 252, 410, 448);
		line(400, 250, 400, 450);
		line(390, 252, 390, 448);
		line(380, 255, 380, 445);
		line(370, 260, 370, 440);
		line(360, 270, 360, 430);

		fill("orange");
		rect(300, 400, 50, 75);
		noStroke();

		fill(220);
		rect(270, 375, 40, 10);
		rect(270, 400, 40, 10);
		rect(270, 425, 40, 10);

		stroke(1);
		rect(800, 400, 200,200);
		fill("black");
		ellipse(800, 400, 150, 150);
	}
	else if (slide == 2){
		osc.freq(0);
		textSize(42);
		fill("black");
		text("Theme: Music", width/2, height/8);
		image(keys, 550, 150, 200, 150);
		image(note1, 300, 400, 150, 150);
		image(note2, 550, 400, 150, 150);
		image(note3, 800, 400, 150, 150);

	}
	else if(slide == 3){
		background('200');

		fill('white');
		ellipse(mouseX, mouseY, 200 , 200);

		fill('black');

		musicNote(note);
		text(note, width/2, height/8);
		osc.freq(mouseX);

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
	}

	// console.log(slide);
}

function mousePressed() {
    if (mouseX > width/2 && mouseY > 100) {
        if (slide < 3) {
            slide++;
        }
    } else if(mouseX < width/2 && mouseY > 100){
        if (slide > 0) {
            slide--;
        }
    }
}

function mouseClicked(){
	if(slide == 3){
		if(mouseX > 100 && mouseX < 250 && mouseY > 30 && mouseY < 110){
			console.log("btn1 was clicked");
			osc.setType("sine");
			osc.amp(1);
			playing = true;
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
			playing = false;
		}
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
