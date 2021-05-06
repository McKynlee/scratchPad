const isEven = (i) => i % 2 === 0;
const isOdd = (i) => i % 2 !== 0;

function fibSum(limit, filter, n1, n2) {
  if (filter === undefined) { filter = () => true }
  if (n1 === undefined) { n1 = 1; }
  if (n2 === undefined) { n2 = 1; }
  const next = n1 + n2;
  if (next >= limit) {
    return 0;
  }
  if (filter(next)) {
    return next + fibSum(limit, filter, n2, next);
  } else {
    return fibSum(limit, filter, n2, next);
  }
}

console.log(`Sum of evens:\t${fibSum(4000000, isEven)}`);
console.log(`Sum of odds:\t${fibSum(4000000, isOdd)}`);
console.log(`Sum of all:\t${fibSum(4000000)}`);
