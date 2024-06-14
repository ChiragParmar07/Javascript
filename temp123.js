const arrayMinJumps = (arr) => {
	// console.log(arr)
	const max = Math.max(...arr)
	const maxIndex = arr.indexOf(max)
	let step = max
	let i = maxIndex
	let count = 1
	return rightSideCheck(arr, i, step, count, maxIndex)
}

const rightSideCheck = (arr, i, step, count, maxIndex) => {
	// console.log('right', i, step, count)
	while (step !== 0) {
		if (i === arr.length) {
			i = 0
		}
		step--
		i++
		if (i === arr.length) {
			i = 0
		}
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

const leftSideCheck = (arr, i, step, count, maxIndex) => {
	// console.log('left', i, step, count)
	while (step !== 0) {
		if (i === 0) {
			i = arr.length
		}
		step--
		i--
		if (i === 0) {
			i = arr.length
		}
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
// console.log(arrayMinJumps([2, 3, 5, 6, 1])) // Output: 2
console.log(arrayMinJumps([1, 2, 3, 4, 2])) // Output: 4
// console.log(arrayMinJumps([1, 7, 1, 1, 1, 1])) // Output: 2
