var distConvertX = Robocanvas.width/ARENASIZE;
var distConvertY = Robocanvas.height/ARENASIZE;
function fillObstacles(){
	for(i=0;i<15;i++)
	{
		Octx.fillColor = "#FF0000";//set color to red
		Octx.fillRect(i * 10 + 40,i * 10 + 40,6,6);//fill here
	}
}

function fillCubes(){
	for(i=0;i<6;i++)
	{
		Cctx.fillColor = "#00FF00";//set color to green
		Cctx.fillRec(distConvertX * obj.cubes[i].x-3,distConvertY * obj.cubes[i].y-3,6,6);
	}
}

function drawMothership(){
	Mctx.fillColor = "#00FFFF";//set color to teal
	Mctx.fillRect(distConvertX * obj.motherShip[0]-6,obj.motherShip[1]-6,12,12);//fill rectangle
}

function Robotstep()
{
	Rctx.setTransform(1,0,0,1,0,0);//reset transformation
	Rctx.clearRect(0,0,Robocanvas.width,Robocanvas.height);
	Rctx.fillColor = "#FFFFFF";//set color to white
	Rctx.translate(x-(Robocanvas.width)/2,y-(Robocanvas.height/2));//move canvas half the distance, robot will be at the center of this
	Rctx.rotate(Bear);//rotate to new robot bearing
	Rctx.fillRect((Robocanvas.width/2)-5,(Robocanvas.height/2)-5,10,10);//fill in new robot position
}

function pickCube(cubeid)//Removes cube at location
{
	Cctx.clearRect(distConvertX * obj.cubes[cubeid].x-3,distConvertY * obj.cubes[cubeid].y-3,6,6);
}


//start of main
//Creat canvas objects
var Robocanvas = document.getElementById("Rmap");
var Roboctx = Robocanvas.getContext("2d");
var Obscanvas = document.getElementById("Omap");
var Obsctx = Obscanvas.getContext("2d");
var Cubecanvas = document.getElementById("Cmap");
var Cubectx = Cubecanvas.getContext("2d");
var Mothercanvas = document.getElementById("Mmap");
var Motherctx = Mothercanvas.getContext("2d");
//All layers created
//set up locations
fillObstacles();
fillCubes();
drawMothership();
