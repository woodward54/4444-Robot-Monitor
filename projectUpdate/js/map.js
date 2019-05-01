var Robocanvas = document.getElementById("Rmap");
var Rctx = Robocanvas.getContext("2d");

var Obscanvas = document.getElementById("Omap");
var Octx = Obscanvas.getContext("2d");

var Cubecanvas = document.getElementById("Cmap");
var Cctx = Cubecanvas.getContext("2d");

var Mothercanvas = document.getElementById("Mmap");
var Mctx = Mothercanvas.getContext("2d");

function fillObstacles(){
	let i;
	Octx.fillStyle = "#FF0000";//select color
	for(i=0;i<15;i++)
	{
		Octx.fillRect(obj.obstacles[i].x-3,obj.obstacles[i].y-3,6,6);//fill here
	}
}

function fillCubes(){
	Cctx.fillStyle = "#00FF00";//set color to green
	Cctx.clearRect(0,0,ARENASIZE,ARENASIZE);
	let i;
	for(i=0;i<6;i++)
	{
		if(obj.cubes[i].pickedUp == false)
		{
			Cctx.fillRect(obj.cubes[i].x-3,obj.cubes[i].y-3,6,6);
		}
	}
}

function drawMothership(){
	Mctx.fillStyle = "#00FFFF";//set color to teal
	Mctx.fillRect(obj.motherShip[0]-15,obj.motherShip[1]-6,30,20);//fill rectangle
}

function Robotstep()
{
	Rctx.setTransform(1,0,0,1,0,0);//reset transformation
	Rctx.clearRect(0,0,Robocanvas.width,Robocanvas.height);
	Rctx.fillStyle = "#FFFFFF";//set color to white
	Rctx.translate(x-(Robocanvas.width)/2,y-(Robocanvas.height/2));//move canvas half the distance, robot will be at the center of this
	Rctx.rotate(Bear);//rotate to new robot bearing
	Rctx.fillRect((Robocanvas.width/2)-5,(Robocanvas.height/2)-5,10,10);//fill in new robot position
}
//start of main
//set up locations
fillObstacles();
setInterval(fillCubes(),30);
drawMothership();
setInterval()
