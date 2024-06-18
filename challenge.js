const getMinMax = function (arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
};

console.log(getMinMax([1, 2, 3, 489]));

const getArea = function (width, length) {
  const area = width * length;
  return area;
};
console.log(getArea(2, 4));

const rectangleArea = (width, length) => length * width;
console.log(rectangleArea(4, 8));

// IIFE

(function getCelcius(far) {
  const celcius = ((far - 32) * 5) / 9;
  console.log(celcius);
})(60);

const date = new Date(2024, 7, 17, 18, 4, 6);
const month = date.getMonth();
const hour = date.getHours();

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  default:
    console.log("Else");
}

switch (true) {
  case hour < 18:
    console.log("18");
    break;

  case hour > 5:
    console.log("5");
    break;

  default:
    console.log("neither 3 nor 5");
}

function calculator(num1, num2, operator) {
  if (operator === "+") {
    const sum = num1 + num2;
    console.log(sum);
  } else if (operator === "-") {
    const sub = num1 - num2;
    console.log(sub);
  } else if (operator === "*") {
    const mul = num1 * num2;
    console.log(mul);
  } else if (operator === "/") {
    const div = num1 / num2;
    console.log(div);
  } else {
    console.log("can not be calculated");
  }
}

calculator(2, 3, "*");

const calculatorTwo = (num1, num2, operator) => {
  switch (operator) {
    case operator === "+":
      console.log(num1 + num2);
      break;

    case operator === "-":
      console.log(num1 - num2);
      break;

    default:
      console.log("does not work");
  }
};
calculator(5, 6, "+");

function switchCalc(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + nim2;
      break;

    case "-":
      result = num1 - num2;
      break;

    default:
      result = "wrong operator";
  }
  console.log(result);
}
switchCalc(5, 7, "-");

for (let i = 0; i < 10; i++) {
  console.log(`Number ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(` ${i}*${j} = ${i * j}`);
  }
}

const arr = ["apple", "banana", "kivi"];
for (const fruit of arr) {
  console.log(fruit);
}

const arr2 = [{ name: "john" }, { name: "sam" }, { name: "lara" }];
for (const line of arr2) {
  console.log(line.name);
}

const str = "Hello";
for (const letter of str) {
  console.log(letter);
}

const data = [
  {
    name: "Sam",
  },
  {
    name: "Lew",
  },
];
for (key in data) {
  console.log(data[key]);
}

const arr3 = ["fish", "dog", "cat"];
for (key in arr3) {
  console.log(arr3[key]);
}

const people = [
  { name: "John", surname: "Smith", age: 60 },
  { name: "Jonny", surname: "Bear", age: 23 },
  { name: "Sam", surname: "Zeloos", age: 55 },
];

const jungPeople = people
.filter(names => names.age < 25)
.map(person => person.name)
console.log(jungPeople);


const numbersArray = [1,3,6,7,888,-34,-28,-4];

const sumOfPositive = numbersArray.filter(posNum => posNum >0)
.reduce((acc,curr)=>acc + curr, 0)


console.log(sumOfPositive)

const words = ["coder", "programmer", "developer"];
const capitalizedWords = words. map(word=>word[0].toUpperCase() + word.slice(1))
console.log(capitalizedWords);