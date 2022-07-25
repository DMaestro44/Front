const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
 
function randomOdd(n, m) {
    let min = Math.min(n, m);
    min = min + !(min % 2);
    let max = Math.max(n, m);
    max = max - !(max % 2);
    return min + random(0, (max - min) / 2) * 2;
}
console.log(randomOdd(0, 100));
console.log(randomOdd(2, 5));
console.log(randomOdd(100, -5));
console.log(randomOdd(-3, -10));