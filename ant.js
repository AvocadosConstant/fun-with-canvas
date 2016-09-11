var RIGHT = 1;
var LEFT = -1;

var BLACK = "#444";
var WHITE = "#eee";
var RED   = "#f44";

var blackCells = {};

var ant = {
  prevX: -1,
  prevY: -1,
  x: 40,
  y: 30,
  dir: 0    // NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3
};

var CANVAS = {
  id: "antCanvas",
  width: 800, 
  height: 600,
  border: 10,
  color: "#fafcdc"
};

function shiftPos(turn) {
  //console.log("Ant is at (" + ant.x + ", " + ant.y + ") and is turning " + turn);
  ant.dir = (ant.dir + turn + 4) % 4;
  switch(ant.dir) {
    case 0:
      ant.y--; break;
    case 1:
      ant.x++; break;
    case 2:
      ant.y++; break;
    case 3:
      ant.x--; break;
    default:
      console.log("Something went wrong in function shiftPos!");
      break;
  }
  //console.log("Ant is now at (" + ant.x + ", " + ant.y + ") and is facing " + ant.dir);
}

function updateAnt(times) {
  var pos = ant.x + "-" + ant.y;
  //console.log(pos);
  ant.prevX = ant.x; 
  ant.prevY = ant.y; 

  if(pos in blackCells) {   // pos is black 
    delete blackCells[pos]; // remove pos from blackCells
    ctx.fillStyle = WHITE; // make pos white
    ctx.fillRect(ant.x * 10, ant.y * 10, 10, 10);
    shiftPos(LEFT);         // make ant turn left
  }
  else {                    // pos is white
    blackCells[pos] = true; // add pos to blackCells
    ctx.fillStyle = BLACK; //make pos black
    ctx.fillRect(ant.x * 10, ant.y * 10, 10, 10);
    shiftPos(RIGHT);        // make ant turn right
  }

  ctx.fillStyle = RED; 
  ctx.fillRect(ant.x * 10 + 1, ant.y * 10 + 1, 8, 8);

  if((ant.prevX + "-" + ant.prevY) in blackCells) ctx.fillStyle = BLACK;
  else ctx.fillStyle = WHITE;
  ctx.fillRect(ant.prevX * 10, ant.prevY * 10, 10, 10);

  //console.log(blackCells);
  //console.log("There are " + Object.keys(blackCells).length + " black cells!");
}

var canvas = document.getElementById(CANVAS.id);
var ctx = canvas.getContext("2d");

//  draw canvas
ctx.fillStyle = CANVAS.color;
ctx.fillRect(0, 0, CANVAS.width, CANVAS.height);

var gameTimer = setInterval(updateAnt, 1);
