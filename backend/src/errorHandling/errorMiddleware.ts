import { NextFunction, Request, Response } from 'express';
import StatusCode from 'status-code-enum';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const errorHandler = (error: Error, _: Request, res: Response, __: NextFunction): void => {
	switch (error.name) {
	case 'TypeError':
		res.status(StatusCode.ClientErrorBadRequest).send(`TypeError: ${error.message}`);
		return;
	default:
		res.status(StatusCode.ServerErrorInternal).send(`Internal server error: ${error.message}`);
		return;
	}
};
