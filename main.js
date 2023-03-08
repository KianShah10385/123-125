NoseX = 0;
NoseY = 0;

function preload() {
}

function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
}
function take_snapshot() {
save('Class123-125.png');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log("results")
        NoseX = results[0].pose.Nose.x;
        NoseY = results[0].pose.Nose.y;
    }
}
