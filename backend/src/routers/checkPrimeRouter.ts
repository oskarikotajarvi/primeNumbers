import { Router, Request, Response, NextFunction } from 'express';
import StatusCode from 'status-code-enum';
import { isPrime } from '../calculations/calculations';
import { EErrorMessages } from '../errorHandling/errorMessages';

const checkPrimeRouter = Router();

checkPrimeRouter.get('/:number', (req: Request, res: Response, next: NextFunction) => {
	try {
		const primeCandidate = Number(req.params.number);

		if (!Number.isInteger(primeCandidate)) {
			throw new TypeError(EErrorMessages.TYPEERROR_INVALID_INPUT_TYPE);
		}

		const responseBody = { isPrime: isPrime(primeCandidate) };

		res.json(responseBody).status(StatusCode.SuccessOK);
	} catch (err) {
		next(err);
	}
});

export { checkPrimeRouter };
