import { Router, Request, Response, NextFunction } from 'express';
import StatusCode from 'status-code-enum';
import { isPrime, sumArray } from '../calculations/calculations';
import { EErrorMessages } from '../errorHandling/errorMessages';

const sumAndCheckPrimeRouter = Router();

sumAndCheckPrimeRouter.get('/:numArray', (req: Request, res: Response, next: NextFunction) => {
	try {
		const numberArray = req.params.numArray.split(',').map((number) => Number.parseInt(number));

		if (!isValidNumberArray(numberArray)) {
			throw new TypeError(EErrorMessages.TYPEERROR_INVALID_NUMBER_ARRAY);
		}

		const primeCandidate = sumArray(numberArray);
		const responseBody = { isPrime: isPrime(primeCandidate), number: primeCandidate };

		res.json(responseBody).status(StatusCode.SuccessOK);
	} catch (err) {
		next(err);
	}
});

const isValidNumberArray = (arr: Array<number>): boolean => {
	return !arr.some((value) => !Number.isInteger(value));
};

export { sumAndCheckPrimeRouter };
