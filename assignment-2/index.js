// Task 1: Use map to convert an array of numbers into an array of their cubes.
function cubeArray(arr) {
  return arr.map((num) => Math.pow(num, 3));
}

// Task 2: Use reduce to find the sum of all elements in an array.
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// Task 3: Use filter to find all prime numbers in an array.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime);
}

// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
function averageOfSquaredOdds(arr) {
  const squaredOdds = arr
    .filter((num) => num % 2 !== 0)
    .map((num) => Math.pow(num, 2));
  const sumOfSquares = squaredOdds.reduce((acc, num) => acc + num, 0);
  return sumOfSquares / squaredOdds.length;
}

// Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
function findLongestString(arr) {
  return arr.reduce(
    (longest, str) => (str.length > longest.length ? str : longest),
    ""
  );
}

// Task 6: Use map to capitalize the first letter of each word in a sentence.
function capitalizeFirstLetters(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Task 7: Use filter to find all students who passed the exam.
function filterPassingStudents(students) {
  return students.filter((student) => student.score >= 60);
}

// Task 8: Create a Private Counter for Multiple Instances
function createInstanceCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// Task 9: Create a Promise-Based Calculator
function calculate(a, b, operation) {
  return new Promise((resolve, reject) => {
    if (operation === "add") resolve(a + b);
    else if (operation === "subtract") resolve(a - b);
    else if (operation === "multiply") resolve(a * b);
    else if (operation === "divide") {
      if (b === 0) reject("Cannot divide by zero");
      else resolve(a / b);
    } else reject("Invalid operation");
  });
}

// Task 10: Calculate total score
function calculateTotalScore(objects) {
  let totalScore = 0;
  objects.forEach(function (item) {
    totalScore += item.score;
  });
  return totalScore;
}

const numbers = [1, 2, 3, 4, 5];
const cubes = cubeArray(numbers);
console.log(cubes); // Output: [1, 8, 27, 64, 125]

const numbers2 = [1, 2, 3, 4, 5];
const sum = sumArray(numbers2);
console.log(sum); // Output: 15

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = filterPrimes(numbers3);
console.log(primes); // Output: [2, 3, 5, 7]

const numbers4 = [1, 2, 3, 4, 5];
const average = averageOfSquaredOdds(numbers4);
console.log(average); // Output: 11 (since (1^2 + 3^2 + 5^2) / 3 = 35 / 3 = 11.67)

const strings = ["apple", "banana", "cherry", "date"];
const longestString = findLongestString(strings);
console.log(longestString); // Output: "banana"

const sentence = "hello world, this is a test sentence.";
const capitalizedSentence = capitalizeFirstLetters(sentence);
console.log(capitalizedSentence); // Output: "Hello World, This Is A Test Sentence."

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 59 },
  { name: "Charlie", score: 70 },
];
const passingStudents = filterPassingStudents(students);
console.log(passingStudents);
// Output: [{ name: "Alice", score: 85 }, { name: "Charlie", score: 70 }]

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2

calculate(10, 5, "add")
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Output: 15
calculate(10, 5, "subtract")
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Output: -5
calculate(10, 5, "multiply")
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Output: 50
calculate(10, 5, "divide")
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Output: 2
calculate(10, 0, "divide")
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Output: Cannot divide by zero
calculate(10, 5, "modulus")
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Output: Invalid operation

const objectsArray = [{ score: 10 }, { score: 20 }, { score: 30 }];

const totalScore = calculateTotalScore(objectsArray);
console.log(totalScore); // Output: 60
