import { Router } from 'express';

export enum ERoutes {
    CHECK_PRIME = '/api/checkPrime',
    SUM_AND_CHECK_PRIME = '/api/sumAndCheckPrime',
}

interface IRouterInfo {
    route: ERoutes;
    router: Router;
}

export type RouterArray = Array<IRouterInfo>;
