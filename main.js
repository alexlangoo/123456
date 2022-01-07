
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    canvas= createCanvas(550,550);
    canvas.position(640,100);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('poseNet is initialized');
    
}

function draw()
{
    background('#f8f8ff');
    document.getElementById("font_size").innerHTML="Font Size of the Text will be= "+ difference+"px";
    fill('#ffa500');
    Text('BlockoBean',50, 400);    
    
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX ="+ leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}