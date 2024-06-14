/*  
  11th January 2024

  Q1: 
  Separate Number From String
  Sum Of All Numbers
  Count Total No Of Letters In String
  return round of (sum / total no of letter)

  Ex: 
    Input: str = "Hello5,23-32,defge"
    Output: 2
    Input: str1 = "1o5,2e3d6fg9jhvjhv32s2"
    Output: 3
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
  12th January 2024

  Q1:
  Have the function ArrayChallenge(strArr) take the array of strings stored in strArr and return the third largest word within it.
  So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long,
  and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array.
  If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long,
  so return the last one. The array will have at least three strings and each string will only contain letters.

  Ex:
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
  12th January 2024

  Q2: 
  In below object you need to count total number of records which has age greater then or equal to 50

  Ex.
  age >= 50
  output: 128
*/
const object = {
	data: 'key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75, key=AMxZr, age=64, key=ee03Q, age=4, key=9fGea, age=41, key=3TE9U, age=74, key=FoSMR, age=13, key=4To0X, age=57, key=5CZY3, age=33, key=qFvKG, age=79, key=W7bUh, age=2, key=htab7, age=15, key=KRyu2, age=77, key=GLkk7, age=80, key=jnXf6, age=51, key=YBTJ9, age=43, key=auL0J, age=30, key=ZHmmd, age=4, key=01iNV, age=7, key=7ldyh, age=55, key=TjXbT, age=88, key=ochyW, age=3, key=lsGXW, age=1, key=5o7Bd, age=45, key=APWEf, age=79, key=LRmKc, age=81, key=uZIoQ, age=12, key=Zf79H, age=42, key=NrpEI, age=6, key=XzYKx, age=22, key=kk0sU, age=62, key=p5uue, age=74, key=WscQQ, age=75, key=tRogh, age=19, key=ur4rW, age=60, key=IkCeS, age=19, key=vtGK4, age=11, key=C87cQ, age=38, key=0qXDb, age=39, key=KtBjN, age=46, key=f2h36, age=3, key=tGzgU, age=38, key=hIrPv, age=0, key=Tq7IX, age=25, key=F4k9K, age=46, key=9duxK, age=17, key=jTHDj, age=68, key=6GHpE, age=1, key=ye9us, age=9, key=eOfZO, age=72, key=I25vO, age=88, key=nqtBH, age=38, key=Dwn6b, age=70, key=4Qkdc, age=37, key=xvOa3, age=77, key=dg4rX, age=30, key=S9YbW, age=73, key=WhQqH, age=22, key=fexMF, age=88, key=Gzr0n, age=16, key=yFfjA, age=73, key=EfAKS, age=88, key=5Enyf, age=12, key=DK3HU, age=25, key=iGEBf, age=13, key=7r5UR, age=27, key=TQx1J, age=33, key=VlFwT, age=26, key=gnEgG, age=10, key=6P8gz, age=3, key=JnQLt, age=14, key=D3WJv, age=58, key=EXPMD, age=66, key=RzIDx, age=17, key=m6oYq, age=46, key=XTKAk, age=78, key=ZPLrJ, age=33, key=pDktp, age=10, key=TE9BG, age=18, key=7IS0l, age=35, key=yMY5X, age=58, key=jniwe, age=29, key=eb7lG, age=6, key=uzaoH, age=2, key=pUQoE, age=64, key=JZcuo, age=20, key=XwKBi, age=73, key=Zv4q9, age=31, key=HMD5T, age=76, key=rA4bI, age=75, key=PAMR7, age=86, key=tb8mz, age=2, key=vPcXk, age=18, key=c0Ixk, age=5, key=nkRrD, age=63, key=ISzFh, age=7, key=kcC1y, age=71, key=6J0WQ, age=27, key=FgiVY, age=72, key=Z8M30, age=50, key=Ep2Br, age=48, key=w9MRR, age=1, key=GI7oe, age=49, key=3ehsB, age=67, key=UW3dX, age=87, key=094dk, age=64, key=6tW4g, age=83, key=dT9IK, age=39, key=AofBp, age=27, key=7flGb, age=71, key=IBDqH, age=18, key=K2qn9, age=60, key=Qe7YJ, age=13, key=jqCHl, age=1, key=3R2IN, age=1, key=oVzfV, age=22, key=3yGCN, age=47, key=DOMm4, age=89, key=7EFRj, age=33, key=t1qsV, age=39, key=CBal1, age=14, key=BC0vr, age=68, key=0yY6L, age=47, key=Z8kX8, age=62, key=5oH1d, age=66, key=w0r3A, age=6, key=Bu8uK, age=55, key=vyqhK, age=35, key=7Zgz6, age=58, key=T573t, age=18, key=Rr4WR, age=48, key=kxnBU, age=39, key=XI3Jo, age=45, key=IAE95, age=43, key=rfSBT, age=59, key=znDPW, age=57, key=mBDDN, age=4, key=2hL0t, age=35, key=MbHM6, age=33, key=bS5oR, age=88, key=Rav2A, age=24, key=aLQO7, age=74, key=QCTUi, age=81, key=0HZlb, age=39, key=zshkO, age=5, key=q5EUd, age=75, key=WwgjN, age=20, key=LzTMa, age=3, key=uumoL, age=32, key=m3LJI, age=80, key=rU10P, age=39, key=gVTQz, age=79, key=wZjna, age=47, key=3d1E0, age=77, key=Ra74M, age=89, key=FJXHG, age=11, key=MckmR, age=37, key=tSqfN, age=2, key=HHkpI, age=40, key=S7rIA, age=34, key=vnpjJ, age=2, key=t8WSa, age=84, key=38fyp, age=11, key=Znot2, age=72, key=OGqoG, age=65, key=7VKiL, age=58, key=UdlEG, age=79, key=BXxIS, age=47, key=eW6F8, age=10, key=GASTN, age=86, key=SP0yy, age=53, key=ysN9w, age=17, key=KVGGz, age=76, key=yhEVk, age=47, key=vvlgV, age=67, key=aIMuS, age=21, key=KcHZk, age=41, key=6n8pa, age=35, key=ADTut, age=3, key=WNJXO, age=37, key=qta1A, age=67, key=cJOTp, age=67, key=1Bgd3, age=71, key=sHepZ, age=67, key=JoMvH, age=65, key=h1gF0, age=53, key=we7hP, age=41, key=Ztl8x, age=8, key=7pkQj, age=43, key=fkBah, age=21, key=FWETS, age=55, key=Gb4IY, age=26, key=U88H6, age=57, key=iExWE, age=8, key=7sl6v, age=8, key=iwI1x, age=9, key=cdKUG, age=60, key=xb127, age=57, key=dqYi8, age=15, key=opO2h, age=80, key=RNux0, age=37, key=cooLT, age=7, key=qhzQn, age=18, key=uowal, age=10, key=YR8Oy, age=17, key=GwEwr, age=15, key=WIXKE, age=53, key=aeem8, age=88, key=UPYoP, age=85, key=IF1pO, age=11, key=R6pUy, age=37, key=vYADh, age=0, key=TIq4k, age=35, key=dCekr, age=56, key=HBbXO, age=84, key=Lo9h5, age=36, key=fqBW3, age=87, key=OQWCL, age=52, key=nlYrf, age=6, key=cUS5f, age=32, key=A5gR0, age=32, key=HpUXl, age=84, key=nOuUT, age=18, key=mfvjr, age=12, key=24FH4, age=13, key=2rQei, age=51, key=EGAAV, age=8, key=Q5ifr, age=50, key=AVpil, age=87, key=vRcjt, age=51, key=G53C3, age=53, key=bsZAz, age=66, key=a8rVi, age=28, key=qPs5m, age=48, key=hF1kt, age=78, key=GIDFA, age=32, key=d2Mg4, age=12, key=EoYwt, age=30, key=DL7zx, age=14, key=lsA6c, age=17, key=ExutD, age=82, key=YOSNP, age=53, key=PEfma, age=49, key=EA8Go, age=18, key=fGTSM, age=60, key=lRf1j, age=13, key=0iJGV, age=50, key=cFCfU, age=5, key=J8an1, age=48, key=dkSlj, age=5',
}

