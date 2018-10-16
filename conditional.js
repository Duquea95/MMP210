var img;

function preload() {
	img = loadImage("doge.png");
}

function setup() {
    createCanvas(680, 680);
    background(250);
}

function draw(){
    // fill('plum');
    // textFont('Comic Sans MS');
    // text("Much Animation", 20,100);
    // textSize(40);
    //
    // text("Wow P5", 520,200);
    // textSize(40);
    //
    // text("Such Usefulness", 20,580);
    // textSize(40);
    //
    // text("Wow", 520,640);
    // textSize(40);
    //
    background('white');
	image(img, mouseX, mouseY);
    // tint(255, 0, 255);
    strokeWeight(1); stroke("black");
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    // fill('black');

    if (mouseX < width/2 && mouseY < height/2) {
        // top left
        textFont('Comic Sans MS');
        text("Much Animation", 20,100);
        textSize(40);
        fill('plum');
    } else if (mouseX > width/2 && mouseY < height/2) {
        // top right
        text("Wow P5", 520,200);
        textSize(40);
        fill('lightblue');
    } else if (mouseX < width/2 && mouseY > height/2) {
        // bottom left
        text("Such Usefulness", 20,580);
        textSize(40);
        fill('gold');
    } else {
        // bottom right
        text("Wow", 520,640);
        textSize(40);
        fill('lightgreen');
    }

    if (mouseIsPressed) {
        var s = (mouseX - pmouseX) + (mouseY - pmouseY);
        ellipse(mouseX, mouseY, s);
    }

}
