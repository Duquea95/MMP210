var img;

function preload() {
	img = loadImage("doge.png");
}

function setup() {
    createCanvas(680, 680);
    // background('White');
}

function draw(){
    background('green');

    fill('plum');
    textFont('Comic Sans MS');
    text("Much Animation", 20,100);
    textSize(40);

    text("Wow P5", 520,200);
    textSize(40);

    text("Such Usefulness", 20,580);
    textSize(40);

    text("Wow", 520,640);
    textSize(40);

	image(img,150, 150, mouseX, mouseY);
    tint(255, 0, 255);
}
