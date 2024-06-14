/*
  Question 1

  Have the function MathChallenge(str) take the str parameter, which will be a simple mathematical formula with three numbers, 
  a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation.
  In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing.
  For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers
  and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.

  Examples
  Input: "4 - 2 = x"
  Output: 2
  Input: "1x0 * 12 = 1200"
  Output: 0
*/
const mathChallenge = (str) => {
	let x = 0
	while (true) {
		console.log('==> ', x)
		let temp = str.replace('x', x)
		let [lhs, rhs] = temp.split('=')
		lhs = eval(lhs)
		rhs = eval(rhs)
		if (lhs === rhs) {
			return x
		}
		x++
	}
}
// console.log(mathChallenge('6 = 4x - 2'))

/*
  Question 2

  Have the function ArrayChallenge(arr) take the array of numbers stored in arr and first determine the largest element in the array,
  and then determine whether or not you can reach that same element within the array by moving left or right continuously
  according to whatever integer is in the current spot. If you can reach the same spot within the array, then your program should
  output the least amount of jumps it took. For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is 
  and if you jump 6 spaces to the right while looping around the array you end up at the last element where the 1 is.
  Then from here you jump 1 space to the left and you're back where you started, so your program should output 2.
  If it's impossible to end up back at the largest element in the array your program should output -1.
  The largest element in the array will never equal the number of elements in the array. The largest element will be unique.

  Examples
  Input: [1,2,3,4,2]
  Output: 3
  Input: [1,7,1,1,1,1]
  Output: 2
*/

function arrayMinJumps(arr) {
	let max = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	const maxIndex = arr.indexOf(max)
	let step = max
	let i = maxIndex
	let count = 1
	return rightSideCheck(arr, i, step, count, maxIndex)
}

function rightSideCheck(arr, i, step, count, maxIndex) {
	while (step !== 0) {
		if (i === arr.length) {
			i = 0
		}
		step--
		i++
	}
	if (i === maxIndex) {
		return count
	} else if (i < maxIndex) {
		count++
		step = arr[i]
		return rightSideCheck(arr, i, step, count, maxIndex)
	} else {
		count++
		step = arr[i]
		return leftSideCheck(arr, i, step, count, maxIndex)
	}
}

function leftSideCheck(arr, i, step, count, maxIndex) {
	while (step !== 0) {
		if (i === 0) {
			i = arr.length
		}
		step--
		i--
	}
	if (i === maxIndex) {
		return count
	} else if (i < maxIndex) {
		count++
		step = arr[i]
		return rightSideCheck(arr, i, step, count, maxIndex)
	} else {
		count++
		step = arr[i]
		return leftSideCheck(arr, i, step, count, maxIndex)
	}
}

// Example usage
console.log(arrayMinJumps([2, 3, 5, 6, 1])) // Output: 2
console.log(arrayMinJumps([1, 2, 3, 4, 2])) // Output: 4
console.log(arrayMinJumps([1, 7, 1, 1, 1, 1])) // Output: 2
// console.log(arrayMinJumps([0, 5, 2]))

/*
  Question 3

  Have the function ArrayChallenge(strArr) take the array of strings stored in strArr and return the third largest word within it.
  So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long,
  and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array.
  If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long,
  so return the last one. The array will have at least three strings and each string will only contain letters.

  Examples
  Input: ["coder","byte","code"]
  Output: code
  Input: ["abc","defg","z","hijk"]
  Output: abc
*/
const findThirdLargest = (arr) => {
	arr = arr.sort((a, b) => b.length - a.length)
	return arr[2]
}
const arr1 = ['hello', 'world', 'before', 'all']
const arr2 = ['abc', 'defg', 'z', 'hijk']
// console.log('findThirdLargest => ', findThirdLargest(arr1))
// console.log('findThirdLargest => ', findThirdLargest(arr2))

/*
  Question 4

  Separate Number From String
  Sum Of All Numbers
  Count Total No Of Letters In String
  return round of (sum / total no of letter)
*/
const strOps = (str) => {
	let numSum = 0
	let strLength = 0

	str.split('').forEach((item) => {
		// if (!isNaN(item)) numSum = numSum + Number(item)
		if (item.match(/[0-9]/)) numSum = numSum + Number(item)
		else if (item.match(/[a-zA-z]/)) strLength = strLength + 1
	})

	return Math.round(numSum / strLength)
}

