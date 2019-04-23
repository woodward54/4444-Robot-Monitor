//Check for mobile device
//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 //document.getElementById("mobile").style.visibility="visible"
//} else {

// Initial Setup
const canvas0 = document.getElementById('layer0')
const c0 = canvas0.getContext('2d')
canvas0.width = innerWidth
canvas0.height = innerHeight

const canvas = document.getElementById('layer1')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

//layer above html
const canvas2 = document.getElementById('layer2')
const c2 = canvas2.getContext('2d')
canvas2.width = innerWidth
canvas2.height = innerHeight

// Create an offscreen canvas for transition process
const offscreenCanvas = document.createElement('canvas')
const offscreenContext = offscreenCanvas.getContext("2d")
offscreenCanvas.height = innerHeight
offscreenCanvas.width = innerWidth




// Variables
let mouse = {
    toggle: false,
    x: innerWidth / 2,
    y: innerHeight / 2,
    dx: 0,
    dy: 0
}

let menuclicked = false
let currentPage = "Home"
let inTransition = false
let site_loaded = false
//home
const vertsScale = 20;
const spinFactor = -.03;
/*const nearConstant = 3
const nearConstantSpawn = 4
const numofparticles = 1000
const initalspeed = 1.1
const radius = 2
const increaseTransDistance = 50
const minTransValue = 90*/
const tracesColor = "#909196"
const color_gray = "#1f2021"
const color_ltgray = "#131516"
const color_ltltgray = "#3A3C3E"
const color_dkblue = "#2c59a0"
//contact
let numOfRain
const rainColor = "66,134,244"

//projects
let numofprojects = 6
//about
let numofaboutparticles

// Event Listeners
addEventListener('mousemove', event => {
    var prevx = mouse.x
    var prevy = mouse.y

    mouse.x = event.clientX
    mouse.y = event.clientY
    mouse.dx = mouse.x-prevx
    mouse.dy = mouse.y-prevy
})
addEventListener("touchstart", getTouchCoords, false);
addEventListener("touchend", clickEvent, false);
//addEventListener("touchcancel", handleCancel, false);
//addEventListener("touchmove", handleMove, false);
addEventListener('click', clickEvent);
function getTouchCoords(event) {
  var touch = event.changedTouches;
  mouse.x = touch.pageX;
  mouse.y = touch.pageY;
  clickEvent();
}
function clickEvent() {
  mouse.toggle = !mouse.toggle;
  //home spawn bullet
  if (currentPage == 'Home' && !inTransition && !menuclicked && distance(mouse.x,mouse.y,innerWidth-75,75) > 30) {
    //old bullet code
      // var coneGeometry = new THREE.ConeBufferGeometry( .5, 2, 6 );
      // var coneMaterial = new THREE.MeshBasicMaterial({
      //   color: 0xfc2e8,
      //   fog: false,
      //   flatShading: false,
      //   wireframe: true
      // });
      // var cone = new THREE.Mesh( coneGeometry, coneMaterial );
      // cone.lookAt(new THREE.Vector3(0,5,0));
      // cone.rotateX = 180;
      //
      // //set inital position relative to terrian
      // dConversion = 100;
      // var correctedX = (mouse.x-cx)/dConversion;
      // var correctedY = (innerHeight-mouse.y-cy+100)/dConversion;
      // cone.position.set(pivot.children[1].position.x+correctedX,pivot.children[1].position.y+correctedY,pivot.children[1].position.z-6);
      // //cone.position.set(terrianGroup.children[0].position.x+correctedX,terrianGroup.children[0].position.y+correctedY+camera.position.y, terrianGroup.children[0].position.z);
      //
      // //bullet is now a child of pivot
      // pivot.add(cone);
      // collidableMeshList.push(cone);
  }
  //projects arrows
  if (currentPage == 'Projects') {

  }
  //menuclicked
   if (distance(mouse.x,mouse.y,innerWidth-75,75) <= 28){
     menuclicked = !menuclicked
   }
   //contact icon links
   if (currentPage == "Contact" && distance(mouse.x,mouse.y,umbrella.x+75,umbrella.y+75) > 75
      /*&& mouse.y > umbrella.y+75 */ && menuclicked==false){
     //link variables
     if (mouse.x < innerWidth/5 && document.body.style.cursor == "pointer"){
      window.open('https://www.facebook.com/david.woodward.18', '_blank')
    } else if(mouse.x > innerWidth/5 && mouse.x < 2*innerWidth/5  && document.body.style.cursor == "pointer"){
       window.open('https://github.com/woodward54', '_blank')
     } else if(mouse.x > 2*innerWidth/5 && mouse.x < 3*innerWidth/5 && document.body.style.cursor == "pointer"){
       window.open('https://www.linkedin.com/in/davidwoodward1/', '_blank')
     } else if(mouse.x > 3*innerWidth/5 && mouse.x < 4*innerWidth/5){
       //email (does nothing)
     } else if(document.body.style.cursor == "pointer") {
       window.open('https://www.instagram.com/astra__music/', '_blank')
     }
   }

   //word links
   if (menuclicked){
     if (mouse.x>cx-95 && mouse.x<cx+95 && mouse.y>word1y-60 && mouse.y<word1y+5){
       if (currentPage != "Home"){
         console.log("home")
         inTransition = true
         currentPage = "Home"
         document.getElementById("title").innerHTML = "DW | Home"
         init()
         menuclicked = false
       }
     }
     if (mouse.x>cx-105 && mouse.x<cx+105 && mouse.y>word2y-60 && mouse.y<word2y+5){
       if (currentPage != "About"){
         console.log("about")
         inTransition = true
         currentPage = "About"
         document.getElementById("title").innerHTML = "DW | About"
         init()
         menuclicked = false
      }
     }
     if (mouse.x>cx-135 && mouse.x<cx+135 && mouse.y>word3y-60 && mouse.y<word3y+10){
       if (currentPage != "Projects"){
         console.log("projects")
         inTransition = true
         currentPage = "Projects"
         document.getElementById("title").innerHTML = "DW | Projects"
         init()
         menuclicked = false
      }
     }
     if (mouse.x>cx-135 && mouse.x<cx+135 && mouse.y>word4y-60 && mouse.y<word4y+5){
       if (currentPage != "Contact"){
         console.log("contact")
         inTransition = true
         currentPage = "Contact"
         document.getElementById("title").innerHTML = "DW | Contact"
         init()
         menuclicked = false
     }
    }
  }
}

addEventListener('resize', () => {

    //animatevar = false
      canvas.width = innerWidth
      canvas.height = innerHeight
      canvas0.width = innerWidth
      canvas0.height = innerHeight
      canvas2.width = innerWidth
      canvas2.height = innerHeight
      offscreenCanvas.height = innerHeight
      offscreenCanvas.width = innerWidth

      init()
      //add pause animation function
})

addEventListener('keydown', e => {

})

//click and drag
var dragFlag = 1; //1:up,0:down,.5:draging
addEventListener("mousedown", function(){
    dragFlag = 0;
}, false);
addEventListener("mousemove", function(){
  if (dragFlag < 1){
    dragFlag = .5
  }
}, false);
addEventListener("mouseup", function(){

    dragFlag = 1;
}, false);

//change html functions
function hideHomeHtml() {
  document.getElementById("home").style.visibility="hidden";
}

function hideAboutHtml() {
  document.getElementById("about").style.visibility="hidden";
}

function hideProjectsHtml() {
  document.getElementById('projects').style.visibility="hidden";
}

function showAboutHtml() {
  document.getElementById("about").style.visibility="visible";
}

function showProjectsHtml() {
  document.getElementById('projects').style.visibility="visible";
}
// Utility Functions
var mousePointer = false

function print2Window(data) {
  var image = new Image();
  image.src = "data:image/jpg;base64," + data.d;

  var w = window.open("", '_blank');
  w.document.write(image.outerHTML);
}

