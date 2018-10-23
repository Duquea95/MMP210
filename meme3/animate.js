// Initialize variable
var img;
var x = 0, y = 0, s = 0;

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
}

function draw(){
	x += 5;

	// Increase x-axis speed by 5. x = 5, y = 0
	//Canvas background
    background('black');

	// Line weight and color
    strokeWeight(1); stroke("white");
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);

	// Divide canvas into 4 quadrants
    if (x < width/2 && y < height/2){

        // top left
		// Style font & allow user to move image with mouse
		image(img, x, y, 250, 250);
		tint(255, 0, 255);

		translate(20, 20);
		var r = frameCount / 1000 * PI;
		shearX(r);
		text("Much Animation", 20,100);
		textSize(40);
		fill('plum');

		// Change image & text state on click
        // if (mouseIsPressed) {
        //     text('ok');
        //     fill('blue');
        // }

    } else if (x > width/2 && y < height/2) {
        // top right
		// Style font & allow user to move image with mouse
        image(img2, x, y, 250, 250);
        tint('green');

		translate(20, 20);
		var r = frameCount / 1000 * PI;
		shearX(r);
        var text1 = text("Wow P5", 520,200);
        textSize(40);
        fill('lightblue');


		// Change image & text state on click
        if(y <= 700){
			// x = 0;
			x -= 5;
			y += 5;
			// scale(2)
			// text1 = text('Cool!');
			fill('white');
        }
    } else if (x < width/2 && y > height/2){
        // bottom left
		// Style font & allow user to move image with mouse
        image(img3, x, y, 250, 250);
        tint('gold');
        text("Such Usefulness", 20,580);
        textSize(40);
        fill('red');

		// Change image & text state on click
        // if (y >= 700){
        //     fill('purple');
		// 	x -= -10;
		// 	y = -25;
        // }
    }
	else {
        // bottom right
		// Style font & allow user to move image with mouse
		// x -= 5;
        image(img4, x, y, 250,250);
        tint('white');
        text("Wow", 520,640);
        textSize(40);
        fill('yellow');
		// if( y > height && x > width){
		// 	x = -5;
		// 	y = -5;
		// }

		// Change image & text state on click
    }

}
