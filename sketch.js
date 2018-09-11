function setup() {
    createCanvas(600,600);
}

function draw(){
    background(220);

    // head
    fill('rgba(0,0,0,.3)');
    rect(200,200,200,250);

    // hair
    fill('rgba(0,0,0,.2)');
    fill('rgba(0,0,0,1)');
    arc(300, 150, 240,150, 700, 120, OPEN);

    // Eyes
    fill('rgba(255,255,255,1)');
    ellipseMode(RADIUS);
    ellipse(350, 280, 50, 25);
    ellipse(250, 280, 50, 25);
    fill(100);
    ellipseMode(CENTER);
    ellipse(350, 280, 50, 50);
    ellipse(250, 280, 50, 50);


    // ears
    fill('rgb(255,255,255)');
    ellipse(175,250,40,40);
    ellipse(425,250, 40, 40);

    // mouth
    line(250,380,350,380)
}
