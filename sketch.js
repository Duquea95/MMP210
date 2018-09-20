function setup() {
    createCanvas(800,800);
}

function draw(){

    var bg = 200;
    var headX = 400, headY = 300, headW = 250, headH = headW+50;

    var hairX = 400, hairY = 240, hairW = 250, hairH = 210;

    var eyesRX = 450, eyesRY = 280, eyesRW = 50, eyesRH = 25, pupilRH = 50;
    var eyesLX = 350, eyesLY = 280, eyesLW = 50, eyesLH = 25, pupilLH = 50;

    var earLX = 270, earLY = 250, earLW = 40, earLH = 40;
    var earRX = 530, earRY = 250, earRW = 40, earRH = 40;

    var mouthX = 450, mouthY = 380, mouthW = 350, mouthH = 380;

    var earColor = "rgb(214,185,140)", eyeColor = "white", pupilColor = "black", hairColor = "black", headColor = "rgb(214,185,140)";

    background(bg);

    // hair
    fill(hairColor);
    ellipse(hairX, hairY, hairW,hairH);

    // ears
    fill(earColor);
    ellipse(earLX,earLY,earLW,earLH);
    ellipse(earRX,earRY,earRW,earRH);

    // head
    fill(headColor);
    ellipse(headX,headY,headW,headH);

    // Eyes
    fill(eyeColor);
    ellipseMode(RADIUS);
    ellipse(eyesRX, eyesRY, eyesRW, eyesRH);
    ellipse(eyesLX, eyesLY, eyesLW, eyesLH);
    fill(pupilColor);
    ellipseMode(CENTER);
    ellipse(eyesRX, eyesRY, eyesRW, pupilRH);
    ellipse(eyesLX, eyesLY, eyesLW, pupilLH);

    // mouth
    line(mouthX,mouthY,mouthW,mouthH);
}
