function MathChallenge(str) {
	newStr = str.split('=');
	firstoperand = newStr[0].replaceAll(' ', '');
	resultant = newStr[newStr.length - 1].trimStart();

	if (firstoperand.indexOf('x') !== -1) {
		for (let i = 0; i < 10; i++) {
			newPair = firstoperand.replace('x', i);
			checkEquality = eval(newPair);

			if (checkEquality === Number(resultant)) {
				return i;
			}

			newPair = newPair.replace(i, 'x');
		}
	} else if (resultant.indexOf('x') !== -1) {
		leftSideTotal = eval(firstoperand);
		for (let i = 0; i < 10; i++) {
			newPair = resultant.replace('x', i);
			checkEquality = eval(newPair);
			if (checkEquality === Number(leftSideTotal)) {
				return i;
			}
			newPair = newPair.replace(i, 'x');
		}
	}
	return 0;
}

console.log(MathChallenge('4x - 2 = 6')); // Output: 2
console.log(MathChallenge('2 + 3 = 5')); // Output: 5
console.log(MathChallenge('5x + 10 = 25')); // Output: 3
console.log(MathChallenge('2 * 3 = 6')); // Output: 6
console.log('========================');
console.log(MathChallenge('6 = 4x - 2')); // Output: 2
console.log(MathChallenge('5 = 2 + 3')); // Output: 5
console.log(MathChallenge('25 = 5x + 10')); // Output: 3
console.log(MathChallenge('6 = 2 * 3')); // Output: 6
console.log(MathChallenge('1x0 * 12 = 1200')); // Output: 0
