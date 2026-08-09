/**
 * Checking working age
 * @param {number} age - Person's age
 * @returns {boolean} true or false
 */

function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}


/**
 *  Check if the first number divides evenly by the second
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {boolean} - true or false
 */
const checkMultiplicity = function (num1, num2) {
  return num1 % num2 === 0;
};



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

