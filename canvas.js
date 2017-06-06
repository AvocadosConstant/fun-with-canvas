var POLY_CANVAS = {
  id: "polyCanvas",
  width: 800, 
  height: 600,
  border: 10,
  color: "#fafcdc"
};

var ANT_CANVAS = {
  id: "antCanvas",
  width: 800, 
  height: 600,
  border: 10,
  color: "#fafcdc"
};

var WALK_CANVAS = {
  id: "walkCanvas",
  width: 800, 
  height: 600,
  border: 10,
  color: "#fafcdc"
};

/**
 * Sets up a canvas according to the provided schema.
 *
 * @returns the canvas' context
 */
function initContext(CANVAS) {
  var canvas = document.getElementById(CANVAS.id);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = CANVAS.color;
  ctx.fillRect(0, 0, CANVAS.width, CANVAS.height);
  return ctx;
}

function draw() {
  var polyCtx = initContext(POLY_CANVAS);
  var NUM_SHAPES = 4, NUM_SIDES = 12;
  drawConstructions(polyCtx, POLY_CANVAS, NUM_SHAPES, NUM_SIDES);

  var antCtx = initContext(ANT_CANVAS);
  var ant = createAnt();
  var antTimer = setInterval( function(){
    updateAnt(antCtx, ant);
  }, 1);

  var walkCtx = initContext(WALK_CANVAS);
  var particle = createParticle(2);
  printParticle(particle);
  var walkTimer = setInterval( function(){
    walk(walkCtx, particle);
  }, 4);
}

draw();
