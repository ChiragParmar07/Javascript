// Exam 1 : Question 1 -->
/*
 * Have the function MathChallenge(str) take the str parameter, which will be a simple mathematical formula with three numbers,
 * a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation.
 * In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing.
 * For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and
 * all three numbers will be greater than or equal to 0 and less than or equal to 1000000.
 * Examples
 * Input: "4 - 2 = x"
 * Output: 2
 * Input: "1x0 * 12 = 1200"
 * Output: 0
 */
const mathChallenge = (str) => {
	for (let i = 1; i <= 10; i++) {
		const data = str.split('=')
		if (data[0].includes('x')) {
			data[0] = data[0].replace('x', i)
			if (eval(data[0]) === data[1]) {
				return i
			} else {
				data[0] = data[0].replace('x', i)
			}
		} else return eval(data[0])
	}
	return 0
}
// console.log(mathChallenge('6 = 4x - 2'));

// Exam 1 : Question 2 -->
/*
 * Have the function ArrayChallenge(arr) take the array of numbers stored in arr and first determine the largest element in the array,
 * and then determine whether or not you can reach that same element within the array by moving left or right continuously according
 * to whatever integer is in the current spot. If you can reach the same spot within the array, then your program should output the
 * least amount of jumps it took. For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is and if you jump 6
 * spaces to the right while looping around the array you end up at the last element where the 1 is. Then from here you jump 1 space to
 * the left and you're back where you started, so your program should output 2. If it's impossible to end up back at the largest element
 * in the array your program should output -1. The largest element in the array will never equal the number of elements in the array.
 * The largest element will be unique.
 * Examples
 * Input: [1,2,3,4,2]
 * Output: 3
 * Input: [1,7,1,1,1,1]
 * Output: 2
 */
function ArrayChallenge(arr) {}
// console.log(ArrayChallenge([1,7,1,1,1,1]));

// Exam 1 : Question 3 -->
/*
 * Have the function ArrayChallenge(strArr) take the array of strings stored in strArr and return the third largest word within it.
 * So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long,
 * and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array.
 * If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long,
 * so return the last one. The array will have at least three strings and each string will only contain letters.
 * Examples
 * Input: ["coder","byte","code"]
 * Output: code
 * Input: ["abc","defg","z","hijk"]
 * Output: abc
 */
function ArrayChallenge(strArr) {
	strArr.sort((a, b) => b.length - a.length)
	return strArr[2]
}
// console.log(ArrayChallenge(["coder", "byte", "code"]));
// console.log(ArrayChallenge(["abc", "defg", "z", "hijk"]));

// Exam 2 : Question 1 -->
/*
 * Split Word into Two and Check Existence in Comma Separated String Sequence
 */
function splitWordIntoTwo(strArr) {
	const word = strArr[0]
	const wordArr = strArr[1].split(',')
	const newArr = []

	for (let i = 0; i < wordArr.length; i++) {
		for (let j = 0; j < wordArr.length; j++) {
			if (wordArr[i] + wordArr[j] === word) {
				newArr.push(wordArr[i])
				newArr.push(wordArr[j])
				break
			}
		}
	}
	return newArr.join(',')
}

const strArr1 = ['powerhouse', 'p,pow,power,house,pose,poser']
const strArr2 = ['baseball', 'b,ba,base,ball,baseba,all']
// console.log(splitWordIntoTwo(strArr1))
// console.log(splitWordIntoTwo(strArr2))

// Exam 2 : Question 2 -->
/*
 * Separate Number From String
 * Sum Of All Numbers
 * Count Total No Of Letters In String
 * return round of (sum / total no of letter)
 */
function strOps(str) {
	let sum = 0

	//  Array of numbers
	const numArr = str.split('').filter((value) => {
		return Number.isInteger(Number.parseInt(value))
	})

	// Sum of all numbers
	numArr.forEach((value) => {
		sum += Number.parseInt(value)
	})

	//   Letters Array
	const letterArr = str.split('').filter((value) => {
		return value.match(/[a-zA-Z]/)
	})

	return Math.round(sum / letterArr.length)
}
console.log(strOps('Hello5,23-32,defge'))
console.log(strOps('1o5,2e3d6fg9jhvjhv32s2'))

// Exam 2 : Question 3 -->

// Exam 3 : Question 1 -->
function test(strArr) {
	const arrEle1 = strArr[0]
		.substr(1, strArr[0].length - 2)
		.replaceAll(' ', '')
		.split(',')
	const arrEle2 = strArr[1]
		.substr(1, strArr[1].length - 2)
		.replaceAll(' ', '')
		.split(',')
	let maxLen = arrEle1.length >= arrEle2.length ? arrEle1 : arrEle2
	let minLen = arrEle1.length <= arrEle2.length ? arrEle1 : arrEle2
	let strAns = ''
	for (let i = 0; i < maxLen.length; i++) {
		if (i < minLen.length) {
			let sum = Number.parseInt(maxLen[i]) + Number.parseInt(minLen[i])
			strAns += sum + '-'
		} else {
			strAns += maxLen[i] + '-'
		}
	}
	return strAns.substring(0, strAns.length - 1)
}
strArr = ['[1, 2, 3, 10, 5]', '[1, 2, 3, 10, 5 ,11]']
// console.log(test(strArr));

// Exam 3 : Question 3 -->
/*
    Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which will contain 2 elements: 
    the first element will be a sequence of characters representing a word, and the second element will be a long string of 
    comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: strArr can be:
    ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine the minimum number of characters, if any, 
    can be removed from the word so that it matches one of the words from the dictionary. 
    In this case, your program should return 2 because once you remove the characters "c" and "e" you are left with "world" and 
    that exists within the dictionary. If the word cannot be found no matter what characters are removed, return -1.
    Examples
    Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
    Output: 4
    Input: ["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
    Output: 8
*/
function CharacterRemoval(strArr) {}
// console.log(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]);
