import axios, { AxiosRequestConfig } from 'axios';

const port = process.env.API_PORT || 5050;

const clientConfig: AxiosRequestConfig = {
    baseURL: `http://localhost:${port}/api`,
    timeout: 30000,
};

const client = axios.create(clientConfig);

export const checkPrime = async (num: number): Promise<boolean> => {
    try {
        const response = await client.get<IIsPrime>(`/checkPrime/${num}`);

        if (response.status !== 200) {
            throw new Error('apua');
        } else {
            return Promise.resolve(response.data.isPrime);
        }
    } catch (err) {
        return Promise.reject();
    }
};

export const sumAndCheckPrime = async (numberArray: Array<string>): Promise<ISumIsPrime> => {
    try {
        const response = await client.get<ISumIsPrime>(`/sumAndCheckPrime/${numberArray}`);

        if (response.status !== 200) {
            throw new Error('apu');
        } else {
            return Promise.resolve(response.data);
        }
    } catch (err) {
        return Promise.reject();
    }
};

interface IIsPrime {
    isPrime: boolean;
}

interface ISumIsPrime extends IIsPrime {
    number: number;
}
