// function isWorkingAgePerson(age) {
//   return age >= 16 && age <= 64;
// }

// console.log(isWorkingAgePerson(16));
// console.log(isWorkingAgePerson(13));
// console.log(isWorkingAgePerson(18));
// console.log(isWorkingAgePerson(30));
// console.log(isWorkingAgePerson(64));
// console.log(isWorkingAgePerson(70));

// const checkMultiplicity = function (num1, num2) {
//   return num1 % num2 === 0;
// };

// console.log(checkMultiplicity(10,2));
// console.log(checkMultiplicity(11,2));
// console.log(checkMultiplicity(10,5));
// console.log(checkMultiplicity(10,3));
// console.log(checkMultiplicity(15,3));
// console.log(checkMultiplicity(1,2));

// function calculateSurfaceArea(shapeType, param1, param2 = 1) {
//   if (shapeType === "cube" && param1 > 0 && param2 > 0) {
//     return 6 * param1 ** 2;
//   }
//   if (shapeType === "cylinder" && param1 > 0 && param2 > 0) {
//     return 2 * Math.PI * param1 * (param1 + param2);
//   } else {
//     return 0;
//   }
// }

// console.log(calculateSurfaceArea("cube", 3));
// console.log(calculateSurfaceArea("cube", 3, 3));
// console.log(calculateSurfaceArea("cbe", 3, 3));
// console.log(calculateSurfaceArea("cube", -3, 3));
// console.log(calculateSurfaceArea("cube", 3, 0));

const calculatePaintBoxes = function (area, layersCount =1){
return Math.ceil(area*0.1*layersCount);
}

console.log(calculatePaintBoxes(20,1));
console.log(calculatePaintBoxes(25,3));
console.log(calculatePaintBoxes(35,5));



