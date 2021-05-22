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
}
function model_loaded(){
    console.log("Model is Loaded")
}
function got_poses(results){
    if(results.length > 0){
        console.log(results);
    }
}