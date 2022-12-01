"use strict";



function faktorialOfNum(num) {
  if (typeof num !== "number") {
    throw new TypeError("type not right");
    }
    if (num < 0) {
        throw new Error('num must be positive!')
    }
  if (num === 0) {
    return 1;
  }
  return num * faktorialOfNum(num - 1);
}
try {
    console.log(faktorialOfNum(6));
} catch (error) {
    console.log(error)
}