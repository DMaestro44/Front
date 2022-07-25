let a = 13.123456789;
let b = 2.123;
let n = 5;

let aNormalized = Math.round(a%1*Math.pow(10, n));
let bNormalized = Math.round(b%1*Math.pow(10, n));

console.log ("1 ", aNormalized > bNormalized);
console.log ("2 ", aNormalized < bNormalized);
console.log ("3 ", aNormalized >= bNormalized);
console.log ("4 ", aNormalized <= bNormalized);
console.log ("5 ", aNormalized === bNormalized);
console.log ("6 ", aNormalized !== bNormalized);