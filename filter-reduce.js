const fibGen = (limit) => {
  let fibs = [0,1];
  while (true) {
    const nextFib = fibs[fibs.length-1] + fibs[fibs.length-2]
    if (nextFib < limit) fibs.push(nextFib);
    else break;
  }
  return fibs;
};

const answer = fibGen(4000000)
  .filter(f => f % 2 == 0)
  .reduce((acc, f) => acc += f, 0);

console.log(`sum: ${answer}`);
