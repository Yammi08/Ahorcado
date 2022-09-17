

//monigote
class monigote
{
    constructor(positionX = 120, positionY = 60)
    {
        this.canvas = document.querySelector('canvas');
        this.pincel = this.canvas.getContext('2d');
        this.pincel.lineWidth = 5;
        this.positionX = positionX;
        this.positionY = positionY;
        this.draw = 
        [
            this.drawHead,
            this.drawArmRigth,
            this.drawArmLeft,
            this.drawBody,
            this.drawPieLeft,
            this.drawPieRigth
        ]
        this.pillarPrincipal();
        this.suportFloor(0,240,-1);
        this.suportFloor(0,240,1);
        this.lineToDeath();
        this.lineTie();
    }
    drawHead = ()=>
    {
        console.log(this.pincel);
        this.pincel.beginPath();
        this.pincel.arc(this.positionX+95,this.positionY+60,30,0,2*Math.PI);
        this.pincel.stroke();
    }
    drawArmRigth =()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+95,this.positionY+90)
        this.pincel.lineTo(this.positionX+150,this.positionY+140);
        this.pincel.stroke();
    }
    drawArmLeft =()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+95,this.positionY+90)
        this.pincel.lineTo(this.positionX+40,this.positionY+140);
        this.pincel.stroke();
    }
    drawBody =()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+95,this.positionY+90)
        this.pincel.lineTo(this.positionX+95,this.positionY+180);
        this.pincel.stroke();
    }
    drawPieLeft=()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+95,this.positionY+180)
        this.pincel.lineTo(this.positionX+60,this.positionY+220);
        this.pincel.stroke();
    }
    drawPieRigth=()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+95,this.positionY+180)
        this.pincel.lineTo(this.positionX+130,this.positionY+220);
        this.pincel.stroke();
    }
    
    //nose donde se ahorca uno. xd
    pillarPrincipal=()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX,this.positionY+10)
        this.pincel.lineTo(this.positionX,this.positionY+270);
        this.pincel.stroke();
    }
    suportFloor=(posX,posY,dir)=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+posX,this.positionY+posY)
        this.pincel.lineTo(this.positionX+posX+(20*dir),this.positionY+posY+30);
        this.pincel.stroke();
    }
    lineToDeath=()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX-3,this.positionY+10)
        this.pincel.lineTo(this.positionX+95,this.positionY+10);
        this.pincel.stroke();
    }
    lineTie=()=>
    {
        this.pincel.beginPath();
        this.pincel.moveTo(this.positionX+94,this.positionY+8)
        this.pincel.lineTo(this.positionX+94,this.positionY+30);
        this.pincel.stroke();
    }
}
var ahorcado = new monigote();