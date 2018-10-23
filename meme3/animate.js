var img;

function preload() {
	img = loadImage("doge.png");
	img2 = loadImage("doge-wow.png");
	img3 = loadImage("doge-bread.png");
	img4 = loadImage("doge-cool.png");
}

function setup() {
    createCanvas(720, 720);
    background(250);
}

function draw(){
    background('black');
    strokeWeight(1); stroke("white");
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);

    if (mouseX < width/2 && mouseY < height/2) {
        // top left
        // image(img, mouseX, mouseY, 250, 250);
        image(img, mouseX, mouseY, 250, 250);
        tint(255, 0, 255);
        textFont('Comic Sans MS');
        text("Much Animation", 20,100);
        textSize(40);
        fill('plum');
        if (mouseIsPressed) {
            text('ok');
            fill('blue');
        }

    } else if (mouseX > width/2 && mouseY < height/2) {
        // top right
        image(img2, mouseX, mouseY, 250, 250);
        tint('green');
        var text1 = text("Wow P5", 520,200);
        textSize(40);
        fill('lightblue');
        if (mouseIsPressed) {
            fill('white');
        }
    } else if (mouseX < width/2 && mouseY > height/2) {
        // bottom left
        image(img3, mouseX, mouseY, 250, 250);
        tint('gold');
        text("Such Usefulness", 20,580);
        textSize(40);
        fill('red')
        if (mouseIsPressed) {
            fill('purple');
        }
    } else {
        // bottom right
        image(img4, mouseX, mouseY, 250, 250);
        tint('white');
        text("Wow", 520,640);
        textSize(40);
        fill('yellow');
        if (mouseIsPressed) {
            fill('green');
        }
    }

}
