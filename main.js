function preload() {
    sg = loadImage("SG.png")
}
sgX= 0
sgY= 0
function setup() {
    canvas = createCanvas(500, 370)
    canvas.position(427, 240)
    //camera starts now
    video = createCapture(VIDEO)
    video.size(500, 370)
    video.hide()
    //poesenet starts here
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes)
}

function modelLoaded() {
    console.log("Model Loaded Successfully!")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        sgX= results[0].pose.nose.x -180
        sgY= results[0].pose.nose.y -120
    }
}

function draw() {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, 500, 370)
    pop()
    image(sg, sgX, sgY, 170, 140)

}
function Save_picture(){
    save("HaRrYs_TwIN.png")
}