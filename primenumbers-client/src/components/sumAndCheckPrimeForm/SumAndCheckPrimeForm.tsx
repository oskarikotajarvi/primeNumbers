import { ChangeEvent, FC, ReactElement, SyntheticEvent, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, IconButton, Stack, TextField, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuid } from 'uuid';
import './sumAndCheckPrimeForm.styles.css';
import { sumAndCheckPrime } from '../../services/primeNumber.service';
import { IDynamicNumberInput, ILatestResponse } from '../../models/form.models';
import PrimeSuccessStatus from '../primeSuccessText/PrimeSuccessText';

const SumAndCheckPrimeForm: FC = (): ReactElement => {
    const [numberInputs, setNumberInputs] = useState<Array<IDynamicNumberInput>>([
        {
            value: '',
            id: uuid(),
            error: false
        },
    ]);
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
    const [latestResponse, setLatestResponse] = useState<ILatestResponse >({ error: false });

    const getValuesFromInputs = (inputs: Array<IDynamicNumberInput>): Array<string> => {
        return inputs.map(input => {
            return input.value;
        });
    };

    const addNewNumberInput = (): void => {
        const shallowCopy = [...numberInputs].concat({value: '', id: uuid(), error: false});

        setNumberInputs(shallowCopy);
        setSubmitDisabled(!isSomeInputInvalid(shallowCopy));
    };

    const setValueForNumberInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const shallowCopy = [...numberInputs];
        const index = numberInputs.findIndex(e => e.id === event.target.id);

        shallowCopy[index].value = event.target.value;
        shallowCopy[index].error = !isInputValid(event.target.value);

        setNumberInputs(shallowCopy);
        setSubmitDisabled(!isSomeInputInvalid(shallowCopy));
    };

    const isSomeInputInvalid = (inputArray: Array<IDynamicNumberInput>): boolean => {
        return !inputArray.some(input => (!Number.isInteger(+input.value) || input.value === ''));
    };

    const isInputValid = (value: string): boolean => {
        return Number.isInteger(+value) && value !== '';
    };

    const onSubmit = async (event: SyntheticEvent): Promise<void> => {
        event.preventDefault();
        try {
            const res = await sumAndCheckPrime(getValuesFromInputs(numberInputs));
            setLatestResponse({
                isPrime: res.isPrime,
                error: false,
                number: res.number
            });
        } catch (err) {
            setLatestResponse({error: true});
        }
    };

    const removeNumberInput = (id: string): void => {
        const shallowCopy = [...numberInputs];
        setNumberInputs(shallowCopy.filter(input => input.id !== id));
    };

    const deleteButtonForInput = (input: IDynamicNumberInput, index: number): ReactElement | null => {
        if (index === 0)  {
            return null;
        }

        return (
            <IconButton color="error" aria-label="Remove input field" component="span" onClick={() => removeNumberInput(input.id)}>
                <DeleteIcon />
            </IconButton>
        );
    };

    return (
        <>
            <Card className="check-and-sum-prime-card">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Check if a sum of numbers is a Primary Number
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Input integer (whole) numbers to check if the sum is a primary number
                    </Typography>
                    <Box onSubmit={onSubmit} component="form" autoComplete="off">
                        <Box className="check-and-sum-prime-inputs" component="div">
                            {numberInputs.map((input, index) => 
                                <Stack direction="row" alignItems="center" spacing={2} key={'stack-' + input.id}>
                                    <TextField
                                        key={input.id}
                                        error={input.error}
                                        id={input.id}
                                        className="check-and-sum-prime-input"
                                        label="Input number"
                                        type="number"
                                        InputLabelProps ={{shrink: true}}
                                        variant="filled"
                                        value={input.value}
                                        onChange={setValueForNumberInput}
                                        required
                                    />
                                    {deleteButtonForInput(input, index)}
                                </Stack>
                            )}
                        </Box>
                        <IconButton color="success" aria-label="Add an input field" component="span" onClick={addNewNumberInput}>
                            <AddBoxIcon />
                        </IconButton>
                        <CardActions>
                            <Button variant="contained" type="submit" color="secondary" disabled={submitDisabled}>
                                Check
                            </Button>
                            <PrimeSuccessStatus isPrime={latestResponse.isPrime} number={latestResponse.number} error={latestResponse.error} />
                        </CardActions>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default SumAndCheckPrimeForm;