function changeMouseStyle(type) {
  if (type == 1){
    document.body.style.cursor = "pointer";
  } else {
    document.body.style.cursor = "auto";
  }
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// function shiftArrayToRight(arr, places) {
//     for (var i = 0; i < places; i++) {
//         arr.unshift(arr.pop());
//     }
// }

// let traceArray
// function makeTraceArray() {
//   traceArray = []

//first Implementation, checks every single pixel. took approx 5mins
  // for (x = 0;x < innerWidth;x++){
  //   for (y = 0; y < innerHeight;y++){
  //
  //     var pixelData = c.getImageData(x, y, 1, 1).data;
  //     var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
  //     var xy = {
  //       x: x,
  //       y: y
  //     }
  //     //console.log("x: "+ xy.x + ", x: " + xy.y + ", Hex: " +hex )
  //
  //     if (hex == "#b0b1b3") {
  //       traceArray.push(xy)
  //     }
  //   }
  // }
  // console.log(traceArray.length)

//second implemtation, using floodfill algrothim
  //test random pixels until one is correct color
  //   var x = Math.floor(Math.random()*innerWidth)
  //   var y = Math.floor(Math.random()*innerHeight)
  //
  //   var pixelData = c.getImageData(x, y, 1, 1).data;
  //       var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
  //       var xy = {
  //         x: x,
  //         y: y,
  //         visited: true
  //       }
  //
  //     if (hex == "#b0b1b3") {
  //        traceArray.push(xy)
  //      }
  // }

// Home Page ---------------------------------------

//old code
  // let StuckXArrayx = [0,0,0,0,0]
  // let StuckXArrayy = [0,0,0,0,0]
  // function isStuck(x,y){
  //   this.x = Math.floor(x)
  //   this.y = Math.floor(y)
  //
  //   shiftArrayToRight(StuckXArrayx,1)
  //   StuckXArrayx[0] = this.x
  //   shiftArrayToRight(StuckXArrayy,1)
  //   StuckXArrayy[0] = this.y
  //
  //   if (StuckXArrayx[0] == StuckXArrayx[4] && StuckXArrayy[0] != StuckXArrayy [4]) {
  //     return true
  //   } else if (StuckXArrayy[0] == StuckXArrayy[4] && StuckXArrayx[0] != StuckXArrayx[4]){
  //     return true
  //   } else if (StuckXArrayx[0] == StuckXArrayx[4] && StuckXArrayy[0] == StuckXArrayy[4]){
  //     return true
  //   }
  // }
  // function teleportParticle() {
  //   var choice = randomIntFromRange(1,5)
  //   var xyarray = []
  //   switch (choice) {
  //     case 1:
  //       xyarray[0] = 5
  //       xyarray[1] = innerHeight/2+55
  //       break;
  //     case 2:
  //       xyarray[0] = 50
  //       xyarray[1] = 50
  //       break;
  //     case 3:
  //       xyarray[0] = 50
  //       xyarray[1] = 50
  //       break;
  //     case 4:
  //       xyarray[0] = 50
  //       xyarray[1] = 50
  //       break;
  //     case 5:
  //       xyarray[0] = 50
  //       xyarray[1] = 50
  //       break;
  //     default:
  //   }
  //   return xyarray
  // }

function isNearRight(x,y,nearVariable){

    this.nearVariable = nearVariable
    this.x = Math.floor(x);
    this.y = Math.floor(y);

    var index = (this.y*innerWidth)+(this.x+this.nearVariable)

    if (rdata[Math.floor(index)] == 19 || rdata[Math.floor(index)] == 0) {
      return true;
    }
}

function isNearLeft(x,y,nearVariable){

  this.nearVariable = nearVariable
  this.x = Math.floor(x);
  this.y = Math.floor(y);

  var index = (this.y*innerWidth)+(this.x-this.nearVariable)

  if (rdata[Math.floor(index)] == 19 || rdata[Math.floor(index)] == 0) {
    return true;
  }
}

function isNearTop(x,y,nearVariable){

  this.nearVariable = nearVariable
  this.x = Math.floor(x);
  this.y = Math.floor(y);

  var index = ((this.y+this.nearVariable)*innerWidth)+(this.x)

  if (rdata[Math.floor(index)] == 19 || rdata[Math.floor(index)] == 0) {
    return true;
  }
}

function isNearBottom(x,y,nearVariable){

  this.nearVariable = nearVariable
  this.x = Math.floor(x);
  this.y = Math.floor(y);

  var index = ((this.y-this.nearVariable)*innerWidth)+(this.x)

  if (rdata[Math.floor(index)] == 19 || rdata[Math.floor(index)] == 0) {
    return true;
  }
}

function isNearBlack(x,y){
  this.x = Math.floor(x)
  this.y = Math.floor(y)


   if (this.x<=(innerWidth/2+145) && this.x>=(innerWidth/2-145) && this.y>(innerHeight/2-145) && this.y<(innerHeight/2+145)){
       return true
     }
  if (this.x>=(innerWidth/2-145) && this.x<=(innerWidth/2+145) && this.y>(innerHeight/2-145) && this.y<(innerHeight/2+145)) {
       return true
     }
  //  if (this.y>=(innerHeight/2-140) && this.x>(innerWidth/2-140) && this.x<(innerWidth/2+140)) {
  //    return true
  //  }
  //  if (this.y<=(innerHeight/2+140) && this.x>(innerWidth/2-140) && this.x<(innerWidth/2+140)){
  //    return true
  //  }
   if (this.x <= 7 || this.x >= innerWidth-7){
     return true
   }
   if (this.y <= 7 || this.y >= innerHeight-7){
     return true
   }
}

function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

function onTrace(x,y){
  this.x = Math.floor(x)
  this.y = Math.floor(y)

  var index = this.y*innerWidth+this.x

  if (rdata[index] == 144){
    return true
  }
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

//Home Page ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var scene
var camera
var renderer
let geom
var heightMap;
var geometry;
var pivot = new THREE.Group();
let composer;
let glitchPass;
function homeinit() {
  //three.js initalization

  //scene
  scene = new THREE.Scene();
  //scene.background = new THREE.Color( 0xbfd1e5 );
  scene.background = new THREE.Color( color_ltltgray );

  //camera
  camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 55;
  camera.position.y = 8;
  camera.position.x = 30;

  /* Fog + Lighting */
  scene.fog = new THREE.Fog(0x000, 0, 100);
	;(function(){
		// add a ambient light
		var light	= new THREE.AmbientLight( 0x102020 )
		scene.add( light )
		// add a light in front
		var light	= new THREE.DirectionalLight('white', 5)
		light.position.set(0.5, 0.0, 2)
		scene.add( light )
		// add a light behind
		var light	= new THREE.DirectionalLight('white', 0.75*2)
		light.position.set(-0.5, -0.5, -2)
		scene.add( light )
	 })()

  //renderer
  renderer = new THREE.WebGLRenderer({antialias: true});
  //renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  numOfXVerts = innerWidth/vertsScale;
  numOfYverts = innerHeight/vertsScale;

  //create terrian
  heightMap	= THREEx.Terrain.allocateHeightMap(175,200);
  THREEx.Terrain.simplexHeightMap(heightMap);
  geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap);
  var bufferGeometry = new THREE.BufferGeometry().fromGeometry(geometry);
  THREEx.Terrain.heightMapToVertexColor(heightMap, geometry);
  var material = new THREE.MeshBasicMaterial({wireframe: true});
  terrian = new THREE.Mesh(bufferGeometry, material);
  terrian.lookAt(new THREE.Vector3(0,5,0));
  terrian.scale.z = 0.30;
  terrian.scale.y	= 2.5;
  terrian.scale.x	= 5;
  terrian.scale.multiplyScalar(50);

  //add bullet spawn cube mesh, position 4
  var geometry2 = new THREE.BoxBufferGeometry( 1, 1, 1 );
  var material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  var cube = new THREE.Mesh( geometry2, material2 );
  cube.lookAt(new THREE.Vector3(0,5,0));
  cube.position.set(camera.position.x,camera.position.y,camera.position.z);

  scene.add(pivot);
  pivot.add(terrian);
  pivot.add(cube);

  //Unreal Bloom
    // var renderScene = new THREE.RenderPass( scene, camera );
    // var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    // bloomPass.renderToScreen = true;
    // bloomPass.threshold = .5;
    // bloomPass.strength = 1;
    // bloomPass.radius = 1;
    // renderer.toneMappingExposure = 2;
    // composer = new THREE.EffectComposer( renderer );
    // composer.setSize( window.innerWidth, window.innerHeight );
    // composer.addPass( renderScene );
    // composer.addPass( bloomPass );
    // renderer.toneMapping = THREE.ReinhardToneMapping;
    // scene.add( new THREE.AmbientLight( 0x404040 ) );
  	// pointLight = new THREE.PointLight( 0xffffff, 1 );
  	// camera.add( pointLight );

  //Glitch Pass
    composer = new THREE.EffectComposer( renderer );
    composer.addPass(new THREE.RenderPass( scene, camera ) );
    glitchPass = new THREE.GlitchPass();
    glitchPass.renderToScreen = true;
    composer.addPass( glitchPass );
    console.log(glitchPass);

}

function homeWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    composer.setSize( window.innerWidth, window.innerHeight );
}

var davidLoaded = false;
var transDavid = -.4;
var axis = new THREE.Vector3(0,0,0);
var rad;
var rotateAroundWorldAxis = function(object, axis, radians) {
  var rotation = new THREE.Quaternion();
  rotation.setFromAxisAngle ( axis, radians );
  object.quaternion.multiply(rotation);
}

function homeUpdate() {
  //FUTURE: add raytracing, on click make lines light up blue
  //https://threejs.org/examples/#webgl_geometry_terrain_raycast
  //fade in David Woodward
  if (!davidLoaded) {
    transDavid += .005;
    if (Math.round(transDavid*100)/100 == .83) {
      davidLoaded = true;
    }
  }
  if (transDavid > 0) {
    loadDavid(transDavid);
  }

  pivot.children[0].rotation.z += 0.021*spinFactor;
  homeRender();
}


function homeRender() {
  //postprocessing
  if (menuclicked)  {
    renderer.render(scene, camera);
  } else {
    composer.render();
  }
  //regular render
  //renderer.render(scene, camera);
}

let cGL;
function loadDavid(trans) {
  c2.save();
  c2.globalAlpha = trans;
  c2.clearRect(0,0,innerWidth,innerHeight);
  c2.font = 'Bold 60px Gruppo Font';
  c2.fillStyle = 'rgba('+tracesColor+')'
  //c2.globalAlpha = 1;
  //c2.globalCompositeOperation = 'xor';
  //var imgData = offscreenContext.getImageData(cx,cy+100,100,100);
  //window.open(imgData.src, '_blank');
  //print2Window(imgData.data);
  //debugger;
  //c2.putImageData(imgData,cx,cy+100);
  //c2.drawImage(cGL.canvas,0,0);
  c2.fillText('DAVID WOODWARD',cx,cy);
  c2.restore();
}


