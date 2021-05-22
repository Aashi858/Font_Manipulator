noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;
word = "";

function preload(){}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(700,150);

    video = createCapture(VIDEO);
    video.size(400,300);
    video.position(70,170);

    poseNet = ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_poses);
}
function draw(){
    background("#e6b845");

    text(word, noseX, noseY);
    fill("#ed4e4e");
    textSize(difference);
    document.getElementById("size").innerHTML = difference;
}
function model_loaded(){
    console.log("Model is Loaded")
}
function got_poses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        console.log("Nose X :" + noseX);
        noseY = results[0].pose.nose.y;
        console.log("Nose Y :" + noseY);

        leftWrist =  results[0].pose.leftWrist.x;
        rightWrist =  results[0].pose.rightWrist.x;
        console.log("Left_Wrist :" + leftWrist + "," + "Right_Wrist" + rightWrist);
        difference = floor(leftWrist - rightWrist);
        console.log("Difference :" + difference);
    }
}
function display(){
    word = document.getElementById("word").value;
    console.log("Word :" + word);
    document.getElementById("word").value = "";
}