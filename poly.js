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

function drawNestedConstruction(ctx, pts) {
  for(var i = 0; i < 64; i++) {
    outlinePoly(ctx, pts);
    pts = nestPoly(pts, 4);
  }
}

function drawConstructions(ctx, POLY_CANVAS, NUM_SHAPES, NUM_SIDES) {
  for(var i = 0; i < NUM_SHAPES; i++) {
    drawNestedConstruction(
        ctx,
        generateChaoticPts(
          NUM_SIDES, 
          POLY_CANVAS.border, POLY_CANVAS.width - POLY_CANVAS.border, 
          POLY_CANVAS.border, POLY_CANVAS.height - POLY_CANVAS.border
        )
    );
  }
}