//old code
/*
function Cpu(x,y,red,green,blue){
  this.x = x
  this.y = y
  this.red = red
  this.orgred = red
  this.green = green
  this.orggreen = green
  this.blue = blue
  this.orgblue = blue

  this.update = () => {
    //closer to 0,0,255
  if (!menuclicked){
    if (distance(mouse.x,mouse.y,this.x,this.y) < increaseTransDistance){
      if (this.blue < 245){
        this.blue += 10
      }
      if (this.red > 9){
        this.red -= 10
      }
      if (this.green > 9){
        this.green -= 10
      }
    }
    //closer to 176,177,179
    else {
      if (this.blue > 182){
        this.blue += -4
      }
      if (this.red < 173){
        this.red += 4
      }
      if (this.green < 173){
        this.green += 4
      }
    }

  } else {
    this.red = this.orgred
    this.green = this.orggreen
    this.blue = this.orgblue
  }
  this.draw()
  }

  this.draw = () => {
    //console.log('rgb('+this.red+','+this.green+','+this.blue+')')
    c.fillStyle = 'rgb('+this.red+','+this.green+','+this.blue+')'
    c.beginPath();
    c.fillRect(this.x,this.y,5,5);
    c.stroke();
   }
}

function Particle(x, y, radius, color, trans) {

    var dx = (Math.random() - 0.5) * initalspeed
    var dy = (Math.random() - 0.5) * (initalspeed-.3)
    var ontrace = false
    var ontraceCounter = 0
    var isStuckXCounter = 0
    var nearblackcounter = 0
    var colortrans
    this.color = color
    this.trans = trans
    this.minTrans = trans
    this.x = Math.floor(x)
    this.y = Math.floor(y)
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.update = function() {
       //bounce
       if (ontrace == true){

         //is stuck algrothim
        //  if (isStuck(this.x,this.y)){
        //    var xyreturn = teleportParticle()
        //    this.x = xyreturn[0]
        //    this.y = xyreturn[1]
        //  }
         if (isNearRight(this.x,this.y,nearConstant) || isNearLeft(this.x,this.y,nearConstant)) {
           this.dx = -this.dx
         }
         if (isNearTop(this.x,this.y,nearConstant) || isNearBottom(this.x,this.y,nearConstant)){
           this.dy = -this.dy
         }
       }
       //particle update code if not on a trace
       else {
         if (onTrace(this.x,this.y)){
           ontraceCounter++
           if (ontraceCounter==4){
             ontrace = true
             this.dx = (Math.random() - 0.5) * initalspeed * .5
             this.dy = (Math.random() - 0.5) * initalspeed * .5
           }
         }
         if (isNearBlack(this.x,this.y)){

           if (this.x < 10 || this.x > innerWidth-10){
             this.dx = -this.dx
           } else if (this.y < 10 || this.y > innerHeight -10) {
             this.dy = -this.dy
           } else {
             this.dx = -this.dx
             this.dy = -this.dy
           }
         }
         //increase particle speed
         if (this.dy < 0 && Math.abs(this.dy) < 5){
            this.dy -= .007
         } else if (this.dy < 5 && this.dy < 5) {
           this.dy += .007
         }
         if (this.dx < 0 && Math.abs(this.dx) < 5){
           this.dx -= .015
         } else if (this.dx < 5 && this.dy < 5){
           this.dx += .015
         }


         //increase particle speed with gravity -- USE FOR SOMETHING ELSE, really
         //cool effect, but doesnt fit this application
         // if (this.x >= innerWidth/2){
         //   this.dx += .012
         // } else {
         //   this.dx -= .012
         // }
         // if (this.y >= innerHeight/2){
         //   this.dy += .01
         // } else {
         //   this.dy -= .01
         // }
       }

        this.x += this.dx
        this.y += this.dy

        //mouse interactivity

        if (distance(mouse.x,mouse.y,this.x,this.y) < increaseTransDistance){
          if (this.trans < 245){
            this.trans += 17
            //console.log(distance(mouse.x,mouse.y,this.x,this.y))
          }
        } else if (this.trans > this.minTrans){
          this.trans += -17
          //console.log("trans shrink")
        }

        //this doesnt work on crome mac? maybe doesnt like the trans tacked on the end of the hex value?
        //colortrans = this.color.concat(this.trans.toString(16))

        this.draw()

    }

    this.draw = () => {
        var tempcolor = hexToRgb(this.color)
        var newtrans = convertRange(this.trans,[0,255],[0,1])
        colortrans = 'rgba('+tempcolor.r+','+tempcolor.g+','+tempcolor.b+','+newtrans+')'
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = colortrans
        //c.shadowBlur=2
        //c.shadowColor="#6699ff"
        c.fill()
        c.closePath()
    }
}

var cx
var cy
function Static() {
  //static

  var dx = 0
  var dw1 = -10
  var dw2 = 20
  this.draw = () => {
    //c.shadowBlur=0
    //c.shadowColor="white"

    //background
    c0.fillStyle = "#131516";
    c0.fillRect(0,0,innerWidth,innerHeight);

    //traces style
    //c.fillStyle = "#b0b1b3";
    c0.fillStyle = tracesColor;
    c0.lineWidth=10;
    c0.strokeStyle = tracesColor;

    //to cpu left
    c0.fillRect(0,innerHeight/2+50,innerWidth/2,10);
    //bend top left
    c0.beginPath();
    c0.moveTo(0,innerHeight/2-65);
    c0.lineTo(innerWidth/2-220,innerHeight/2-65);
    c0.lineTo(innerWidth/2-100,innerHeight/2-200);
    c0.lineTo(innerWidth/2-100,0)
    c0.stroke();
    //hole to hole top left bend
    c0.beginPath();
    c0.arc(innerWidth/2-350,innerHeight/2-275,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(innerWidth/2-775,innerHeight/2-175,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.moveTo(innerWidth/2-365,innerHeight/2-275);
    c0.lineTo(innerWidth/2-600,innerHeight/2-275);
    c0.lineTo(innerWidth/2-767,innerHeight/2-180);
    c0.stroke();
    //hole to hole top left straight
    c0.beginPath();
    c0.arc(innerWidth/2-220,innerHeight/2-175,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(innerWidth/2-535,innerHeight/2-175,15,0,2*Math.PI);
    c0.stroke();
    c0.fillRect(innerWidth/2-520,innerHeight/2-180,285,10);
    //top left line
    c0.beginPath();
    c0.moveTo(cx-250,0);
    c0.lineTo(cx-250,cy-375);
    c0.lineTo(cx-700,cy-375);
    c0.lineTo(cx-820,cy-300);
    c0.lineTo(cx-1000,cy-300);
    c0.stroke();
    //angle off bottom left cpu
    c0.beginPath();
    c0.moveTo(cx-120,cy+83);
    c0.lineTo(cx-220,cy+150);
    c0.lineTo(cx-220,cy+280);
    c0.lineTo(cx-140,cy+340);
    c0.lineTo(cx-140,innerHeight);
    c0.stroke();
    //left to cpu with holes
    c0.beginPath();
    c0.arc(cx-600,cy-5,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(cx-300,cy-5,15,0,2*Math.PI);
    c0.stroke();
    c0.fillRect(cx-1000,cy-10,385,10);
    c0.fillRect(cx-290,cy-10,170,10);
    //hole upto cpu
    c0.beginPath();
    c0.arc(cx-40,cy+325,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.moveTo(cx-40,cy+310);
    c0.lineTo(cx-40,cy+20);
    c0.stroke();
    //line upto cpu
    c0.fillRect(cx+55,cy+50,10,500);
    c0.stroke();
    //line starting bottom right cpu
    c0.beginPath();
    c0.moveTo(cx+120,cy+83);
    c0.lineTo(cx+250,cy+180);
    c0.lineTo(cx+780,cy+180);
    c0.lineTo(cx+1000,cy+280);
    c0.stroke();
    //bottom left to hole
    c0.beginPath();
    c0.arc(cx-400,cy+200,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.moveTo(cx-1000,cy+200);
    c0.lineTo(cx-800,cy+200);
    c0.lineTo(cx-750,cy+150);
    c0.lineTo(cx-600,cy+150);
    c0.lineTo(cx-550,cy+200);
    c0.lineTo(cx-410,cy+200);
    c0.stroke();
    //bottom left line
    c0.beginPath();
    c0.moveTo(0,cy+300);
    c0.lineTo(cx-380,cy+300);
    c0.lineTo(cx-220,innerHeight+20);
    c0.stroke();
    //hole to hole bottom left bend
    c0.beginPath();
    c0.arc(cx-450,cy+400,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(cx-850,cy+400,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.moveTo(cx-465,cy+400);
    c0.lineTo(cx-840,cy+400);
    c0.stroke();
    //bottom right hole to hole
    c0.beginPath();
    c0.arc(cx+150,cy+220,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(cx+280,cy+400,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.moveTo(cx+157,cy+230);
    c0.lineTo(cx+272,cy+390);
    c0.stroke();
    //bottom right line
    c0.beginPath();
    c0.moveTo(cx+375,innerHeight);
    c0.lineTo(cx+375,cy+275);
    c0.lineTo(cx+600,cy+275);
    c0.lineTo(cx+700,cy+375);
    c0.lineTo(cx+1000,cy+375);
    c0.stroke();
    //bottom right off screen to hole
    c0.beginPath();
    c0.arc(cx+520,cy+360,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.moveTo(cx+520,cy+370);
    c0.lineTo(cx+520,cy+1000);
    c0.stroke();
    //line right
    c0.fillRect(cx+55,cy-60,1000,10);
    c0.stroke();
    //start top right cpu
    c0.beginPath();
    c0.moveTo(cx+130,cy-90);
    c0.lineTo(cx+300,cy-300);
    c0.lineTo(cx+500,cy-300);
    c0.lineTo(cx+775,-20);
    c0.stroke();
    //right edge to hole
    c0.beginPath();
    c0.arc(cx+400,cy+65,15,0,2*Math.PI);
    c0.stroke();
    c0.fillRect(cx+410,cy+60,1000,10);
    c0.stroke();
    //cpu to hole right side
    c0.beginPath();
    c0.arc(cx+250,cy+35,15,0,2*Math.PI);
    c0.stroke();
    c0.fillRect(cx,cy+30,240,10);
    c0.stroke();
    //off top of cpu, turn right to hole
    c0.beginPath();
    c0.fillRect(cx-30,cy-100,10,-300);
    c0.fillRect(cx-30,cy-400,400,10);
    c0.arc(cx+385,cy-395,15,0,2*Math.PI);
    c0.stroke();
    //top left hole to hole
    c0.beginPath();
    c0.arc(cx+80,cy-185,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(cx+80,cy-325,15,0,2*Math.PI);
    c0.fillRect(cx+75,cy-195,10,-120);
    c0.stroke();
    //top right hole to hole
    c0.beginPath();
    c0.arc(cx+350,cy-170,15,0,2*Math.PI);
    c0.stroke();
    c0.beginPath();
    c0.arc(cx+800,cy-170,15,0,2*Math.PI);
    c0.fillRect(cx+360,cy-175,425,10);
    c0.stroke();
    //cpu
    c0.fillStyle = "#000000";
    c0.fillRect(innerWidth/2-135,innerHeight/2-135,270,270);

      for (var i=0; i < cpu.length; i++){
        cpu[i].update()
      }

    c.fillStyle = color_ltltgray;
    c.fillRect(innerWidth/2-100,innerHeight/2-100,200,200);
    c.fillStyle = "#131516";

    c.beginPath()
    c.textAlign = "start"
    c.font="bolder 25px Verdana";
    c.fillText("DAVID",innerWidth/2-48,innerHeight/2-50);
    c.fillText("WOODWARD",innerWidth/2-90,innerHeight/2-15);

    //DW logo
    c.beginPath()
    c.strokeStyle = "rbg(219,219,219)"
    c.lineWidth = 3
    if (!menuclicked){
      if (mouse.x >= cx-55 && mouse.x <= cx+55 && mouse.y >= cy+10 && mouse.y < cy+55){
        if (dx < 45){
          if (dx > 38){
            dx +=1
          } else {
            dx += 8
          }
        }
        if (dx > 35 && dw1 < 5){
          dw1 +=2.5
        }
        if (dw1 > 2 && dw2 < 54){
          dw2 +=6
        }
      } else {
        if (dx > 0){
          if (dx < 5) {
            dx -=1
          } else{
            dx -=4
          }
        }
        if (dw1 > -10){
          dw1 -=1.5
        }
        if (dw2 > 20){
          if (dw2 < 25){
            dw2-=1
          } else{
          dw2 -=2.5
        }
        }
      }
    }
    //d
    c.moveTo(innerWidth/2-55,innerHeight/2+10)
    c.lineTo(innerWidth/2-55,innerHeight/2+55)
    c.lineTo(cx-(55-dx),cy+55)
    c.moveTo(innerWidth/2-55,innerHeight/2+10)
    c.lineTo(innerWidth/2-10,innerHeight/2+55)

    //w
    c.lineTo(cx+dw1,cy+(convertRange(dw1,[-10,5],[55,35])))  //cx-10,cy+55 -> cx+5,cx+35
    c.moveTo(cx+5,cy+35)
    c.lineTo(cx+20,cy+55)
    c.lineTo(cx+dw2,cy+(convertRange(dw2,[20,55],[55,10])))
    c.stroke()

  } //this.draw
}

// function Pulldown() {
//
//   var pulldownback = 0
//
//   this.revupdate = () => {
//     if (pulldownback > 0){
//       pulldownback -= 20
//     }
//     this.draw()
//   }
//   this.update = () => {
//     if (pulldownback < innerHeight-22){
//       pulldownback += 20
//     } else if (pulldownback != innerHeight){
//       pulldownback += 1
//     }
//     if (pulldownback == innerHeight){
//       menuopened = true
//     } else {
//       menuopened = false
//     }
//     if (menuclicked == false && menuopened == true){
//       pulldownback -=5
//     }
//
//     this.draw()
//   }
//   this.draw = () => {
//     c.fillStyle = "rgba(0,0,0,.8)"
//     //c.fillRect(0,0,innerWidth,pulldownback)
//     c.fillRect(0,0,innerWidth,innerHeight)
//   }
// }

// Implementation
let particles
let stati
let cpu
let pulldown
var rdata

function homeinit() {
  stati = new Static()
  cpu = []

  //cpu traces
  for (var x=innerWidth/2-125;x<(innerWidth/2+120);x+=9){
    for (var y=innerHeight/2-125; y<(innerHeight/2+120);y+=9){
      //c.fillStyle = "#b0b1b4";
      cpu.push(new Cpu(x,y,176,177,179))

    }
  }
  stati.draw()

  imageData = c0.getImageData(0,0,innerWidth,innerHeight)

  var buf = new ArrayBuffer(imageData.data.length);
  var buf8 = new Uint8ClampedArray(buf);
   rdata = new Uint8Array(buf);
  for (var y = 0; y < innerHeight; ++y) {
    for (var x = 0; x < innerWidth; ++x) {
      rdata[y*innerWidth+x] = imageData.data[(y*innerWidth+x)*4]
      }
  }
  imageData.data.set(buf8);
}

// function initparticles() {
//     particles = []
//     //draw particles on the traces
//
//       for (let i = 0; i < numofparticles; i++) {
//            //yellow test color
//           //const color = "#00fffa";
//           var moveon = false;
//
//           //need new way to generate particles
//           while (moveon != true){
//             var x = randomIntFromRange(0,innerWidth); //floating point??
//             var y = randomIntFromRange(0,innerHeight);
//             var color = "#0066ff"
//             var trans = randomIntFromRange(minTransValue,150)
//             var pixelData = c.getImageData(x, y, 1, 1).data;
//             var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
//
//
//             if (hex == "#b0b1b3") {
//               if (isNearRight(x,y,nearConstantSpawn)) {
//                 x += -4
//               }
//               if (isNearLeft(x,y,nearConstantSpawn)) {
//                 x += 4
//               }
//               if (isNearTop(x,y,nearConstantSpawn)) {
//                 y += -4
//               }
//               if (isNearBottom(x,y,nearConstantSpawn)) {
//                 y += 4
//               }
//               particles.push(new Particle(x,y,radius,color,trans));
//               moveon = true;
//             }
//         }
//     }
//     //console.log(particles)
//
//     //debugger
//     //has to run 15x per particle, too slow
// }

function spawnparticles() {
  particles = []
  for (i=0; i < numofparticles; i++){

    //first try, checks if random x,y is inside of cpu. too slow
    // var moveon = false
    // while (moveon == false){
    //   var x = randomIntFromRange(0,innerWidth); //floating point??
    //   var y = randomIntFromRange(0,innerHeight);
    //   if (x > (innerWidth/2 - 140) && x < (innerWidth/2+140) && y > (innerHeight/2-140) && y < (innerHeight/2+140)){
    //   } else {
    //     moveon = true
    //   }
    // }
    //second try, spawn particles in four zones
    var side = randomIntFromRange(1,7)
    if (side<4){
      var x = randomIntFromRange(10,innerWidth/2-150)
      var y = randomIntFromRange(10,innerHeight-10)
    } else if (side>3 && side<7) {
      var x = randomIntFromRange(innerWidth/2+150,innerWidth-10)
      var y = randomIntFromRange(10,innerHeight-10)
    } else if (side==7){
      var x = randomIntFromRange(innerWidth/2-150,innerWidth/2+150)
      var side2 = randomIntFromRange(1,2)
      if (side2==1){
        var y = randomIntFromRange(10,innerHeight/2-150)
      } else {
        var y = randomIntFromRange(innerHeight/2+150,innerHeight-10)
      }
    }


    var color = "#0066ff"
    var trans = randomIntFromRange(minTransValue,150)
    //var pixelData = c.getImageData(x, y, 1, 1).data;
    //var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    particles.push(new Particle(x,y,radius,color,trans))
  }
}
*/

