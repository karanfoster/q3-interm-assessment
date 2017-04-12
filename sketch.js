
function setup(){
    createCanvas(600,400);
    background(380,200,300);
}
 
function draw(){
    fill(30,200,40);
    rect(200,300,60,70);
    rect(300,200,80,90);
    fill(50,66,100);
    ellipse(100,300,70,70);
    fill(333,444,55);
    ellipse(80,70,70,100);
    
    ellipse(x,50,25,25)
    
    var x = 0;
    while(x<700){
        fill(400,300,200);
        ellipse(x,150,25,25)
        x = x + 20;
    var y = 30;
    while(y<500){
        fill(300,20,200);
        ellipse(y,230,30,30)
        y = y + 20;
    }
    }
    
    if(mouseIsPressed){
        z(mouseX,mouseY);
    }
} 
 
function z (x,y){
    noStroke();
    fill(200,30,100);
    ellipse(mouseX,mouseY,25,25);
} 
