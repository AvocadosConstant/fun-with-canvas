function outlinePoly(ctx, pts) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x ,pts[0].y);
  for(var i = 0; i < pts.length; i++) {
    ctx.lineTo(pts[(i+1)%pts.length].x, pts[(i+1)%pts.length].y);
  }
  ctx.stroke();
}

function nestPoly(pts, factor) {
  nestPts = [];
  for(var i = 0; i < pts.length; i++) {
    a = pts[i];
    b = pts[(i+1)%pts.length];
    dx = b.x - a.x;
    dy = b.y - a.y;
    dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

    // For the offsets:
    // if denominator is
    //   100: factor specifies a percentage
    //   dist:factor specifies an exact px distance
    xOffset = factor*dx/100; 
    yOffset = factor*dy/100;
    nestPts.push({
      x: a.x + xOffset, 
      y: a.y + yOffset
    });
  }
  return nestPts;
}

function generateChaoticPts(numVerts, minX, maxX, minY, maxY) {
  var pts = []; 
  for(var i = 0; i < numVerts; i++) {
    pts.push({
      x: Math.random() * (maxX - minX) + minX, 
      y: Math.random() * (maxY - minY) + minY 
    });
  }
  return pts;
}

function drawNestedConstruction(pts) {
  for(var i = 0; i < 64; i++) {
    outlinePoly(ctx, pts);
    pts = nestPoly(pts, 4);
  }
}


var CANVAS = {
  id: "canvas",
  width: 800, 
  height: 600,
  border: 10,
  color: "#fafcdc"
};

var canvas = document.getElementById(CANVAS.id);
var ctx = canvas.getContext("2d");

//  draw canvas
ctx.fillStyle = CANVAS.color;
ctx.fillRect(0, 0, CANVAS.width, CANVAS.height);

var NUM_SHAPES = 1;
var NUM_SIDES = 32;
for(var i = 0; i < NUM_SHAPES; i++) {
  drawNestedConstruction(
      generateChaoticPts(
        NUM_SIDES, 
        CANVAS.border, CANVAS.width - CANVAS.border, 
        CANVAS.border, CANVAS.height - CANVAS.border
      )
  );
}