// Projects Page ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const pointMargin = 3;
const pointWidth = 15;
let squares;

function projectsinit() {
  squares = [];
  for (var x = 0; x < innerWidth; x += pointWidth+pointMargin) {
    for (var y = 0; y < innerHeight; y += pointWidth+pointMargin) {
      squares.push(new projectSquare(x, y));
    }
  }
}

function recordKeeper() {
  this.trans = 0;
  this.randCounter = 0;
  this.onThreshold = Math.floor(Math.random() * 1000) + 1;
  this.offThreshold = Math.floor(Math.random() * 1000) + this.onThreshold;

  this.update = () => {
    if (this.randCounter > this.onThreshold && this.randCounter < this.offThreshold) {
      //fade square in
      if (this.trans < .7) {
        this.trans += .05;
      }
    }

    if (this.randCounter > this.offThreshold) {
      //fade square out
      if (this.trans > .2) {
        this.trans -= .05;
      }
    }

    if (this.randCounter == 1100) {
      //reset all variables
      this.randCounter = 0;
      this.trans = 0;
      this.onThreshold = Math.floor(Math.random() * 1000) + 1;
      this.offThreshold = Math.floor(Math.random() * 1000) + this.onThreshold;
    }
    this.randCounter++;
  }
}

function projectsUpdate() {
  for (var object of squares) {
    object.update();
  }
}

function projectsDraw() {
  for (var object of squares) {
    object.draw();
  }
}
function projectSquare(x, y) {
  this.x = x;
  this.y = y;
  this.p = Math.floor(Math.random() * 10);
  this.trans = Math.random()+.5;
  //this.trans = 0;

  this.update = () => {
    if (this.p == Math.floor(Math.random() * 10)) {
      if (Math.random() > .8) {
        this.trans = (Math.random()*.3)+.1;
      } else {
        this.trans = .1;
      }
    }
    if (mouse.toggle) {
      if (distance(mouse.x, mouse.y, this.x, this.y) < 30) {
        this.trans = .3;
      }
    } else {
      if (Math.abs((mouse.x-7) - this.x) < 10) {
        this.trans = .2;
      }
      if (Math.abs((mouse.y-7) - this.y) < 10) {
        this.trans = .2;
      }
    }

    this.draw()
  }

  this.draw = () => {
    c.fillStyle = 'rgba(' + rainColor + ',' + this.trans +')';
    c.fillRect(this.x, this.y, pointWidth, pointWidth);
  }
}

