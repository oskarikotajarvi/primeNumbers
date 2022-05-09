export interface ILatestResponse {
    isPrime?: boolean 
    number?: number;
    error: boolean;
};

export interface INumberInput {
    value: string;
    error: boolean;
}

export interface IDynamicNumberInput extends INumberInput{
    id: string;
};

