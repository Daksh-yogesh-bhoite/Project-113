function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 125, 80, 380, 280);
    rect(60, 20, 40, 400, 20);   
    fill("blue")

    rect(520, 20, 40, 400, 20);   
    fill("yellow")

    rect(60, 20, 500, 40, 400);   
    fill("green")

    rect(60, 380, 500, 40, 400);   
    fill("red")
}

function take_snapshot(){
    save('Happy Birthday natasha');
}