//old 3d code
    // var scene
    // var renderer
    // var camera
    // var _cube
    // var _plane
    // var mesh = null
    //
    // function projectsinit() {
    //   scene = new THREE.Scene()
    //   scene.background = new THREE.Color( 0xcccccc )
    //
    //   renderer = new THREE.WebGLRenderer()
    //   renderer.setSize(innerWidth, innerHeight)
    //
    //   camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000)
    //   camera.position.z = 5
    //   controls = new THREE.OrbitControls( camera, renderer.domElement );
    //   controls.enableDamping = true;
    // 	controls.dampingFactor = 0.25;
    //   controls.enableZoom = false
    //
    //   document.body.appendChild( renderer.domElement )
    //
    //
    //   var geometry0 = new THREE.BoxGeometry( 1, 1, 1 )
    //   var cube_material = new THREE.MeshBasicMaterial( { color: 0x4286f4 } )
    //   var plane_material = new THREE.MeshBasicMaterial( { color: 0x909196 } )
    //   _cube = new THREE.Mesh( geometry0, cube_material )
    //   _plane = new THREE.Mesh(new THREE.PlaneGeometry(10,10), plane_material)
    //
    //
    //   scene.add( _cube,_plane)
    //
    //    _plane.rotateX(-Math.PI/2)
    //    _plane.translateZ(-5)
    //
    //   //_plane.rotateZ(90)
    //   //init blender mesh
    //
    //
    //   //trying to load city background, got it too load, cant figure out how to change the material
    //   // var loader = new THREE.ObjectLoader();
    //   // loader.load('meshes/scene.json', function (obj) {
    //   //   obj.translateY(-10)
    //   //   obj.material = rgb(255,0,0)
    //   //   scene.add(obj)
    //   // })
    //
    //   //var loader = new THREE.JSONLoader();
    //   // loader.load('meshes/scene.json', function(geometry, materials) {
    //   //   var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    //   //   scene.add(mesh);
    //   // });
    //
    //   //load with obj file
    //   //   var loader = new THREE.OBJLoader()
    //   //   loader.load('meshes/scene.obj', function( geo ) {
    //   //       object = geo.content
    //   //       object.traverse( function ( child ) {
    //   //         if ( child instanceof THREE.Mesh ) {
    //   //             child.material = cube_material;
    //   //         }
    //   //     });
    //   //     scene.add( object );
    //   //   })
    //   //
    //   //   var light = new THREE.AmbientLight(0xffffff);
    //   //   scene.add(light);
    //   // }
    //
    // function projectsupdate() {
    //
    //
    //   renderer.render(scene, camera);
    // }

//old Falcon code
  // let projectsback
  // let basey = 75
  // let falcon
  // let falcon_img
  // let clouds
  // let cloud_img_array = new Array()
  // let fireparticles1
  // let fireparticles2
  // let fireparticles3
  // var aerium  = -40
  // var highpass = -140
  // var obstacle = -240
  // var p_cpu = -340
  // var site = -440
  // var comp = -540
  //
  // function changeprojback(value) {
  //   aerium += value
  //   highpass += value
  //   obstacle += value
  //   comp += value
  //   site += value
  //   p_cpu += value
  //   for (index of clouds) {
  //     index.y += (value*6)
  //   }
  // }
  //
  // function projectsinit() {
  //
  //   fireparticles1 = []
  //   fireparticles2 = []
  //   fireparticles3 = []
  //   clouds = []
  //   cloud_img_array = []
  //   projectsback = new projectsbackground()
  //   falcon_img = new Image()
  //
  //   //cloud image array
  //   cloud_img_array[0] = new Image()
  //   cloud_img_array[0].src = 'img/cloud0.png'
  //   cloud_img_array[1] = new Image()
  //   cloud_img_array[1].src = 'img/cloud1.png'
  //   cloud_img_array[2] = new Image()
  //   cloud_img_array[2].src = 'img/cloud2.png'
  //   cloud_img_array[3] = new Image()
  //   cloud_img_array[3].src = 'img/cloud3.png'
  //
  //
  //   x = cx-50
  //   y = innerHeight-(625)
  //   falcon = new Falcon(x,y,0)
  // }
  //
  // var window_old = innerHeight
  //
  // function projectsinitupdate() {
  //   document.getElementById('aerium').style.visibility="visible"
  //   document.getElementById('highpass').style.visibility="visible"
  //   document.getElementById('obstacle').style.visibility="visible"
  //   document.getElementById('comp').style.visibility="visible"
  //   document.getElementById('site').style.visibility="visible"
  //   document.getElementById('cpu').style.visibility="visible"
  //
  //   var window_new = innerHeight
  //
  //   var window_change_y = window_new - window_old
  //
  //   falcon.y += window_change_y
  //   falcon.x = cx -50
  //   //changeprojback(-window_change_y)
  //   window_old = window_new
  // }
  //
  // function fireupdate(num){
  //   y1 = falcon.y+550
  //   x1 = falcon.x+17
  //   x2 = x1+33
  //   x3 = x2+33
  //   //remove particle
  //     for (let i = fireparticles1.length-1;i >= 0;i--){
  //       fireparticles1[i].update()
  //       if (fireparticles1[i].finished()){
  //
  //         fireparticles1.splice(i,1)
  //       }
  //     }
  //     for (let i = fireparticles2.length-1;i >= 0;i--){
  //       fireparticles2[i].update()
  //       if (fireparticles2[i].finished()){
  //         fireparticles2.splice(i,1)
  //       }
  //     }
  //     for (let i = fireparticles3.length-1;i >= 0;i--){
  //       fireparticles3[i].update()
  //       if (fireparticles3[i].finished()){
  //         fireparticles3.splice(i,1)
  //       }
  //     }
  //
  //   if (num == 1){
  //     //dont add new particles (falcon has stopped)
  //   } else {
  //   //add new particles every loop
  //     for (var i=0;i<6;i++){
  //       fireparticles1.push(new FireParticle(x1,y1))
  //     }
  //     for (var i=0;i<6;i++){
  //       fireparticles2.push(new FireParticle(x2,y1))
  //     }
  //     for (var i=0;i<6;i++){
  //       fireparticles3.push(new FireParticle(x3,y1))
  //     }
  //   }
  // }
  //
  // class FireParticle {
  //
  //   constructor(x,y) {
  //     this.x = x
  //     this.y = y
  //     this.dx = (Math.random()-.5)*.9
  //     this.dy = getRandomArbitrary(2,6)
  //     this.trans = 1
  //     this.color = 0
  //   }
  //
  //   finished() {
  //     return this.trans < 0;
  //   }
  //
  //   update(){
  //     this.x += this.dx
  //     this.y += this.dy
  //     this.color += 7
  //     this.trans -= .02
  //     this.draw()
  //   }
  //
  //   draw() {
  //     c.beginPath()
  //     c.fillStyle = 'rgba(255,'+this.color+',0,'+this.trans+')'
  //     c.ellipse(this.x,this.y,10,10,0,0,2*Math.PI)
  //     c.fill()
  //   }
  // }
  //
  // function Cloud(x,y,z) {
  //   this.x = x
  //   this.y = y
  //   this.z = z
  //   this.dx = convertRange(this.z,[1,5],[1,1.5])*(Math.random()+.4)
  //   var cloudchoice = randomIntFromRange(0,3)
  //
  //   this.update = () => {
  //     if (x > innerWidth) {
  //       this.x -= this.dx
  //     } else {
  //       this.x += this.dx
  //     }
  //   this.draw()
  //   }
  //
  //   this.finished = () => {
  //     if (this.x < -200 && x > innerWidth) {
  //       return true
  //     }
  //     if (this.x > innerWidth+200 && x < 0) {
  //       return true
  //     }
  //   }
  //
  //   this.draw = () => {
  //
  //       c.save()
  //       c.globalAlpha = this.trans
  //       c.drawImage(cloud_img_array[cloudchoice],this.x,this.y,200,125)
  //       c.restore()
  //   }
  // }
  //
  // function Falcon(x,y,position) {
  //
  //   this.x = x
  //   this.y = y
  //   this.transition = 'hold'
  //   this.position = position
  //
  //
  //   this.moveup = () => {
  //     if (this.position < numofprojects){
  //       this.position += 1
  //       this.transition = 'up'
  //       changeprojback(1)
  //       console.log('Moving up to: ' + this.position)
  //     }
  //   }
  //
  //   this.movedown = () => {
  //     if (this.position > 0){
  //       this.position -= 1
  //       this.transition = 'down'
  //       changeprojback(-1)
  //       console.log('Moving down to: ' + this.position)
  //     }
  //   }
  //
  //   this.update = () => {
  //
  //     //stop falcon at the html points, anchored off of aerium variable
  //     if ([-40,55,165,258,370,457,560].indexOf(Math.floor(aerium)) > -1){
  //       this.transition = 'hold'
  //     }
  //
  //
  //     if (this.transition == 'hold'){
  //       //locked into position
  //       fireupdate(1)
  //     } else if (this.transition == 'up'){
  //       //transition up to next position
  //         if (this.position == 1 && this.y > cy-275){
  //           this.y -= 2
  //         }
  //         if (basey > -1) {
  //           basey -=1
  //         }
  //
  //       document.getElementById('aerium').style.visibility="visible"
  //       document.getElementById('highpass').style.visibility="visible"
  //       document.getElementById('obstacle').style.visibility="visible"
  //       document.getElementById('comp').style.visibility="visible"
  //       document.getElementById('site').style.visibility="visible"
  //       document.getElementById('cpu').style.visibility="visible"
  //       changeprojback(.75)
  //       fireupdate(0)
  //
  //     } else if (this.transition == 'down'){
  //
  //         if (this.position == 0 && this.y < innerHeight-625) {
  //           this.y += 2
  //           basey += 1
  //         } else if (this.position == 0){
  //           if (basey < 75) {
  //             basey += .25
  //           }
  //           //fireupdate(1)
  //         }
  //       fireupdate(0)
  //       changeprojback(-.75)
  //     }
  //
  //     document.getElementById('aerium').style.top=""+aerium+"%"
  //     document.getElementById('highpass').style.top=""+highpass+"%"
  //     document.getElementById('obstacle').style.top=""+obstacle+"%"
  //     document.getElementById('comp').style.top=""+comp+"%"
  //     document.getElementById('site').style.top=""+site+"%"
  //     document.getElementById('cpu').style.top=""+p_cpu+"%"
  //
  //     this.draw()
  //   }
  //
  //   this.draw = () => {
  //     c.drawImage(falcon_img,this.x,this.y,100,550)
  //     falcon_img.src = 'img/falcon2.png'
  //
  //   }
  // }
  //
  // function projectsbackground() {
  //
  //   var up_arrow_hover = 25
  //   var down_arrow_hover = 25
  //
  //   this.update = () => {
  //
  //     var num = randomIntFromRange(1,200)
  //
  //     //spawn clouds
  //     var yc
  //     var xc
  //     var z
  //
  //     if (num < 6 && clouds.length < 5 && aerium < 275) {
  //       //higher spawn rate
  //         if (falcon.position == 0){
  //           yc = randomIntFromRange(-90,innerHeight-600)
  //         } else {
  //           yc = randomIntFromRange(-40,innerHeight-300)
  //         }
  //
  //         if (randomIntFromRange(1,2) == 1){
  //           xc = randomIntFromRange(-210,-300)
  //         } else {
  //           xc = randomIntFromRange(innerWidth+100,innerWidth+200)
  //         }
  //       z = randomIntFromRange(1,5)
  //       clouds.push( new Cloud(xc,yc,z))
  //
  //     } else if (num == 50 && clouds.length < 15 && aerium < 275) {
  //       //lower spawn rate
  //           if (falcon.position == 0){
  //             yc = randomIntFromRange(-90,innerHeight-600)
  //           } else {
  //             yc = randomIntFromRange(-40,innerHeight-300)
  //           }
  //
  //           if (randomIntFromRange(1,2) == 1){
  //             xc = randomIntFromRange(-210,-300)
  //           } else {
  //             xc = randomIntFromRange(innerWidth+50,innerWidth+100)
  //           }
  //         z = randomIntFromRange(1,5)
  //         clouds.push( new Cloud(xc,yc,z))
  //     } else if (num > 195 && clouds.length < 33) {
  //       //spawn clouds above/bellow screen
  //           if (randomIntFromRange(1,2) == 1) {
  //             xc = randomIntFromRange(-210,-300)
  //           } else {
  //             xc = randomIntFromRange(innerWidth+50,innerWidth+100)
  //           }
  //           if (randomIntFromRange(1,2) == 1 && aerium < 200) {
  //             yc = randomIntFromRange(-innerHeight*2,0)
  //           } else if (aerium > 100) {
  //             yc = randomIntFromRange(innerHeight,innerHeight*2)
  //             console.log('spawn bellow')
  //           }
  //       z = randomIntFromRange(1,5)
  //       clouds.push( new Cloud(xc,yc,z))
  //     }
  //
  //     //remove clouds after they are off screen
  //     for (let i = clouds.length-1;i >= 0;i--) {
  //       if (clouds[i].finished()) {
  //         clouds.splice(i,1)
  //       }
  //     }
  //
  //     //hover effect for navigation arrows
  //     if (distance(mouse.x,mouse.y,innerWidth-75,innerHeight-175) < 25){
  //       changeMouseStyle(1)
  //       if (up_arrow_hover <= 30) {
  //         up_arrow_hover += 1
  //       }
  //     } else {
  //       if (up_arrow_hover > 25) {
  //         up_arrow_hover -= 1
  //       }
  //     }
  //
  //     if (distance(mouse.x,mouse.y,innerWidth-75,innerHeight-115) < 25){
  //       changeMouseStyle(1)
  //       if (down_arrow_hover <= 30) {
  //         down_arrow_hover += 1
  //       }
  //     } else {
  //       if (down_arrow_hover > 25) {
  //         down_arrow_hover -= 1
  //       }
  //     }
  //
  //     this.draw()
  //   }
  //   this.draw = () => {
  //     //blue graydient background
  //     var grd = c.createLinearGradient(0,-3000+8*aerium,0,innerHeight+8*aerium)
  //     grd.addColorStop(0,"rgb(30,30,30)")
  //     grd.addColorStop(1,"rgb(66,134,244)")
  //     c.beginPath()
  //     c.fillStyle = grd
  //     c.fillRect(0,0,innerWidth,innerHeight)
  //
  //
  //     //navigation arrows
  //     c2.beginPath()
  //     c2.fillStyle = 'rgba(51,51,51,.7)'
  //     roundRect(c2,innerWidth-100,innerHeight-200,50,50,5,true,false)
  //     roundRect(c2,innerWidth-100,innerHeight-140,50,50,5,true,false)
  //
  //     c2.beginPath()
  //     c2.strokeStyle = 'rgb(219,219,219)'
  //     c2.lineWidth = 4
  //     //up arrow
  //       c2.moveTo(innerWidth-75,innerHeight-158)
  //       c2.lineTo(innerWidth-75,(innerHeight-158)-up_arrow_hover)
  //       c2.moveTo(innerWidth-75,(innerHeight-158)-up_arrow_hover)
  //       c2.lineTo(innerWidth-85,(innerHeight-148)-up_arrow_hover)
  //       c2.moveTo(innerWidth-75,(innerHeight-158)-up_arrow_hover)
  //       c2.lineTo(innerWidth-65,(innerHeight-148)-up_arrow_hover)
  //       c2.stroke()
  //     //down arrow
  //       c2.moveTo(innerWidth-75,innerHeight-132)
  //       c2.lineTo(innerWidth-75,(innerHeight-132)+down_arrow_hover)
  //       c2.moveTo(innerWidth-75,(innerHeight-132)+down_arrow_hover)
  //       c2.lineTo(innerWidth-85,(innerHeight-142)+down_arrow_hover)
  //       c2.moveTo(innerWidth-75,(innerHeight-132)+down_arrow_hover)
  //       c2.lineTo(innerWidth-65,(innerHeight-142)+down_arrow_hover)
  //       c2.stroke()
  //
  //     //grey ground
  //     c.beginPath()
  //     c.fillStyle = color_gray
  //     c.fillRect(0,innerHeight-basey,innerWidth,75)
  //   }
  // }

