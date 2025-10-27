
// function checkScope() {
//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }
// checkScope();

// const s = [5,7,2];
// function editInPlace(){
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;

//     return s;
// }
// console.log(editInPlace())

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   Object.freeze(MATH_CONSTANTS);
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
// console.log(freezeObj());

// const  magic = () => {
//   return new Date();
// };
// console.log(magic())

// const  myConcat = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));

// const increment = (number, value=1) => number + value;
// console.log(increment(5, 2));
// console.log(increment(5));

// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
// console.log(sum(0,1,2));
// console.log(sum(1,2,3,4));
// console.log(sum(5));
// console.log(sum());

//  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];

// console.log(arr2);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const {today,tomorrow} = HIGH_TEMPERATURES;
// console.log("Today:", today);
// console.log("Tomorrow:", tomorrow);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const {today:highToday,tomorrow:highTomorrow} = HIGH_TEMPERATURES;
// console.log(highToday,highTomorrow);

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
// console.log(lowToday);
// console.log(highToday);

// let a = 8, b = 6;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// function removeFirstTwo(list) {
//   const [a,b,...source] = list;
//   return source ;
// }
// const source = [1, 2, 3, 4, 5,];

// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(sourceWithoutFirstTwo);

// let intro = {
//   name:"kamla",
//   age:20,
//   city:"jashpur"
// }

// Object.freeze(intro);

// intro.name = "chanchala";
// intro.city = "pathagoan";

// console.log(intro);

// let intro = {
//   name:"kamla",
//   age:20,
//   city:"jashpur",
//   address:{
//     city:"duldula"
//   }
// }

// Object.freeze(intro);

// intro.name = "chanchala";
// intro.address.city = "kunkuri";
// console.log(intro);

// function sum(...n) {
//   return n.reduce((t, v) => t + v, 0);
// }
// console.log(sum(1, 2, 3, 4));


// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); 

// let a = [1,2];
// let b = [3,4];
// console.log([...a, ...b]);

// let a = "kamla";
// console.log(...a);


// let obj = {name:"kamla", age:20};
// let {name, age} = obj;
// console.log(name);

// let arr = [1,2,3,4];
// let [first,second] = arr;
// console.log(first); 


// let fruit  = ["banana", "apple", "graphs","bnmk","euiryriu"];

// let [first, second, ...restfruit] = fruit;

// console.log(...restfruit);


//destructuring
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = ({max, min}) => {
//   return (max + min)/2.0;
// }
// console.log(half(stats));

//rest(...rest)
// const user = { name: "Kamla", age: 20, city: "Jashpur" };

// const { name, ...rest } = user;

// console.log(name); 
// console.log(rest); 


// const profileUpdate = ({name, location}) => {
//     return `welcome ${name} from ${location}`;
// };
// const profile = {
//     name:"kamla",
//     age:20,
//     location:"jashpur",
//     email:"kamla@example.com"
// };
// console.log(profileUpdate(profile));

// const name = "kamla";
// const hobby = "coding";

// const nest = `Hi, I'm ${name} and I love ${hobby}`;
// console.log(nest);

// const a = 5;
// const b = 10+12;
// const c = a+b;

// const sum = `The sum of ${a} and ${b} is ${c}`;
// console.log(sum);

// const name = "kamla";
// const age = 21;
// const city = "jashpur";
// const student = {
//     age:age,
//     city:city
// }
// const  short = {age, city};
// console.log(short);

// const x = 10;
// const y = 20;

// const value = {
//     y:y,
//     x:x
// }
// const point = {x, y};
// console.log(point);

// const city = "raipur";
// const state = "chhattisgarh";

// const address = {
//     city:city,
//     state:state
// }

// const d = {city, state};
// console.log(d); 



// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   }
// };
// console.log(calculator.add(5, 3)); 
// console.log(calculator.subtract(5, 3));


// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   const failureItems = [];
//   arr.forEach(item => {
//     failureItems.push(`<li class="text-warning"> ${item}</li>`);

//   });
//   return failureItems;
// }

// const failuresList = makeList(result.success);
// console.log(failuresList);


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

