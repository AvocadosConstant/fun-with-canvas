function createParticle(numDims) {
  dimensions = []
  for(var i = 0; i < numDims; i++) {
    dimensions.push({
      dim: i,
      position: 0,
      velocity: 0,
      acceleration: 0
    });
  }
  return {dims: dimensions};
}

function walk(ctx, particle) {
  printParticle(particle);
}

function printParticle(particle) {
  console.log("Particle data:");
  console.log("\td\tp\tv\ta");
  particle.dims.forEach(function(d) {
    console.log("\t%d\t%d\t%d\t%d",
      d.dim, d.position, d.velocity, d.acceleration
    );
  });
}