//About Page --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let aboutparticles

function aboutinit() {
  aboutparticles = []
  numofaboutparticles = convertRange(innerWidth,[0,1920],[150,300])
  for (i=0;i<numofaboutparticles;i++){
    var x = randomIntFromRange(0,innerWidth)
    var y = randomIntFromRange(0,innerHeight)
    var r = randomIntFromRange(2,4)
    var dx = (Math.random()-.5) * 1.7
    var dy = (Math.random()-.5) * 1.5


    aboutparticles.push(new Aboutparticle(x,y,r,dx,dy))
  }
}

function Aboutparticle(x,y,r,dx,dy) {

  this.x = x
  this.y = y
  this.r = r
  this.dx = dx
  this.dy = dy
  this.trans = .75
  this.trans2 = .5

  this.drawline = (ix,iy,dist) => {
    this.trans2 = convertRange(dist,[0,100],[.75,0])
    c.beginPath()
    c.strokeStyle = "rgba(204, 204, 206,"+this.trans2+")"
    c.strokeWidth = 1
    c.lineWidth = 1
    c.moveTo(ix,iy)
    c.lineTo(this.x,this.y)
    c.stroke()
  }

  this.update = () => {
    for (var i of aboutparticles) {
      var dist = distance(i.x,i.y,this.x,this.y)
      if (dist < 100){
        this.drawline(i.x,i.y,dist)
      }
    }

    if (this.x < 2 || this.x > innerWidth-2) {
      this.dx = -this.dx
    }
    if (this.y < 2 || this.y > innerHeight-2) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }

  this.draw = () => {

    c.beginPath()
    c.fillStyle = "rgba(204, 204, 206,"+this.trans+")"
    c.arc(this.x,this.y,this.r,0,2*Math.PI)
    c.fill()
  }
}
// Contact Page -----------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //RAIN
let rain
let splash
let splashU
let unbrella
let umbrella_img
let icons
let facebook_img
let instagram_img
let devpost_img
let linkedin_img

function contactinit(){
  rain = []
  splash = []
  splashU = []
  var xi = []
  var yi = []
  var resolution = innerWidth/5 //number of icons
  umbrella_img = new Image()
  facebook_img = new Image()
  instagram_img = new Image()
  devpost_img = new Image()
  linkedin_img = new Image()
  numOfRain = convertRange(innerWidth,[0,1920],[200,1000])
  umbrella = new Umbrella(cx-200,cy-100)

  //randomize x and y coorniates and make sure they arn't too close

      for (i=0;i<6;i++){
        if (i==4){
          xi[i] = randomIntFromRange((i*resolution)+75,((i+1)*resolution)-76)
        } else {
          xi[i] = randomIntFromRange((i*resolution)+50,((i+1)*resolution)-50)
        }

        yi[i] = randomIntFromRange(200,innerHeight-100)
      }

  icons = new Icons(xi,yi)
  //numOfRain = 10

  for (i=0;i<numOfRain;i++){
    //random vars
    x = Math.random()*innerWidth
    y = randomIntFromRange(innerHeight-40,-500)
    z = Math.random()*20
    //dy = (Math.random()+1)*4
    dy = convertRange(z,[0,20],[5,13.5])
    //thick = randomIntFromRange(1,3)
    thick = convertRange(z,[0,20],[1,3])
    //len = randomIntFromRange(10,20)
    len = convertRange(z,[0,20],[5,20])
    trans = convertRange(z,[0,20],[.35,1])
    acc = convertRange(z,[0,20],[0,.07])
    rain.push(new Rain(x,y,z,len,dy,thick,trans,acc))
  }
}

function Rain(x,y,z,len,dy,thick,trans,acc){
  this.x = x
  this.y = y
  this.z = z
  this.len = len
  this.dy = dy
  this.thick = thick
  this.trans = trans
  this.acc = acc

  this.update = () => {
    this.y += this.dy
    this.dy += this.acc
    var ybot = .01*(Math.pow(this.x-umbrella.x-75,2))+umbrella.y-5

    if (this.y > innerHeight+22){

      this.y = randomIntFromRange(-50,-500)
      this.dy = convertRange(this.z,[0,20],[5,13.5])

      if (this.z > 18 && randomIntFromRange(1,2)==1){
        if (splash.length < 600) {
          var num = convertRange(z,[0,20],[1,5])
          for (i=0;i<num;i++){
            var dxs = (Math.random()-.5)*1.4
            var dys = convertRange(z,[0,20],[-1,-1.625])*Math.random()*(1.2-.05)+.05
            splash.push(new Splash(this.x,dxs,dys,this.z))
          }
        }
      }
      this.x = Math.random()*innerWidth
    }

    //spawn splashes for umbrella
    var ybot = .007*(Math.pow(this.x-umbrella.x-75,2))+umbrella.y-0
    var ytop = .007*(Math.pow(this.x-umbrella.x-75,2))+umbrella.y-5

    if (this.y<ybot && this.y>ytop && this.x>umbrella.x && this.x<umbrella.x+150){
      if (this.z > 14){
        if (splashU.length < 120) {
          var num = convertRange(z,[10,20],[1,5])
          for (i=0;i<num;i++){
            var dxsu = (Math.random()-.5)*1.3
            var dysu = convertRange(z,[10,20],[-2,-3])*Math.random()*(1.2-.05)+.05
            splashU.push(new SplashU(this.x,this.y,dxsu,dysu,this.z))
          }
        }
      }
    }

    //remove rain under umbrella
    if (this.y>ybot-5 && this.x>umbrella.x-10 && this.x<umbrella.x+140 && this.z>3){
      this.y = randomIntFromRange(-50,-500)
      this.dy = convertRange(this.z,[0,20],[5,13.5])
      this.x = Math.random()*innerWidth
    }
    this.draw()
  }

  this.draw = () => {
    c.beginPath()
    c.fillStyle = "rgba("+rainColor+","+this.trans+")"
    c.fillRect(this.x,this.y,this.thick,this.len)
  }
}

