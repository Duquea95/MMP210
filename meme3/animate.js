// Initialize variable
var img;
var x = 0, y = 0, r, g, b;

// function for preloading multiple image before canvas
function preload() {
	img = loadImage("doge.png");
	img2 = loadImage("doge-wow.png");
	img3 = loadImage("doge-bread.png");
	img4 = loadImage("doge-cool.png");
}

// Setup Canvas
function setup() {
    createCanvas(980, 980);
    background(250);
	textFont('Comic Sans MS');
	frameRate(120);
}

function draw(){

	//Canvas background
    background('black');

	// Randomize Colors
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);

	// Line weight and color
    strokeWeight(1); stroke("white");
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);

	// When x-axis is less than 700 & y-axis is 0
	if(x < 700 && y == 0){

		// Image 1 with random tint
		image(img, x, y, 250, 250);
		tint(r,g,b);

		// Move image to the right by the speed of 5
		x += 5;

		// Translate and Shear X-axis of text
		translate(20, 50);
		var r = frameCount / 500 * PI;
		shearX(r);

		// Declare Text, Text Size & Color
		text("Much Animation", 20,100);
		textSize(40);
		fill('plum');
	}
	// When x-axis is 700 & y-axis is less than 700
	else if( x == 700 && y < 700){
		y += 5;

		// Image 2 with random tint
		image(img2, x, y, 250, 250);
		tint(r,g,b);

		// Translate and Shear Y-axis of text
		translate(10, 10);
		var r = frameCount / 2000 * PI;
		shearY(r);

		// Declare Text, Text Size & Color
		var text1 = text("Wow P5", 520,200);
		textSize(40);
		fill('lightblue');
	}
	// When x-axis is greater than 10 & y-axis is 700
	else if(y == 700 && x > 10){
		x -= 5;

		// Image 4 with random tint
		image(img4, x, y, 250,250);
		tint(r,g,b);

		// Translate and Shear X-axis of text
		translate(-300, -100);
		var r = frameCount / 2000 * PI;
		shearX(r);

		// Declare Text, Text Size & Color
		text("Wow", 520,640);
		textSize(40);
		fill('yellow');
	}
	// When x-axis is 10 & y-axis is less than or equal to 700
	else if(x == 10 && y <= 700){
		y -= 5;

		// Image 3 with random tint
		image(img3, x, y, 250, 250);
		tint(r,g,b);

		// Translate and Shear Y-axis of text
		translate(50, -200);
		var r = frameCount / 5000 * PI ;
		shearY(r);

		// Declare Text, Text Size & Color
		text("Such Usefulness", 20,580);
		textSize(40);
		fill('green');
	}
}
