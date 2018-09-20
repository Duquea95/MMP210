function setup() {
    createCanvas(800,800);
}

function draw(){

    var bg = 200;
    var headX = 300, headY = 300, headW = 300, headH = headW+50;

    var hairX = 300, hairY = 150, hairW = 240, hairH = 150, hairStart = 700, hairClose = 120, hairType = OPEN;

    var eyesRX = 350, eyesRY = 280, eyesRW = 50, eyesRH = 25, pupilRH = 50;
    var eyesLX = 250, eyesLY = 280, eyesLW = 50, eyesLH = 25, pupilLH = 50;

    var earLX = 140, earLY = 250, earLW = 40, earLH = 40;
    var earRX = 460, earRY = 250, earRW = 40, earRH = 40;

    var mouthX = 250, mouthY = 380, mouthW = 350, mouthH = 380;

    var earColor = "rgb(214,185,140)", eyeColor = "white", pupilColor = "black", hairColor = "black", headColor = "rgb(214,185,140)";


    background(bg);

    // head
    fill(headColor);
    ellipse(headX,headY,headW,headH);

    // hair
    fill(hairColor);
    arc(hairX, hairY, hairW,hairH, hairStart, hairClose, hairType);

    // Eyes
    fill(eyeColor);
    ellipseMode(RADIUS);
    ellipse(eyesRX, eyesRY, eyesRW, eyesRH);
    ellipse(eyesLX, eyesLY, eyesLW, eyesLH);
    fill(pupilColor);
    ellipseMode(CENTER);
    ellipse(eyesRX, eyesRY, eyesRW, pupilRH);
    ellipse(eyesLX, eyesLY, eyesLW, pupilLH);

    // ears
    fill(earColor);
    ellipse(earLX,earLY,earLW,earLH);
    ellipse(earRX,earRY,earRW,earRH);


    // mouth
    line(mouthX,mouthY,mouthW,mouthH);
}
