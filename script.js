function outlineShape(ctx, pts) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x ,pts[0].y);
  for(i = 0; i < pts.length; i++) {
    ctx.lineTo(pts[(i+1)%pts.length].x, pts[(i+1)%pts.length].y);
  }
  ctx.stroke();
}

function nestShape(pts, factor) {
  nestPts = [];
  for(i = 0; i < pts.length; i++) {
    a = pts[i];
    b = pts[(i+1)%pts.length];
    dx = b.x - a.x;
    dy = b.y - a.y;
    dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    xOffset = factor*dx/dist;
    yOffset = factor*dy/dist;
    nestPts.push({x: a.x + xOffset, y: a.y + yOffset});
  }
  return nestPts;
}

function generatePts(num, minX, maxX, minY, maxY) {
  var pts = []; 
  for(i = 0; i < num; i++) {
    pts.push({
      x: Math.random() * (maxX - minX) + minX, 
      y: Math.random() * (maxY - minY) + minY 
    });
  }
  return pts;
}

function drawNestedConstruction(pts) {
  for(iter = 0; iter < 24; iter++) {
    outlineShape(ctx, pts);
    pts = nestShape(pts, 12);
  }
}




var CANVAS = {
  id: "canvas",
  width: 800, 
  height: 600,
  border: 10
};

var canvas = document.getElementById(CANVAS.id);
var ctx = canvas.getContext("2d");

//  draw canvas
ctx.fillStyle = "#fafcdc";
ctx.fillRect(0, 0, CANVAS.width, CANVAS.height);

drawNestedConstruction(
    generatePts(
      32, 
      CANVAS.border, CANVAS.width - CANVAS.border, 
      CANVAS.border, CANVAS.height - CANVAS.border
    )
);
