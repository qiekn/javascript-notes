console.log("------------------------: to number");
const year = 2025;
console.log(year, "is", typeof Number(year)); // convert to number

console.log(Number("qiekn")); // NaN (Not a Number)
console.log("btw, NaN is a", typeof NaN); // is a specific number

console.log("-------------------------: to string");

console.log(String(123), "is", typeof String(123));

console.log("-------------------------: type coerction");

console.log("I am " + 23 + " years old.");
console.log("31" - "20" - 1); // 10
console.log("23" / "2"); // 11.5
console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);