function Splash(x,dx,dy,z){
  this.x = x
  this.dx = dx
  this.dy = dy
  this.z = z
  this.y = innerHeight-2
  this.grav = Math.random()*(.031-.026)+.026
  this.trans = convertRange(z,[0,20],[.2,.75])

  this.update = () => {
    if (this.y > innerHeight-1){
      this.y = innerHeight-2
      this.dy = 0
      this.grav = 0
    }
    if (this.x > innerWidth+3 || this.x < -3 || Math.abs(this.x-x) > 70){
      splash.splice(splash.indexOf(this),1)
    } else if (this.y == innerHeight-2 && randomIntFromRange(1,300)==1){
      splash.splice(splash.indexOf(this),1)
    }
    this.x += this.dx
    this.y += this.dy
    this.dy += this.grav
  this.draw()
  }

  this.draw = () => {
    c.fillStyle = "rgba("+rainColor+","+this.trans+")"
    c.beginPath()
    c.arc(this.x,this.y,2,0,2*Math.PI)
    c.fill()
  }
}

function Umbrella(x,y){
  this.x = Math.floor(x)
  this.y = Math.floor(y)

  this.update = () => {
    if (distance(mouse.x,mouse.y,this.x+75,this.y+75) < 75){
      changeMouseStyle(1)
      if (dragFlag == .5){
          this.x += mouse.dx
          this.y += mouse.dy
      }
    }
  this.draw()
  }

  this.draw = () => {
      c.drawImage(umbrella_img,this.x,this.y,150,150)
      umbrella_img.src = 'img/umbrella.png'
  }
}

function SplashU(x,y,dx,dy,z){
  this.x = x
  this.dx = dx
  this.dy = dy
  this.z = z
  this.y = y
  this.grav = Math.random()*(.2-.1)+.1
  this.trans = convertRange(z,[0,20],[.75,1])

  this.update = () => {
    var ybot = .01*(Math.pow(this.x-umbrella.x-75,2))+umbrella.y-5
    //var ytop = .007*(Math.pow(this.x-umbrella.x-75,2))+umbrella.y-5
    if (this.y>ybot && this.x>umbrella.x-4 && this.x<umbrella.x+154){
      this.y = ybot+4
      this.dy = convertRange(z,[0,20],[1,2.7])
      if (this.x > umbrella.x+75){
        this.dx = Math.abs(this.dx)
      } else {
        this.dx = -Math.abs(this.dx)
      }
    }

    if (this.x > innerWidth+3 || this.x < -3 || this.y > innerHeight-20){
      splashU.splice(splashU.indexOf(this),1)
    }
    this.x += this.dx
    this.y += this.dy
    this.dy += this.grav
    //this.dy +=2
  this.draw()
  }

  this.draw = () => {
    //c.fillStyle = "rgba("+rainColor+","+this.trans+")"
    c.fillStyle = "rgba("+rainColor+","+this.trans+")"
    c.beginPath()
    c.arc(this.x,this.y,2,0,2*Math.PI)
    c.fill()
  }
}

let contactLink
var alpha = [0.4,0.4,0.4,0.4,0.4];

function Icons(x,y){

  this.x = x;
  this.y = y;

  this.update = () =>{

    for (i=0;i<x.length;i++){
      if (distance(mouse.x,mouse.y,x[i]+25,y[i]+25) < 25
          /*&& mouse.x > umbrella.x-10 && mouse.x < umbrella.x+160
          && mouse.y > umbrella.y+75*/){
        if (i==3){
          //text
        }
        else {
          changeMouseStyle(1)
        }
      }
    }

    this.draw()
  }
  this.draw = () =>{

    c.save()
      c.rect(umbrella.x-10,umbrella.y+70,170,innerHeight)
      c.arc(umbrella.x+75,umbrella.y+75,75,0,Math.PI)
      //c.stroke()

      //c.clip()
      c.globalAlpha = .4;
      facebook_img.src = 'img/Facebook.png'
      instagram_img.src = 'img/Instagram.png'
      linkedin_img.src = 'img/Linkedin.png'
      devpost_img.src = 'img/Github.png'
      c.font = "15px Arial"
      c.textAlign = "left"
      c.fillStyle = tracesColor
      //make icons light up when uncovered
      imgArr = [facebook_img,devpost_img,linkedin_img,null,instagram_img]

      for (var pos = 0; pos < 5; pos++) {
        c.save();
        alpha[pos] = Math.round(alpha[pos]*100)/100;
        //console.log(this.alpha);

          if (x[pos] > umbrella.x-10 && x[pos] < umbrella.x+170 && y[pos] > umbrella.y+75) {
            //make this one lighter
            if (alpha[pos] < 1) {
              alpha[pos] += .02;
              c.globalAlpha = alpha[pos];
            } else if (alpha[pos] == 1) {
              //alpha[pos] = 1;
              c.globalAlpha = alpha[pos];
            }
          } else {
            if (alpha[pos] > .4) {
              //fade out
              //console.log(this.alpha);
              //debugger;
              alpha[pos] -= .02;
              c.globalAlpha = alpha[pos];
            }
          }
          if (pos == 3) {
            c.fillText("woodwarddavid54",x[3],y[3])
            c.fillText("@gmail.com",x[3],y[3]+20)
            c.fillText("469-422-4244",x[3],y[3]+40)
          } else {
            c.drawImage(imgArr[pos],x[pos],y[pos],50,50)
          }
        c.restore();
      }
      //c.drawImage(facebook_img,x[0],y[0],50,50)

      //c.drawImage(instagram_img,x[4],y[4],50,50)

      //c.drawImage(linkedin_img,x[2],y[2],50,50)

      //c.drawImage(devpost_img,x[1],y[1],50,50)

    c.restore()
  }
}

