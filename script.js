function outlineShape(pts) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(pts[0].x ,pts[0].y);
  for(i = 1; i < pts.length; i++) {
    ctx.lineTo(pts[i].x, pts[i].y);
  }
  ctx.closePath();
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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasSize = {width: 400, height: 400};

ctx.fillStyle = "#EEE";
ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

var pts = []; 
for(i = 0; i < 16; i++) {
  pts.push({x: Math.random()*canvasSize.width, y: Math.random()*canvasSize.height});
  console.log(pts[i].x + ", " + pts[i].y);
}
outlineShape(pts);

// Using a loop breaks this. Probably some limitation from canvas drawing async stuff. 
// Need to do more research.
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
pts = nestShape(pts, 4);
outlineShape(pts);