const str1 = 'Hello5,23-32,defge'
const str2 = '1o5,2e3d6fg9jhvjhv32s2'
// console.log(`str1 = ${str1} => `, strOps(str1))
// console.log(`str2 = ${str2} => `, strOps(str2))

/*
  Question 5

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
const CharacterRemoval = (strArr) => {
	let word = strArr[0]
	let dict = strArr[1]
	let dictArr = dict.split(',')
	let min = Number.MAX_VALUE
	dictArr = dictArr.sort((a, b) => b.length - a.length)
	// console.log(dictArr);
	for (let i = 0; i < dictArr.length; i++) {
		let newWord = word
		let curr = dictArr[i]
		let currArr = curr.split('')
		// console.log(currArr);
		for (let j = 0; j < currArr.length; j++) {
			if (newWord.indexOf(currArr[j]) != -1) {
				let index = newWord.indexOf(currArr[j])
				newWord =
					newWord.slice(0, index) + newWord.slice(index + 1, newWord.length)
				// console.log(newWord)
			}
		}
		if (min > newWord.length) {
			min = newWord.length
		}
	}
	return min
}

let ans1 = CharacterRemoval([
	'baseball',
	'a,all,b,ball,bas,base,cat,code,d,e,quit,z',
])
let ans2 = CharacterRemoval(['apbpleeeef', 'a,ab,abc,abcg,b,c,dog,e,efd,zzzz'])
let ans3 = CharacterRemoval([
	'worlcde',
	'apple,bat,cat,goodbye,hello,yellow,why,world',
])
// console.log(ans1)
// console.log(ans2)
// console.log(ans3)

/*
  Question 6

  Split Word into Two and Check Existence in Comma Separated String Sequence
*/
const splitWordIntoTwo = (strArr) => {
	const word = strArr[0]
	const wordArr = strArr[1].split(',')
	const newArr = []

	for (let i = 0; i < wordArr.length; i++) {
		for (let j = 0; j < wordArr.length; j++) {
			if (wordArr[i] + wordArr[j] === word) {
				newArr.push(wordArr[i])
				newArr.push(wordArr[j])
			}
		}
	}
	return newArr.toString()
}

const strArr1 = ['powerhouse', 'p,pow,power,house,pose,poser']
const strArr2 = ['baseball', 'b,ba,base,ball,baseba,all']
// console.log('splitWordIntoTwo => ', splitWordIntoTwo(strArr1))
// console.log('splitWordIntoTwo => ', splitWordIntoTwo(strArr2))

/*
  Question 7

  Array Matching
  Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements,
  both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"],
  then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in
  corresponding locations from both arrays. For the example input, your program should do the following additions: 
  [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally return this resulting 
  array in a string format with each element separated by a hyphen: 6-4-13-17.

  If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array 
  (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.

  Examples
  Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
  Output: 7-4-6-10-6
  Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
  Output: 3-3-6-2
*/
// Solution 1
const sumElements = (strArr) => {
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
			sum = 0
		} else {
			strAns += maxLen[i] + '-'
		}
	}

	return strAns.substring(0, strAns.length - 1)
}
const strArr = ['[1, 2, 3, 10, 5]', '[1, 2, 3, 10, 5 ,11]']
// console.log(sumElements(strArr))

// Solution 2
function addele(str) {
	const [first, second] = str
	const arr1 = eval(first)
	const arr2 = eval(second)
	let add
	if (arr1.length > arr2.length) {
		add = arr1.map((val, index) => {
			return arr2[index] ? arr2[index] + val : val
		})
	} else {
		add = arr2.map((val, index) => {
			return arr1[index] ? arr1[index] + val : val
		})
	}
	return add.join('-')
}
// console.log(addele(['[5, 2, 3]', '[2, 2, 3, 10, 6]']))
// console.log(addele(['[1, 2, 1]', '[2, 1, 5, 2]']))
