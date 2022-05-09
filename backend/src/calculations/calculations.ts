export const isPrime = (num: number): boolean => {
	if (num === 2) {
		return true;
	}

	if (num <= 1 || !Number.isInteger(num)) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
};

export const sumArray = (numberArray: Array<number>): number => {
	return numberArray.reduce((sum, current) => {
		return (sum += current);
	}, 0);
};
