function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function superSum(from, upTo) {
  var sum = 0;
  for (i = from; i <= upTo; i++) {
    sum += i;
  }

  return sum;
}

console.log(superSum(1, 10));
