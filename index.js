"use strict";



function faktorialOfNum(num) {
  if (typeof num !== ("number" && "bigint")) {
    throw new TypeError("type not right");
  }
    if (num < 0n) {
        throw new Error('num must be positive!')
    }
  if (num === 0n) {
    return 1n;
  }
  return num * faktorialOfNum(num - 1n);
}
try {
    console.log(faktorialOfNum(220n));
} catch (error) {
    console.log(error)
}