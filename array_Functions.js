const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const arr1 = ['s', 'h', 'r', 'u', 't', 'i']
const arr2 = [[1, 2, 3], [4, 5, 6], 7, 8]
const arr3 = [[[1, 2], 3], [4, [5, 6]], 7, 8]
const movements = [100, 1550, -100, 2000, -500, 6000, 1000, -5000]

console.log('arr : ', arr)
console.log('arr1 : ', arr1)
console.log('arr2 : ', arr2)
catchMemory.push(strArr[i])
console.log('arr3 : ', arr3)
console.log('movements : ', movements)

// ---------- Slice(start, end) ----------
// The slice() method can be used to create a copy of an array or return a portion of an array.
// It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
// console.log("arr.slice(2) : ", arr.slice(2));  //  ['c', 'd', 'e', 'f', 'g']
// console.log("arr.slice(2, 4) : ", arr.slice(2, 4));  //  ['c', 'd']
// console.log("arr.slice(-1) : ", arr.slice(-1));  //  ['g']
// console.log("arr.slice(1, -2) : ", arr.slice(1, -2));  //  ['b', 'c', 'd', 'e']
// console.log("arr.slice() : ", arr.slice());  //  ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// ---------- Splice(start, end) ----------
// the splice() method will change the contents of the original array.
// The splice() method is used to add or remove elements of an existing array and
// the return value will be the removed items from the array.
// console.log("arr.splice(2) : ", arr.splice(2));  //  ['c', 'd', 'e', 'f', 'g']
// console.log("arr : ", arr);  //  ['a', 'b']
// console.log("arr.splice(1, 2) : ", arr.splice(1, 2));  //  ['b']
// console.log("arr : ", arr);  //  ['a']

// ---------- reverse()  ----------
// Reverses the order of the elements in an array. It will change the original array.
// console.log("arr1.reverse() : ", arr1.reverse());  // ['i', 't', 'u', 'r', 'h', 's']
// console.log("arr1 : ", arr1);  // ['i', 't', 'u', 'r', 'h', 's']

// ---------- concat() ----------
// Joins arrays and returns an array with the joined arrays
const arr6 = arr.concat(arr1)
// const arr6 = [...arr, ...arr1];
// console.log("arr.concat(arr1) : ", arr6);  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's', 'h', 'r', 'u', 't', 'i']

// ---------- join() ----------  Joins all elements of an array into a string. convert array to sting
// console.log("arr1.join('') : ", arr1.join(''));  // shruti

// ---------- push() ---------- Adds new element to the end of an array, and returns the new length.
// console.log("arr.push('h') : ", arr.push('h'));  // 8

// ---------- pop() ---------- Removes the last element of an array, and returns element which is deleted.
// console.log("arr.pop() : ", arr.pop());  // (g)

// ---------- for() ----------
// for (const movement of movements) {
//     if (movement > 0) {
//         console.log(`You deposit ${movement}`);
//     }
//     else {
//         console.log(`You withdraw ${Math.abs(movement)}`);
//     }
// }

