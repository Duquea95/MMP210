// Initialize variable
var img;

// function for preloading image before canvas
function preload() {
	img = loadImage("doge.png");
}

// Setup Canvas
function setup() {
    createCanvas(680, 680);
}

function draw(){

	//Canvas background
    background('green');

	// Set Color for Font
    fill('plum');

	// Set Font Type
    textFont('Comic Sans MS');

	// Set text for canvas and text size
    text("Much Animation", 20,100);
    textSize(40);

    text("Wow P5", 520,200);
    textSize(40);

    text("Such Usefulness", 20,580);
    textSize(40);

    text("Wow", 520,640);
    textSize(40);

	//Set image, height, width
	// X and Y coordinate controlled by hovering mouse
	image(img,150, 150, mouseX, mouseY);
	// Add Tint to image for contrast
    tint(255, 0, 255);
}
