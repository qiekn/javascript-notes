const firstName = "qiekn";
const job = "hacker";
const birthYear = "2000";
const year = "2025";

// String
const introduction =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(introduction);

// Template string
const introductionNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(introductionNew);

console.log(`stirng
multiple
lines
`);
