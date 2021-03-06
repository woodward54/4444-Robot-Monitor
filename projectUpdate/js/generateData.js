const ARENASIZE = 400
const USMAX = 2
const PADDING = 25
const MOVELENGTH = 75


function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloatFromRange(min, max) {
  return Math.random() * (max - min) + min
}

function cube(x, y, name, pickedUp) {
  this.x = x
  this.y = y
  this.name = name
  this.pickedUp = pickedUp
};

function obstacle() {
  this.x = x
  this.y = y
};

var obj = {
   speed: 0,
   ultraSonics: [USMAX,USMAX,USMAX,USMAX,USMAX,USMAX,USMAX,USMAX],
   robotLocation: [(ARENASIZE/2),(ARENASIZE/2)],
   cubes: [],
   obstacles: [],
   heading: 0,
   motherShip: [randomIntFromRange(0, ARENASIZE),randomIntFromRange(0, ARENASIZE)]
};

for (i=0; i<6; i++) {
  x = randomIntFromRange(PADDING, ARENASIZE-PADDING)
  y = randomIntFromRange(PADDING, ARENASIZE-PADDING)
  obj.cubes.push(new cube(x, y, 'U', false))
}
obj.cubes[0].name = 'A'
obj.cubes[1].name = 'B'
obj.cubes[2].name = 'C'
obj.cubes[3].name = 'D'
obj.cubes[4].name = 'E'
obj.cubes[5].name = 'F'

for (i=0; i<15; i++) {
  x = randomIntFromRange(PADDING, ARENASIZE-PADDING)
  y = randomIntFromRange(PADDING, ARENASIZE-PADDING)
  obj.obstacles.push(new obstacle(x, y))
}

goingUp = true
pause = 0
usState = [0,0,0,0,0,0,0,0]
moveCount = 0
newDir = 10
battTime = 0
battPercent = 100
phaseCount = 0

var getNewDirection = function() {
  cont = true
  count = 0

  while (true) {
    newDir = randomIntFromRange(0,3)
    if (newDir == 0) {
      // north
      newX = obj.robotLocation[0]
      newY = obj.robotLocation[1]+MOVELENGTH
    } else if (newDir == 1) {
      // east
      newX = obj.robotLocation[0]+MOVELENGTH
      newY = obj.robotLocation[1]
    } else if (newDir == 2) {
      // south
      newX = obj.robotLocation[0]
      newY = obj.robotLocation[1]-MOVELENGTH
    } else {
      // west
      newX = obj.robotLocation[0]-MOVELENGTH
      newY = obj.robotLocation[1]
    }

    if (newX<PADDING || newX>(ARENASIZE-PADDING) ||  newY<PADDING || newY>(ARENASIZE-PADDING)) {
      // driving out of bounds
      count++
    } else {
      break
    }
    if (count == 4) {
      console.log("ERROR: Out of options to drive")
      break
    }
  }

  return newDir
}

setInterval(function() {
  // method to be executed;

  // speeds----------------------------------------
  // if (pause > 10) {
  //   // speed up and down
  //   if (goingUp) {
  //     // meters per second
  //     obj.speed += randomFloatFromRange(0.08, 0.12);//acceleration code
  //   } else {
  //     obj.speed -= randomFloatFromRange(0.08, 0.12)
  //   }
	//    document.getElementById("speed").innerHTML = obj.speed.toFixed(3).concat("m/s");//pushes to html doc
  //   if (obj.speed >= 1.0) {
  //     goingUp = false
  //   }
  //   if (obj.speed <= 0) {
  //     goingUp = true
  //   }
  //   if (randomIntFromRange(0,10) > 8) {
  //     // pause for 3 secconds
  //     //console.log("Pausing...")
  //     if (randomIntFromRange(0,1) == 1) {
  //       // change direction
  //       //console.log("Change direction..")
  //       goingUp != goingUp
  //     }
  //     pause = 0
  //   }
  // }


  //console.log("Speed: " + obj.speed.toFixed(3))
  pause++

  // ultraSonics----------------------------------------
  for(i=0; i<obj.ultraSonics.length; i++) {

    if (randomIntFromRange(0,500) == 9 && usState[i] == 0) {
      // simulate object coming close
      usState[i] = -1
      obj.ultraSonics[i] -= randomIntFromRange(0.2,0.6)
    }

    if (usState[i] == 1) {
      obj.ultraSonics[i] += randomFloatFromRange(0.02, 0.06)
    } else if (usState[i] == -1) {
      obj.ultraSonics[i] -= randomFloatFromRange(0.02, 0.04)
    }

    obj.ultraSonics[i] = Math.round(obj.ultraSonics[i] * 100) / 100;
    // if (obj.ultraSonics[i] == 2) {
    //   obj.ultraSonics[i] += .01
    // }

    if (obj.ultraSonics[i] >= USMAX) {
      usState[i] = 0
    }
    if (obj.ultraSonics[i] <= 0.8) {
      usState[i] = 1
    }
  }

  sensors(obj.ultraSonics)

  // BLOCKS----------------------------------------------
  if (randomIntFromRange(0, 100) == 99) {
    // block picked up
    choice = randomIntFromRange(0, 5)
    if(!obj.cubes[choice].pickedUp) {
      console.log("INFO: Cube " + obj.cubes[choice].name + " picked up.")
      obj.cubes[choice].pickedUp = true
      obj.cubes[choice].x = 0
      obj.cubes[choice].y = 0
      highLight(obj.cubes[choice].name)
    }
  }

  // MOVE ROBOT ------------------------------------------
  if (moveCount < MOVELENGTH && newDir < 6) {
    if (newDir == 0) {
      // north
      obj.robotLocation[1]++
    } else if (newDir == 1) {
      // east
      obj.robotLocation[0]++
    } else if (newDir == 2) {
      // south
      obj.robotLocation[1]--
    } else {
      // west
      obj.robotLocation[0]--
    }
    moveCount++

  } else {
    if (randomIntFromRange(0,150) == 11) {
      console.log("Changing direction: ")
      newDir = getNewDirection()
      moveCount = 0
      obj.speed = randomFloatFromRange(0.2, 0.9)
    } else {
      obj.speed = 0
    }
  }
  document.getElementById("speed").innerHTML = obj.speed.toFixed(3).concat("m/s");//pushes to html doc

  // BATT-PHASE ------------------------------------------------------------------
  if (battTime % 100 == 0) {
    if (battPercent == 0) {
      battPercent = 100
    }
    battPercent--
    document.getElementById("battProgress").value = battPercent
  }

  if (battTime % 500 == 0) {
    phaseCount++
    phase = "Phase" + phaseCount
    document.getElementById("phase").innerHTML = phase
  }



  battTime++
}, 30);
