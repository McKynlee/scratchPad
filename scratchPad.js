// FizzBuzz

for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 5 == 0) {
    console.log("Fizz");
  }
  else if (i % 3 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
};


// OR:
for (let i = 1; i < 101; i++) {
  let fizz = (i % 3 == 0);
  let buzz = (i % 5 == 0);

  // 1) if fizz is true 1a) AND buzz is true, then log "Fizzbuzz" else 1b) log "Fizz"
  // 2) if fizz is not true 2a) but buzz is true, then log "Buzz" else 2b) log i
  console.log(fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : i);
};




// Sum even numbers in Fibonacci sequence up to a Limit
let fibonacciArray = [1, 1];

while (fibonacciArray[fibonacciArray.length - 1] < Limit) {
  fibonacciArray.push(fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1])
}

let sumOfFibonacciEvens = 0;

for (let i = 0; i < fibonacciArray.length; i++) {
  if (fibonacciArray[i] % 2 == 0) {
    sumOfFibonacciEvens += fibonacciArray[i];
  }
}

console.log(sumOfFibonacciEvens);