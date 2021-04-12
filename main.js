function preload()
{

}
function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,160,120,280,250);
    fill(255,0,0);
    stroke(255,0,0);
    circle(60,70,100);

    circle(580,70,100);
    circle(580,420,100);
    circle(60,420,100);

    fill(0,255,0);
    stroke(0,255,0);
    rect(110,60,420,20);
    rect(50,60,20,350);
    rect(110,410,420,20);
    rect(570,60,20,350);
}
function take_snapshot()
{
    save("student.png");
}
 
