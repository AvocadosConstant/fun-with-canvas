function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

function walk(ctx, particle) {
  updateParticle(particle);
  printParticle(particle);
}

function printParticle(p) {
  console.log("Particle data:");
  console.log("\td\tp\tv\ta");
  for(var i = 0; i < p.dims; i++) {
    console.log("\t%d\t%d\t%d\t%d",
      i, p.pos[i], p.vel[i], p.acc[i]
    );
  }
}
