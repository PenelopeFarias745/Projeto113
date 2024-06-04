function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 300);
    circle(10, 10, 100);
    fill(90, 95, 252);
    stroke(90, 95, 252);

    circle(290, 10, 150);
    fill(184, 95, 252);
    stroke(184, 95, 252);

    circle(10, 290, 150);
    fill(240, 95, 252);
    stroke(184, 95, 252);

    circle(290, 290, 100);
    fill(95, 168, 252);
    stroke(95, 168, 252);
}