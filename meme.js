var img;

function preload() {
	img = loadImage("doge.png");
}

function setup() {
    createCanvas(680, 1080);
    // background('White');
}

function draw(){
    background('green');

    fill('plum');
    textFont('Comic Sans MS');
    text("Much Animation", 20,100);
    textSize(60);

	image(img,150, 150, mouseX, mouseY);
    tint(255, 0, 255);
}
