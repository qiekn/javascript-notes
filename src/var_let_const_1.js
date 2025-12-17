// ----------------------------------------------------------------------------: var

if (true) {
  var x = 10;
}

// We can access x outside function scope
console.log(x); // 10

// ----------------------------------------------------------------------------: let and const

if (true) {
  const PI = 3.14;
  let a = 10;
}

// We can't access this variables outside function scope

// console.log(a); // ReferenceError
// console.log(PI); // ReferenceError
