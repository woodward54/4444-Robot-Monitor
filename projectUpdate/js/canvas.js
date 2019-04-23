const canvas = document.getElementById('layer1')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', () => {
      canvas.width = innerWidth
      canvas.height = innerHeight
      init()
})

function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

var cx
var cy
function init() {
  cx = innerWidth/2;
  cy = innerHeight/2;
  aboutinit()
}


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

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    //stats.update();               //fps counter
    //Animation loops

    c.beginPath()
    c.fillStyle = "rgb(66,134,244)"
    c.fillRect(0,0,innerWidth,innerHeight)
    for (var index of aboutparticles){
      index.update()
    }
}

init()
animate()
