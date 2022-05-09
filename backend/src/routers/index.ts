import { checkPrimeRouter } from './checkPrimeRouter';
import { ERoutes, RouterArray } from './models';
import { sumAndCheckPrimeRouter } from './sumAndCheckPrimeRouter';

const routes: RouterArray = [
	{
		route: ERoutes.CHECK_PRIME,
		router: checkPrimeRouter,
	},
	{
		route: ERoutes.SUM_AND_CHECK_PRIME,
		router: sumAndCheckPrimeRouter,
	},
];

export default routes;
