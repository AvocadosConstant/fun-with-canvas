function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMagnitude(vec) {
  var mag = 0;
  vec.forEach(function(e){
    mag += e*e;
  });
  return Math.sqrt(mag);
}

function getDirVec(from, to, unit=false) {
  if(from.length != to.length)
    throw "Mismatched vector sizes";
  dir = [];
  for(var i = 0; i < from.length; i++) {
    dir.push(to[i] - from[i]);
  }
  if(unit) {
    var mag = getMagnitude(dir);
    if(mag > 0) {
      dir = dir.map(function(v){
        return v / mag;
      });
    }
  }
  return dir;
}

function createParticle(numDims) {
  return {
    dims: numDims,
    focus: Array(numDims).fill(0),
    pos: Array(numDims).fill(0),
    vel: Array.from(
      {length: numDims},
      () => randInt(-5, 5)),
    acc: Array(numDims).fill(0)
  };
}

function updateParticle(p) {
  for(var i = 0; i < p.dims; i++) {
    p.vel[i] += p.acc[i];
    p.pos[i] += p.vel[i];
  }
};

function traceParticle(ctx, origPos, newPos) {
  ctx.beginPath();
  // Generalize for all dims
  var xOff = 400;
  var yOff = 300;

  var oldX = Math.floor(xOff + 10*origPos[0]);
  var oldY = Math.floor(yOff + 10*origPos[1]);

  var newX = Math.floor(xOff + 10*newPos[0]);
  var newY = Math.floor(yOff + 10*newPos[1]);

  ctx.moveTo(oldX, oldY);
  ctx.lineTo(newX, newY);
  ctx.stroke();
}

function walk(ctx, particle) {
  var origPos = particle.pos.slice();
  var dir = getDirVec(particle.pos, particle.focus, true);
  // "Gravity" towards the focal point
  particle.acc = dir;

  // Some tangential acceleration
  /*
  particle.acc[0] += -dir[1]/randInt(10, 30);
  particle.acc[1] += dir[0]/randInt(10, 30);
  var mag = getMagnitude(particle.acc);
  if(mag > 0) {
    particle.acc[0] /= mag;
    particle.acc[1] /= mag;
  }
  */

  updateParticle(particle);
  printParticle(particle);
  traceParticle(ctx, origPos, particle.pos);
}

function printParticle(p) {
  console.log("Particle data:");
  console.log("\td\tp\t\tv\t\ta");
  for(var i = 0; i < p.dims; i++) {
    console.log("\t%d\t%s\t%s\t%s",
      i, p.pos[i].toFixed(2), p.vel[i].toFixed(2), p.acc[i].toFixed(2)
    );
  }
}
