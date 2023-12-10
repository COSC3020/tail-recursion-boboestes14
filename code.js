function fib(m) {
  function fibplus(n){
      if (n[0][0] >= 2) return fibplus(addTo(n))
      else return n[0][1]
  }
  return fibplus([[m, 0], [m-1, 1]])
}
function addTo(k){
  x = k.shift()
  k[0][1] = x[1]+k[0][1]
  k.push([x[0]-2, x[1]])
  return k
}

//this program works for sure for finding fib
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}