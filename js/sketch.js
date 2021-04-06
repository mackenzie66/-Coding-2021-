// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}


function draw()
{
    background(160,80,180);
    stroke(0);
    fill(0);
    
    //call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

   //createCharacter(200,350);
    drawCharacter();
   characterMovement(); 

   //create the shape based on the mouse click
   createShape();
    
    // check to see if the character has left the exit
    youWin();

    // potential enemy
    fill(90,30,300);

    // draw the shape
    circle(shapeX, shapeY, 15);

     // get a random speed when the it first starts
     circleSpeed();


    // move the shape
    moveShape();

    // check to see if the shape has gone out of bounds
    shapeOutside();

    
}
    function shapeOutside()
    {
        if(shapeX > width)
        {
            shapeX = 0;
        }
        if(shapeX < 0)
        {
            shapeX = width;
        }
        if(shapeY > height)
        {
            shapeY = 0;
        }
        if(shapeY < 0)
        {
            shapeY = height;
        }
    }

    function moveShape()
    {
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    }

    function circleSpeed()
    {
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }


    function youWin()
    {
        if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    }

    function createShape()
    {
        fill(12,12,40);
        circle(mouseShapeX, mouseShapeY, 25); 
    }

    function characterMovement()
    {
        // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10; 
        console.log("movement: " + characterX);  
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
    }

    function createCharacter(x,y)
    {
        characterX = x;
        characterY = y;
        console.log(characterX);
     //character
    
    //square(characterX,characterY,30);
    }


    function drawCharacter()
    {
        fill(26,300,10);
        square(characterX,characterY,30);
    }
    function createBorders(thickness)
{
     // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);  
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}