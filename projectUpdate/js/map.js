function mapObs(){
	var canvas = document.getElementsByClassName("Omap");
	var ctx = canvas.getContext("2d");//create drawing object
	var Ox,Oy,type,Bear;//x position of obstacle, y position of obstacle, type of obstacle,
	
	//TODO: FIGURE OUT HOW TO PULL DATA TO PUT INTO MAP
	switch(type)
	{
		case 0://obstacle
			ctx.fillColor = "#FF0000";//set color to red
			ctx.fillRect(Ox,Oy,5,5);//fill here
			break;
		case 1://cube
			ctx.fillColor = "#0000FF";//set color to blue
			ctx.fillRect(Ox,Oy,5,5);//fill here
			break;
		case 2://mothership
			ctx.fillColor = "#00FFFF";//set color to teal
			ctx.fillRect(Ox,Oy,10,10);//fill here
			break;
	}
}

function mapRob(x,y,Bear)
{
	var canvas = document.getElementsByClassName("Rmap");
	var ctx = canvas.getContext("2d");
	ctx.setTransform(1,0,0,1,0,0);//reset transformation
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillColor = "#FFFFFF";//set color to white
	ctx.translate(x-(canvas.width)/2,y-(canvas.height/2));//move the canvas over
	ctx.rotate(Bear);//rotate to new robot bearing
	ctx.fillRect((canvas.width/2)-5,(canvas.height/2)-5,10,10);//fill in new robot position
}