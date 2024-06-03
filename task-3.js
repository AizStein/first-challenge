let people = [
  { firstname: "John", lastname: "Smith", age: 16 },
  { firstname: "David", lastname: "Bowie", age: 23 },
  { firstname: "Bryan", lastname: "Molko", age: 18 },
  { firstname: "Britney", lastname: "Spears", age: 17 },
  { firstname: "Aimme", lastname: "Winehouse", age: 27 },
  { firstname: "Kurt", lastname: "Cobain", age: 21 },
  { firstname: "Justin", lastname: "Bieber", age: 12 },
];

/* Write a function that returns an array that contains only the adults */

const adultsOnly = people.filter((people) => people.age >= 18);

console.log(adultsOnly);