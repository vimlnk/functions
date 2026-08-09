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

function calculateSurfaceArea(shapeType, param1, param2 = 1) {
  if (shapeType === "cube" && param1 > 0 && param2 > 0) {
    return 6 * param1 ** 2;
  }
  if (shapeType === "cylinder" && param1 > 0 && param2 > 0) {
    return 2 * Math.PI * param1 * (param1 + param2);
  } else {
    return 0;
  }
}

const calculatePaintBoxes = function (area, layersCount = 1) {
  if (
    area <= 0 ||
    typeof area !== "number" ||
    layersCount <= 0 ||
    typeof layersCount !== "number"
  ) {
    return 0;
  }
  return Math.ceil(area * 0.1 * layersCount);
};

const shapeType = "cube";
const area = calculateSurfaceArea("cube", 3, 5);
const layersCount = 1;
const paintBoxes = calculatePaintBoxes(area, layersCount);

if (area === 0 || paintBoxes === 0) {
  console.log("Неможливо виконати розрахунок через некоректні дані.");
} else {
  console.log(
    `Для фарбування фігури ${shapeType} у ${layersCount} шарів необхідно придбати ${paintBoxes} банок фарби.`,
  );
}