const findAge = (jsonData) => {
	const arr = jsonData.data.split(', ')

	let count = 0
	const length = arr.length

	for (let i = 1; i < length; i = i + 2) {
		let age = arr[i].split('=')[1]
		if (age >= 50) count++
	}

	return count
}
// console.log(findAge(object))

/*
  13th January 2024
  Have the function firstReverse(str) take the str parameter being passed and
  return the string in reversed order. For example: if the input string is
  "Hello World and Coders" then your program should return the string
  "sredoC dna dlroW olleH".

  Ex.
  Input: "Hello World and Coders"
  Output: "sredoC dna dlroW olleH"
*/
const firstReverse = (str) => {
	return str.split('').reverse().join('')
}
// console.log(firstReverse('Hello World and Coders'))

/*  
  15th January 2024

  Q1: 
  Have the function MathChallenge(str) take the str parameter, which will be a simple mathematical formula with three numbers, 
  a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation.
  In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing.
  For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers
  and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.

  Examples
  Input: "4x - 2 = 6"
  Output: 2
  Input: "2 + 3 = 5"
  Input: 5
*/
const mathChallenge = (str) => {
	// const sides = str.split('=');
	// const leftSide = sides[0].trim();
	// const rightSide = sides[1].trim();
	const [leftSide, rightSide] = str.split('=')

	if (leftSide.includes('x')) {
		for (let i = 0; i <= 1000; i++) {
			const equationToCheck = leftSide.replace('x', ` * ${i}`)

			if (eval(equationToCheck) === parseInt(rightSide, 10)) {
				return i
			}
		}

		return null
	} else if (rightSide.includes('x')) {
		for (let i = 0; i <= 1000; i++) {
			const equationToCheck = rightSide.replace('x', ` * ${i}`)

			if (eval(equationToCheck) === parseInt(leftSide, 10)) {
				return i
			}
		}
	} else {
		return eval(leftSide)
	}
}

// Example usage
console.log(mathChallenge('4x - 2 = 6')) // Output: 2
console.log(mathChallenge('2 + 3 = 5')) // Output: 5
console.log(mathChallenge('5x + 10 = 25')) // Output: 3
console.log(mathChallenge('2 * 3 = 6')) // Output: 6
console.log('========================')
console.log(mathChallenge('6 = 4x - 2')) // Output: 2
console.log(mathChallenge('5 = 2 + 3')) // Output: 5
console.log(mathChallenge('25 = 5x + 10')) // Output: 3
console.log(mathChallenge('6 = 2 * 3')) // Output: 6
// console.log(mathChallenge('1x0 * 12 = 1200')); // Output: 0