// ---------- entries() ---------- Returns a key/value pair Array Iteration Object.
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1} : You deposit ${movement}`);
//     }
//     else {
//         console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
//     }
// }

// ---------- forEach() ---------- Calls a function for each array element.
// movements.forEach(function(movement, i) {  // callback function
//     if (movement > 0) {
//         console.log(`You deposit ${movement}`);
//     }
//     else {
//         console.log(`You withdraw ${Math.abs(movement)}`);
//     }
// });

// movements.forEach(function (movement, index, array) {  // callback function
//     if (movement > 0) {
//         console.log(`Movement ${index} : You deposit ${movement}`);
//     }
//     else {
//         console.log(`Movement ${index} : You withdraw ${Math.abs(movement)}`);
//     }
// });

// movements.forEach((movement, index, array) => {  // Arrow function
//     if (movement > 0) {
//         console.log(`Movement ${index} : You deposit ${movement}`);
//     }
//     else {
//         console.log(`Movement ${index} : You withdraw ${Math.abs(movement)}`);
//     }
// });

// ---------- Map ----------  // Creates a new array with the result of calling a function for each array element.
const currencies = new Map([
	['USD', 'United States Doller'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
])
// currencies.forEach(function (value, key, map) {  // callback funtion
//     console.log(`${key} : ${value}`);
// });
// USD : United States Doller
// EUR : Euro
// GBP : Pound sterling

const maparr = [3, 1, 4, 3, 2]
const newmaparr = maparr.map((cur) => cur * 2) // Arrow function
// const newmaparr = maparr.map(function (cur) {  //Callback function
//     return cur * 2;
// });
// const newmaparr = [];
// for (const cur of maparr) newmaparr.push(cur * 2)  //Without map function
// console.log(maparr);
// console.log(newmaparr);  // [6, 2, 8, 6, 4]

// ---------- set ----------  //
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// currenciesUnique.forEach(function (value, key, set) {  // callback function
//     console.log(`${key} : ${value}`);
// });
// USD : USD
// GBP : GBP
// EUR : EUR

// ---------- filter() ---------- Creates a new array with every element in an array that pass a test.
const filterarr = [3, 1, 4, 5, 2]
const newfilterarr = filterarr.filter((cur) => cur > 2) // Arrow function
// const newfilterarr = filterarr.filter(function (cur) {  // callback function
//     return cur > 2;
// })
// const newfilterarr = [];
// for (const cur of filterarr) if (cur > 2 ) newfilterarr.push(cur);  // without filter function
// console.log(newfilterarr);  // [3, 4, 5]

// ---------- reduce() ---------- Reduce the values of an array to a single value (going left-to-right).
// uses like sum of all elements...
const reducearr = [3, 1, 4, 3, 2]
// const reducesum = reducearr.reduce(function (acc, cur, i, arr) {  // callback function
//     return acc + cur;
// }, 0);
const reducesum = reducearr.reduce((acc, cur) => acc + cur, 0) // Arrow function
// let reducesum = 0;
// for (const cur of reducearr) reducesum += cur;  // without reduce function
// console.log(reducesum);  // 13

// Find maximum value in an array
const max = reducearr.reduce((acc, cur) => {
	if (acc > cur) return acc
	else return cur
}, reducearr[0])
// console.log(max);  // 4

// ----------- find() ----------- // Returns the value of the first element in an array that pass a test.
// find method find a value in an array and return first value which is true for a given condition.
const fisrstWithdrawal = movements.find((mov) => mov < 0)
// console.log(fisrstWithdrawal);  // -100

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
}

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
}

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
}

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Return only Jessica Davis account details
const account = accounts.find((acc) => acc.owner === 'Jessica Davis')
// console.log(account);

// ---------- findindex(element) ---------- // Returns the index of the first element in an array that pass a test.
const index = arr.findIndex((cur) => cur === 'd')
// console.log(index);  // 3

// ---------- includes(element) ---------- // Check if an array contains the specified(given) element.
// return true if a given value is present in an array
const inarr = movements.includes(-500)
// console.log(inarr);  // true

// ---------- some() ---------- // Checks if any of the elements in an array pass a test.
// return true is any one (atlease one is true) value of an array setisfy the given condition otherwise return false.
const inarray = movements.some((mov) => mov > 5000)
// console.log(inarray);  // true

// ---------- every() ----------  // Checks if every element in an array pass a test.
// Every only returns a true if a all of the elements in an array satisfy the condition that we passed in.
const inarra = movements.every((mov) => mov <= 6000)
// console.log(inarra);  // true

// ---------- flat(levels(like : 1, 2, 3, ...)) ---------- // take one arguent how many level you want.
// used to flatten an array, to reduce the nesting of an array.

// console.log(arr2.flat());  // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr3.flat());  // [Array(2), 3, 4, Array(2), 7, 8]
// console.log(arr3.flat(2));  // [1, 2, 3, 4, 5, 6, 7, 8]

// ---------- flatMap() ----------
// method first of all maps every element with the help of a mapping function,
// then flattens the input array element into a new array.
// flatMap checks only one level of an array if you want to multiple levels use flat function
// above account example

// const overallBalance = accounts  // without flatMap function
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);

const overallBalance = accounts // using flatMap function
	.flatMap((acc) => acc.movements)
	.reduce((acc, mov) => acc + mov, 0)

// console.log(overallBalance);  // 17840

// ---------- sort() ---------- // Sorts the elements of an array.

// console.log(movements.sort());  // [-100, -500, -5000, 100, 1000, 1550, 2000, 6000]

// when we use sort function in numeric array first it will convert in string than sort the array
// javascript sort function not usable for numeric array if we want to sort numeric array just use sorting algorithms
// like insertion sort or etc...

//First way
// movements.sort((a, b) => {  // ascending oerder
//     if (a > b) return 1;
//     if (a < b) return -1;
// })

// Second way
// movements.sort((a, b) => a - b);  // ascending oerder

// movements.sort((a, b) => {  // descending oerder
//     if (a > b) return -1;
//     if (a < b) return 1;
// })

// movements.sort((a, b) => b - a);  // descending oerder

// console.log(movements);  // [-5000, -500, -100, 100, 1000, 1550, 2000, 6000]

// console.log("arr1.sort() : ", arr1.sort());  // ['h', 'i', 'r', 's', 't', 'u']

// ---------- indexOf(element) ----------  // Search the array for a given element and returns its position
// if value not found it will return -1
const indexofarr = movements.indexOf(6000)
// console.log("movements.indexOf(6000) : ", indexofarr);  // 5

// ---------- isArray() ---------- //
const isarraychk = Array.isArray(arr)
// console.log("Array.isArray(arr) : ", isarraychk);  // true

// ---------- length ---------- // Returns length of an array.
const lengtharr = arr.length
// console.log(lengtharr);  // 7

// ---------- shift() ----------  // Removes the first element of an array, and returns that element
const shiftele = arr.shift()
// console.log(shiftele);  // a

// ---------- unshift() ----------  // Adds new elements to the beginning of an array, and returns the new length.
const unshiftele = arr.unshift('h')
// console.log(unshiftele);  // 7

// ---------- toString() ----------  // Converts an array to a string, and returns the result.
const arrstr = arr1.toString()
// console.log(arrstr);  // s,h,r,u,t,i