// Global Menu ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let menu
let word1y
let word2y
let word3y
let word4y
function Menu() {
  var  len1 = 15
  var  len2 = 25
  var toplinestarty = 79
  var toplineendy = 79
  var lowerDline = 0
  var trans = 1
  var menutrans = 0

  var homecolor = "76,76,76"
  var aboutcolor = "255,255,255"
  var projectscolor = "255,255,255"
  var contactcolor = "255,255,255"

  var wordfadeindelay = .3
  var word1trans = 0
  var word2trans = 0
  var word3trans = 0
  var word4trans = 0
  word1y = innerHeight/2-225
  word2y = innerHeight/2-100
  word3y = innerHeight/2+50
  word4y = innerHeight/2+200
  this.update = () => {

    //clicked effect
    if (menuclicked){
      //fade in menu background
      if (menutrans < .8){
        menutrans +=.05
      }
      //fade in words and move them down
          if (word1trans < 1){
            word1trans += .025
          }
          if (word1trans > wordfadeindelay && word2trans <1){
            word2trans += .025
          }
          if (word2trans > wordfadeindelay && word3trans <1){
            word3trans += .025
          }
          if (word3trans > wordfadeindelay && word4trans <1){
            word4trans += .025
          }
      //fade words down
       if (word2trans > .2){
          if (word2y < innerHeight/2-75){
            word2y += .75
          }
        }
        if (word3trans > .2){
          if (word3y < innerHeight/2+75){
            word3y += .9
          }
        }
        if (word4trans > .2){
          if (word4y < innerHeight/2+225){
           word4y += 1
          }
        }
      //make current page grey
      switch (currentPage) {
        case "Home":
          homecolor = "76,76,76"
          aboutcolor = "255,255,255"
          projectscolor = "255,255,255"
          contactcolor = "255,255,255"
          break;
        case "About":
          homecolor = "255,255,255"
          aboutcolor = "76,76,76"
          projectscolor = "255,255,255"
          contactcolor = "255,255,255"
          break;
        case "Projects":
          homecolor = "255,255,255"
          aboutcolor = "255,255,255"
          projectscolor = "76,76,76"
          contactcolor = "255,255,255"
          break;
        case "Contact":
          homecolor = "255,255,255"
          aboutcolor = "255,255,255"
          projectscolor = "255,255,255"
          contactcolor = "76,76,76"
          break;
        default:
      }
      //make words links
      if (mouse.x>cx-95 && mouse.x<cx+95 && mouse.y>word1y-60 && mouse.y<word1y+5 && currentPage!="Home"){
        changeMouseStyle(1)
      } else if (mouse.x>cx-105 && mouse.x<cx+105 && mouse.y>word2y-60 && mouse.y<word2y+5 && currentPage!="About"){
        changeMouseStyle(1)
      } else if (mouse.x>cx-135 && mouse.x<cx+135 && mouse.y>word3y-60 && mouse.y<word3y+10 && currentPage!="Projects"){
        changeMouseStyle(1)
      } else if (mouse.x>cx-135 && mouse.x<cx+135 && mouse.y>word4y-60 && mouse.y<word4y+5 && currentPage!="Contact"){
        changeMouseStyle(1)
      }

      //menu button
        if (trans>0){
          trans -= .1
        }
        len1 = 0
        len2 = 0
        if (toplinestarty < 87){
          toplinestarty += 1
        }
        if (toplineendy > 62) {
          toplineendy -= 1
        }
        if (distance(mouse.x,mouse.y,innerWidth-75,75) <= 28){
          changeMouseStyle(1)
            if (lowerDline < 27){
              lowerDline += 4
            }
        } else if (lowerDline > 0){
          lowerDline -= 4
        }
    }
    //back to unclicked
    else {

      //fade out menu background
      if (menutrans > 0){
        menutrans -=.05
      }
      //fade out words
      if (word1trans > 0){
        word1trans -=.15
        word2trans -=.15
        word3trans -=.15
        word4trans -=.15
      }
      if (word4trans < .01){
      word1y = innerHeight/2-225
      word2y = innerHeight/2-100
      word3y = innerHeight/2+50
      word4y = innerHeight/2+200
    }
      //hover effect
      if (distance(mouse.x,mouse.y,innerWidth-75,75) <= 28){
        changeMouseStyle(1)
        if (len1 < 29){
          len1 += 2
        }
        if (len2 < 30){
          len2 += 1
        }
      } else if (len1 < 15 || len2 < 25){
        if (len1 < 15){
          len1 += 1
        }
        if (len2 < 25){
          len2 += 1
        }
      } else {
        if (len1 > 15){
          len1 -= 2
        }
        if (len2 > 25){
          len2 -= 1.5
        }
      }
      if (trans<1){
        trans += .1
      }
      if (toplinestarty > 79){
        toplinestarty -= 1
      }
      if (toplineendy < 79) {
        toplineendy += 1
      }
      if (lowerDline > 0){
        if (lowerDline < 5){
          lowerDline -= 1
        } else {
          lowerDline -= 5
        }
      }
    }

    this.draw()
  }

  this.draw = () => {

    //menu opened background
    c2.beginPath()
    c2.fillStyle = "rgba(0,0,0,"+menutrans+")"
    c2.fillRect(0,0,innerWidth,innerHeight)
    //menu text
      c2.beginPath()
      c2.textAlign = "center"
      c2.font = "80px Palatino"
      c2.fillStyle = "rgba("+homecolor+","+word1trans+")"
      c2.fillText("Home",innerWidth/2,0+word1y)
      c2.fillStyle = "rgba("+aboutcolor+","+word2trans+")"
      c2.fillText("About",innerWidth/2,0+word2y)
      c2.fillStyle = "rgba("+projectscolor+","+word3trans+")"
      c2.fillText("Projects",innerWidth/2,0+word3y)
      c2.fillStyle = "rgba("+contactcolor+","+word4trans+")"
      c2.fillText("Contact",innerWidth/2,0+word4y)
    //top right menu
    c2.beginPath()
    if (currentPage == "About"){
      c2.fillStyle = "rgba(51,51,51,.7)"
    } else {
      c2.fillStyle = "rgba("+rainColor+",.7)"
    }
    roundRect(c2,innerWidth-100,50,50,50,5,true,false)
    c2.beginPath()
    c2.fillStyle = "rgba(219,219,219,"+trans+")"
    c2.fillRect(innerWidth-90,62,30,2)
    c2.beginPath()
    c2.fillStyle = "rgba(219,219,219,"+trans+")"
    c2.fillRect(innerWidth-90,70,30,2)

    c2.beginPath()
    c2.strokeStyle = "rgb(219,219,219)"
    c2.lineWidth = 2

    c2.moveTo(innerWidth-90,toplinestarty)
    c2.lineTo(innerWidth-(90-len1),toplineendy)

      // if (menuclicked){
      //   c.lineTo(innerWidth-60,62)
      // } else {
      //   c.lineTo(innerWidth-(90-len1),79)
      // }
    c2.stroke()

    c2.beginPath()
    c2.moveTo(innerWidth-90,87)
    c2.lineTo(innerWidth-(90-lowerDline),87)
    c2.stroke()

    c2.beginPath()

      if (menuclicked){
        c2.moveTo(innerWidth-60,87)
        c2.lineTo(innerWidth-90,62)
      } else {
        c2.moveTo(innerWidth-90,87)
        c2.lineTo(innerWidth-(90-len2),87)
      }
    c2.stroke()

    // c.beginPath()
    // c.fillStyle = "rgb(219,219,219)"
    // c.fillRect(innerWidth-90,78,len1,2)
    // c.fillStyle = "rgb(219,219,219)"
    // c.fillRect(innerWidth-90,86,len2,2)

  }

}

// Transition -------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let transitionCircles
function initTransition(){
      transitionCircles = []

      var r = [7]
      var dr = [7]
      var x = [7]
      var y = [7]
      for (i=0;i<7;i++) {
        //random Variables
          r[i] = 20
          dr[i] = 5
          x[i] = randomIntFromRange(100,innerWidth-100)
          y[i] = randomIntFromRange(100,innerHeight-100)
      }
      transitionCircles.push(new Transitioncircle(x,y,r,dr))
    }

function Transitioncircle(x,y,r,dr) {

      this.x = x
      this.y = y
      this.r = r
      this.dr = dr

    var choice

      this.update = () => {
        for (i=0;i<x.length;i++){
          choice = randomIntFromRange(0,10)
          //exit transition
          if (this.r[i] > 900){
            inTransition = false
            console.log("transition done")
            initTransition()
          }
          if (choice == 10){
            this.dr[i] = 0
            this.dr[i] += 1
          } else if (choice == 8){
            this.dr[i] += .5
          } else {
            this.dr[i] += .2
          }
          this.r[i] += this.dr[i]
        }

        this.draw()
      }

      this.draw = () => {
          offscreenContext.clearRect(0, 0, canvas.width, canvas.height)
          offscreenContext.fillStyle = "rgba(255,0,0,1)"
          for (i=0;i<x.length;i++){
              offscreenContext.beginPath()
              offscreenContext.arc(x[i],y[i],this.r[i],0,2*Math.PI)
              offscreenContext.fill()
          }
          //transition takes place on the c2 canvas (above everything)
          c2.fillStyle = color_ltltgray
          c2.fillRect(0,0,innerWidth,innerHeight)
          c2.save()
          c2.globalCompositeOperation = 'destination-out'
          c2.globalAlpha=1;
          c2.drawImage(offscreenCanvas,0,0)
          c2.restore()
      }
    }


// Animation Loop ---------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var imgData
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c2.clearRect(0, 0, canvas.width, canvas.height)
    changeMouseStyle(0);
    //stats.update();               //fps counter

  if (site_loaded){
    if (menuclicked){
      if (currentPage == "Home"){
        homeRender();
      } else if (currentPage == "About"){
          c.beginPath();
          c.fillStyle = "rgb(66,134,244)";
          c.fillRect(0,0,innerWidth,innerHeight);
          for (var index of aboutparticles){
            index.draw();
          }
      } else if (currentPage == "Projects"){
        hideProjectsHtml();
        c.beginPath();
        c.fillStyle = color_gray;
        c.fillRect(0,0,innerWidth,innerHeight);
        projectsDraw();
        //old projects code
          // projectsback.draw()
          // for (var index of clouds){
          //   index.draw()
          // }
          //   for (var index of fireparticles1){
          //     index.draw()
          //   }
          //   for (var index of fireparticles2){
          //     index.draw()
          //   }
          //   for (var index of fireparticles3){
          //     index.draw()
          //   }
          // falcon.draw()
      } else if (currentPage == "Contact"){
          c.beginPath()
          c.fillStyle = color_gray
          c.fillRect(0,0,innerWidth,innerHeight)
          icons.draw()
          for (var i=0; i < rain.length;i++){
            rain[i].draw()
          }
          umbrella.draw()
          for (var i=0; i < splashU.length;i++){
            splashU[i].draw()
          }
          for (var i=0; i < splash.length;i++){
            splash[i].draw()
          }
      }
    } else {
        //Animation loops
        if (currentPage == "Home") {
              homeUpdate();
        } else if (currentPage == "About"){
            c.beginPath()
            c.fillStyle = "rgb(66,134,244)"
            c.fillRect(0,0,innerWidth,innerHeight)
            for (var index of aboutparticles){
              index.update()
            }
        } else if(currentPage == "Projects"){
          showProjectsHtml();
          c.beginPath();
          c.fillStyle = color_gray;
          c.fillRect(0,0,innerWidth,innerHeight);
          projectsUpdate()
          //old code
            // projectsback.update()
            // for (var index of clouds){
            //   index.update()
            // }
            // falcon.update()
        } else if (currentPage == "Contact"){
            c.beginPath()
            c.fillStyle = color_gray
            c.fillRect(0,0,innerWidth,innerHeight)
            icons.update()
            for (var i=0; i < rain.length;i++){
              rain[i].update()
            }
            umbrella.update()
            for (var i=0; i < splashU.length;i++){
              splashU[i].update()
            }
            for (var i=0; i < splash.length;i++){
              splash[i].update()
            }
        }
      }

      if (inTransition) {
        //animated transition to new page
        for (var i=0; i<transitionCircles.length;i++){

          transitionCircles[i].update()
        }
      }

    mouse.dx = 0
    mouse.dy = 0
    menu.update()
  } else {
    //option for loading screen while site loads
    site_loaded = true;
  }
}

//init all pages
var cx
var cy
function init() {
  cx = innerWidth/2;
  cy = innerHeight/2;
  initTransition();
  hideAboutHtml();
  hideHomeHtml();
  hideProjectsHtml();

  //stats setup
  //stats = new Stats();
	//document.body.appendChild( stats.dom );

  if (currentPage == "Home") {
    homeWindowResize();
  } else if (currentPage == "About"){
    aboutinit();
    showAboutHtml();
  } else if(currentPage == "Projects"){
    projectsinit();
    showProjectsHtml();
  } else if (currentPage == "Contact"){
    contactinit();
  }
  menu = new Menu();
  menu.draw();
}


homeinit();
init();


//spawnparticles()
var trans = 0;
var counter = 0;
animate();

function loader(trans) {
  c.clearRect(0,0,innerWidth,innerHeight);
  c2.clearRect(0,0,innerWidth,innerHeight);
  c.beginPath();
  c.fillStyle = '#3A3C3E';
  c.fillRect(0,0,innerWidth,innerHeight);
  c2.font = '20px Source Sans Pro';
  c2.fillStyle = 'rgba('+tracesColor+')';
  c2.save();
  c2.globalAlpha = trans;
  c2.fillText('For the best experience, Use Google Chrome in fullscreen.',cx,cy);
  c2.restore();
  //console.log(trans)
  inTransition = true;
}

//} // closes mobile else statement



// TODO
//
