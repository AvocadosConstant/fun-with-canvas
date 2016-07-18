var RIGHT = 1;
var LEFT = -1;

var blackCells = {};

var ant = {
  x: 400,
  y: 300,
  dir: 0 
    /*
      NORTH = 0
      EAST = 1
      SOUTH = 2
      WEST = 3
    */
};

var CANVAS = {
  id: "antCanvas",
  width: 800, 
  height: 600,
  border: 10,
  color: "#fafcdc"
};

function shiftPos(turn) {
  console.log("Ant is at (" + ant.x + ", " + ant.y + ") and is turning " + turn);
  ant.dir = (ant.dir + turn + 4) % 4;
  switch(ant.dir) {
    case 0:
      ant.y--;
      break;
    case 1:
      ant.x++;
      break;
    case 2:
      ant.y++;
      break;
    case 3:
      ant.x--;
      break;
    default:
      console.log("Something went wrong in function shiftPos!");
      break;
  }
  console.log("Ant is now at (" + ant.x + ", " + ant.y + ") and is facing " + ant.dir);
}

function updateAnt() {
  var pos = ant.x + "-" + ant.y;
  //console.log(pos);
  
  if(pos in blackCells) {
    // pos is black 
    // remove pos from blackCells
    delete blackCells[pos];
    // make pos white
    ctx.fillStyle = "#f00";
    ctx.fillRect(ant.x, ant.y, 1, 1 );
    // make ant turn left
    shiftPos(LEFT);
  }
  else {
    // pos is white
    // add pos to blackCells
    blackCells[pos] = true;
    //make pos black
    ctx.fillStyle = "#0f0";
    ctx.fillRect(ant.x, ant.y, 1, 1 );
    // make ant turn right
    shiftPos(RIGHT);
  }

  console.log(blackCells);
  console.log("There are " + Object.keys(blackCells).length + " black cells!");
}

var canvas = document.getElementById(CANVAS.id);
var ctx = canvas.getContext("2d");

//  draw canvas
ctx.fillStyle = CANVAS.color;
ctx.fillRect(0, 0, CANVAS.width, CANVAS.height);

var gameTimer = setInterval(updateAnt, 1);


