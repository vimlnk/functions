/**
 * Checking working age
 * @param {number} age - Person's age
 * @returns {boolean} true or false
 */

function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}

console.log(isWorkingAgePerson(16));
console.log(isWorkingAgePerson(13));
console.log(isWorkingAgePerson(18));
console.log(isWorkingAgePerson(30));
console.log(isWorkingAgePerson(64));
console.log(isWorkingAgePerson(70));
