var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
            {
                createCanvas(500, 600);
            }

            function draw()
            {
                //head
                background(120,45,78); 
                fill('#fae');
                circle(headX,headY,170);
                headX+=headDirection;
                if(headX >= 418 || headX <= 82)
                {
                    headDirection *= -1;
                }

                //eye
                fill(60, 20, 600);
                circle(225,80, 40);
                circle(275,80, 40);

                //pupil
                fill(10);
                circle(225,80, 20);
                circle(275, 80, 20)

                //nose
                fill('red')
                triangle(270, 105, 250, 140, 230, 105);

                //body
                fill('rgba(0,255,0, 0.25)');
                rect(200, bodyY, 120,50);
                bodyY += bodyDirection;
                if(bodyY <= 0 || bodyY >= 450 )
                {
                    bodyDirection *= -1;
                }

                //arms&legs
                fill('rgba(0,255,0, 0.25)');
                rect(190, 189, 130,200);
                rect(70, 200, 120,50);
                rect(190, 389, 50,180);
                rect(270, 389, 50,180);

                //smile
                line(200, 130, 230, 160);
                line(230, 160, 270, 160);
                line(270, 160, 295, 130);

                //freckles
                fill(10);
                point(220, 120);
                point(278, 120);
                point(270, 130);
                point(230, 130);
                point(212, 130);
                point(285, 130);

                //hair
                fill(10);
                line(220, 20, 160, 190);
                line(210, 25, 150, 190);
                line(200, 30, 140, 190);
                line(190, 40, 130, 190);

                line(280, 20, 340, 190);
                line(290, 25, 350, 190);
                line(300, 30, 360, 190);
                line(310, 40, 370, 190);

                fill(10);
                textSize(size);
                size+= sizeDirection;
                count++;
                if(count > 5)
                {
                    sizeDirection *=-1;
                    count = 0;
                }
                text('Self Portrait', 10, 30);

                fill(10);
                textSize(size);
                size+= sizeDirection;
                count++;
                if(count > 5)
                {
                    sizeDirection *=-1;
                    count = 0;
                }
                text('MacKenzie Dean', 340, 580);

                

                
            }