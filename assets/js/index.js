// function isWorkingAgePerson(age) {
//   return age >= 16 && age <= 64;
// }

// console.log(isWorkingAgePerson(16));
// console.log(isWorkingAgePerson(13));
// console.log(isWorkingAgePerson(18));
// console.log(isWorkingAgePerson(30));
// console.log(isWorkingAgePerson(64));
// console.log(isWorkingAgePerson(70));

/**
 *  Check if the first number divides evenly by the second
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {boolean} - true or false
 */
const checkMultiplicity = function (num1, num2) {
  return num1 % num2 === 0;
};

console.log(checkMultiplicity(10, 2));
console.log(checkMultiplicity(11, 2));
console.log(checkMultiplicity(10, 5));
console.log(checkMultiplicity(10, 3));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(1, 2));
