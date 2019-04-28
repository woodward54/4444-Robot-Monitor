var cube = {
  x: 0,
  y: 0,
  name: 'U'
};

var obstacle = {
  x: 0,
  y: 0
};

var obj = {
   speed: 0,
   ultraSonics = [0,0,0,0,0,0,0],
   lidar = 0,

   cubes = [],
   obstacles = [],
   motherShip = [0,0]

   for (i=0; i<6; i++) {
     cubes.push(new cube())
   }

   for (i=0; i<15; i++) {
     obstacles.push(new obstacle())
   }

};

setInterval(function() {
  // method to be executed;


  obj.speed += 0.1          // meters per second

  var json = JSON.stringify(obj);

  var fs = require('fs');
  fs.writeFile('myjsonfile.json', json, 'utf8', callback);

}, 1000);
