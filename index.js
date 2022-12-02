"use strict";



function faktorialOfNum(num) {
  if (typeof num !== "number" && typeof num !== "bigint") {
    throw new TypeError("type not right");
  }
    if (num < 0) {
        throw new Error('num must be positive!')
    }
  if (num === 0 || num === 0n) {
    return typeof num ==='bigint' ? 1n:1
  }
  
  return num * faktorialOfNum(num - (typeof num === "bigint" ? 1n : 1));
}
try {
    console.log(faktorialOfNum(220n));
} catch (error) {
    console.log(error)
}