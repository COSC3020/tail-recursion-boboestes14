const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


for(i = 0; i < 23; i++){
    assert(fib(i+1) == fibonacci(i))
}