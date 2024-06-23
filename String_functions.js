const str = 'Hello World, I am Test Variable.';
const str1 = "I'm learn javascript.";
const str3 = '     Hello World!   ';
const str4 = 'Hello World, I am Test Variable. I am using for experiment.';

console.log('str :  |', str, '|');
console.log('str1 : |', str1, '|');
console.log('str3 : |', str3, '|');
console.log('str4 : |', str4, '|');

// ---------- Length : Returns a length of the String
// console.log("str lenght : ", str.length);  // 31

// ---------- slice(start, end) : Returns a new string form a given string to the start to end position.
// First argument is stating index and second argument is ending index
const slicestr = str.slice(6, 14);
// console.log("str.slice(6, 14) : ", slicestr);  // (World, I)

// ---------- substring(start, end) : Returns a new string form a given string to the start to end position.
// First argument is stating index and second argument is ending index
const substringstr = str.substring(3, 14);
// console.log("str.substring(3, 14) : ", substringstr);  // (lo World, I)

// The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.
// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

// ---------- substr(start, length) : Returns a new string from the given arguments.
//First argument is starting point and second argument is length of the string.
const substrstr = str.substr(3, 8);
// console.log("str.substr(3, 8) : ", substrstr);  // (lo World)

// ---------- replace() : Replace the string. But only first occurrence.
// Takes two argument first is which character(s) you want to change, and
// second is new character(s) you want to replace.
const replacestr = str.replace('l', 'L');
// console.log("str.replace('l', 'L'); : ", replacestr);  // (HeLlo World, I am Test Variable.)

// ---------- replaceAll() : Replace the string. all the occurrence
// Takes two argument first is which character(s) you want to change, and
// second is new character(s) you want to replace.
const replaceallstr = str.replaceAll('l', 'L');
// console.log("str.replaceAll('l', 'L') : ", replaceallstr);  // (HeLLo WorLd, I am Test VariabLe.)

// ---------- toUpperCase() : onvert a given string to Upper Case.
const upperstr = str.toUpperCase();
// console.log("str.toUpperCase() : ", upperstr);  // (HELLO WORLD, I AM TEST VARIABLE.)

// ---------- toLowerCase() : Convert a given string to Lower Case.
const lowerstr = str.toLowerCase();
// console.log("str.toLowerCase() : ", lowerstr);  // (hello world, i am test variable.)

// ---------- concat(strinsplitg) : Join two String.
const concatstr = str.concat(str1);
// console.log("str.concat(str1) : ", concatstr);  // (Hello World, I am Test Variable.I'm learn javascript.)

// ---------- trim() : Remove whitespace from both the side starting and ending.
const trimstr = str3.trim();
// console.log("str3.trim() : |", trimstr, "|");  // (Hello World!)

// ---------- trimStart() : Remove whitespace from starting the string.
const trimstartstr = str3.trimStart();
// console.log("str3.trimStart() : |", trimstartstr, "|");  // (Hello World!   )

// ---------- trimEnd() : Remove whitespace from ending the string.
const trimendstr = str3.tsplitrimEnd();
// console.log("str3.trimEnd() : |", trimendstr, "|");  // (     Hello World!)

// ---------- padStart(new length of a string, character you want to add) : Return a new string with the new length which is given in first argument.
const padstartstr = str.padStart(40, '0');
// console.log("str.padStart(40, '0') : ", padstartstr);  // (00000000Hello World, I am Test Variable.)

// ---------- padEnd(new length of a string, character you want to add) : Return a new string with the new length which is given in first argument.
const padendstr = str.padEnd(40, '0');
// console.log("str.padEnd(40, '0') : ", padendstr);  // (Hello World, I am Test Variable.00000000)

// ---------- charAt() : Return a character which is placed in given index.
const character = str.charAt(0);
// console.log("str.charAt(0) : ", character);  // (H)

// ---------- charCodeAt() : Returns the Unicode of the character at a specified index(position) in a string.
const charcodeatstr = str.charCodeAt(0);
// console.log("str.charCodeAt(0) : ", charcodeatstr);  // (72)

// ---------- split(string) : Returns a Array.  Convert String to an Array.
const splitarr = str.split(' ');
// console.log("str.split(' ') : ", splitarr);  // (['Hello', 'World,', 'I', 'am', 'Test', 'Variable.'])

// ---------- join(Array) : Returns an String. Convert Array to String
const arr = ['Hello', 'World,', 'I', 'am', 'Test', 'Variable.'];
const joinarr = arr.join(' ');
// console.log("arr : ", arr);
// console.log("arr.join(' ') : ", joinarr);  // (Hello World, I am Test Variable.)

// ---------- repeat() : Returns a new string after the repeat the given number of times.
const repeatstr = str.repeat(3);
// console.log("str.repeat(3) : ", repeatstr);  // (Hello World, I am Test Variable.Hello World, I am Test Variable.Hello World, I am Test Variable.)

// ---------- indexOf(string) : Give index where the given value is placed it give only first occurrence in string
//if value is not split
// ---------- lastIndexOf(string) : Give index where the given value is placed it give only last occurrence in string
// if value is not found it will give -1
const lastindex = str.lastIndexOf('Test');
// console.log("str.lastIndexOf('Test') : ", lastindex);  // 18

// ---------- search(string) : method matches a string against a regular expression. method returns the index(position) of the first match.
// method returns -1 if no match is found. search method is case sensitive
const searchstr = str.search('l');
// console.log("str.search('l') : ", searchstr);  // 2

// ---------- match() : match() method matches a string against a regular expression.
// match() method returns an array with the matches.
const matchstr = str4.match(/am/g);
// console.log("str4.match(/am/g) : ", matchstr);  // (['am', 'am']])

// ---------- includes(string) :  Check the given character(s) is/are present in the string or not. Returns Boolean value.
const includesstr = str.includes('am');
// console.log("str.includes('am') : ", includesstr);  // (true)

// ---------- startsWith(string) : Check the string is staring with the given character(s)/String. Returns Boolean value.
const stratwithstr = str.startsWith('Hello');
// console.log("str.startsWith('Hello') : ", stratwithstr);  // (true)

// ---------- endsWith() : Check the string is ending with the given character(s)/String. Returns Boolean value.
const endswithstr = str.endsWith('Variable.');
// console.log("str.endsWith('Variable.') : ", endswithstr);  // (true)
