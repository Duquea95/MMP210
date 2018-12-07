var serial;
var portName = "COM3";
var sensorValue, sensorValue2;

function setup() {
	createCanvas(800, 800);

	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);

	serial.open(portName);
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
	console.log(currentString);
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}

// function draw() {
// 	var c = map(sensorValue, 0, 1023, 0, 180);
//
// 	// sky
// 	background(c, c, c + 85);
//
// 	// sun
// 	var y = map(sensorValue, 0, 1023, height, 0);
// 	fill('gold');
// 	noStroke();
// 	ellipse(width/2, y, 100);
//
// 	// ground
// 	fill(c, c + 75, c);
// 	rect(0, height * 0.75, width, height * 0.25);
// }

// function setup() {
//     createCanvas(800,800);
//     frameRate(30);
// }

// X coordinate variables for pupils & direction

var pupilRX = 350;
var pupilLX = 450;
var direction = 1;

function draw(){

    // Declare vairables

    var bg = 200;
    var headX = 400, headY = 300, headW = 250, headH = headW+50;

    var hairX = 400, hairY = 240, hairW = 250, hairH = 210;

    var eyesRX = 450, eyesRY = 280, eyesRW = 50, eyesRH = 35, pupilRH = 50;
    var eyesLX = 350, eyesLY = 280, eyesLW = 50, eyesLH = 35, pupilLH = 50;

    var earLX = 280, earLY = 280, earLW = 40, earLH = 40;
    var earRX = 520, earRY = 280, earRW = 40, earRH = 40;

    var mouthX = 450, mouthY = 380, mouthW = 350, mouthH = 380;

    var earColor = "rgb(214,185,140)", eyeColor = "white", pupilColor = "black", hairColor = "black", headColor = "rgb(214,185,140)";

    var r = 200;
    var g = map(sensorValue, 0, width, 0, 255); // green
    var b = map(sensorValue, 0, height, 255, 0); // blue
    // fill(r, g, b);
    background(r,g,b);

    // hair
    fill(hairColor);
    ellipse(hairX, hairY, hairW,hairH);

    // ears
    fill(earColor);
    ellipse(earLX,earLY,earLW,earLH);
    ellipse(earRX,earRY,earRW,earRH);


    // head
    fill(headColor)
    ellipse(headX,headY,headW,headH);

    // Eyes
    fill(eyeColor);
    ellipseMode(RADIUS);
    ellipse(eyesRX, eyesRY, eyesRW, eyesRH);
    ellipse(eyesLX, eyesLY, eyesLW, eyesLH);
    fill(pupilColor);
    ellipseMode(CENTER);

    // Animate Eyes
    pupilLX = pupilLX + 1 * direction;
    pupilRX = pupilRX + 1 * direction;

    // Function for containing pupil animation within eyes
    if(pupilLX == 475 || pupilLX == 425 && pupilRX == 325 || pupilRX == 375){
        direction *= -1;
    }

    var e1 = map(sensorValue, 0, 1023, 325, 375);
    var e2 = map(sensorValue, 0, 1023, 425, 475);

    ellipse(e1, eyesRY, eyesRW, pupilRH);
    ellipse(e2, eyesLY, eyesLW, pupilLH);

    // mouth
    line(mouthX,mouthY,mouthW,mouthH);

}
