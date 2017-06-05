var RIGHT = 1;
var LEFT = -1;

var BLACK = "#444";
var WHITE = "#eee";
var RED   = "#f44";

function createAnt() {
  var ant = {
    prevX: -1,
    prevY: -1,
    x: 40,
    y: 30,
    dir: 0,    // NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3
    blackCells: {}
  };
  return ant;
}

function shiftPos(ant, turn) {
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
}

function updateAnt(ctx, ant) {
  var pos = ant.x + "-" + ant.y;
  ant.prevX = ant.x; 
  ant.prevY = ant.y; 

  if(pos in ant.blackCells) {   // pos is black 
    delete ant.blackCells[pos]; // remove pos from ant.blackCells
    ctx.fillStyle = WHITE; // make pos white
    ctx.fillRect(ant.x * 10, ant.y * 10, 10, 10);
    shiftPos(ant, LEFT);         // make ant turn left
  }
  else {                    // pos is white
    ant.blackCells[pos] = true; // add pos to ant.blackCells
    ctx.fillStyle = BLACK; //make pos black
    ctx.fillRect(ant.x * 10, ant.y * 10, 10, 10);
    shiftPos(ant, RIGHT);        // make ant turn right
  }

  ctx.fillStyle = RED; 
  ctx.fillRect(ant.x * 10 + 1, ant.y * 10 + 1, 8, 8);

  if((ant.prevX + "-" + ant.prevY) in ant.blackCells) ctx.fillStyle = BLACK;
  else ctx.fillStyle = WHITE;
  ctx.fillRect(ant.prevX * 10, ant.prevY * 10, 10, 10);
}
