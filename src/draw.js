var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');
let positionX = 120;
let positionY = 60;
pincel.lineWidth = 5;
//monigote
function drawHead()
{
    pincel.beginPath();
    pincel.arc(positionX+95,positionY+60,30,0,2*Math.PI);
    pincel.stroke();
}
function drawArmRigth()
{
    pincel.beginPath();
    pincel.moveTo(positionX+95,positionY+90)
    pincel.lineTo(positionX+150,positionY+140);
    pincel.stroke();
}
function drawArmLeft()
{
    pincel.beginPath();
    pincel.moveTo(positionX+95,positionY+90)
    pincel.lineTo(positionX+40,positionY+140);
    pincel.stroke();
}
function drawBody()
{
    pincel.beginPath();
    pincel.moveTo(positionX+95,positionY+90)
    pincel.lineTo(positionX+95,positionY+180);
    pincel.stroke();
}
function drawPieLeft()
{
    pincel.beginPath();
    pincel.moveTo(positionX+95,positionY+180)
    pincel.lineTo(positionX+60,positionY+220);
    pincel.stroke();
}
function drawPieRigth()
{
    pincel.beginPath();
    pincel.moveTo(positionX+95,positionY+180)
    pincel.lineTo(positionX+130,positionY+220);
    pincel.stroke();
}

//nose donde se ahorca uno. xd
function pillarPrincipal()
{
    pincel.beginPath();
    pincel.moveTo(positionX,positionY+10)
    pincel.lineTo(positionX,positionY+270);
    pincel.stroke();
}
function suportFloor(posX,posY,dir)
{
    pincel.beginPath();
    pincel.moveTo(positionX+posX,positionY+posY)
    pincel.lineTo(positionX+posX+(20*dir),positionY+posY+30);
    pincel.stroke();
}
function lineToDeath()
{
    pincel.beginPath();
    pincel.moveTo(positionX-3,positionY+10)
    pincel.lineTo(positionX+95,positionY+10);
    pincel.stroke();
}
function lineTie()
{
    pincel.beginPath();
    pincel.moveTo(positionX+94,positionY+8)
    pincel.lineTo(positionX+94,positionY+30);
    pincel.stroke();
}
pillarPrincipal();
suportFloor(0,240,-1);
suportFloor(0,240,1);
lineToDeath();
lineTie();
var draw = 
[
    drawHead,
    drawArmRigth,
    drawArmLeft,
    drawBody,
    drawPieLeft,
    drawPieRigth
]

