import { Card, CardActions, CardContent, Typography, Button, TextField, Box } from '@mui/material';
import { ChangeEvent, FC, ReactElement, SyntheticEvent, useState } from 'react';
import { checkPrime } from '../../services/primeNumber.service';
import './checkPrimeForm.styles.css';
import PrimeSuccessStatus from '../primeSuccessText/PrimeSuccessText';
import { ILatestResponse, INumberInput } from '../../models/form.models';

const CheckPrimeForm: FC = (): ReactElement => {
    const [primeCandidate, setPrimeCandidate] = useState<INumberInput>({value: '', error: false});
    const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);
    const [latestPrimeStatus, setLatestPrimeStatus] = useState<ILatestResponse>({ error: false });

    const isInputValid = (value: string): boolean => {
        return Number.isInteger(+value) && value !== '';
    };

    const onCheckPrimeSubmit = async (event: SyntheticEvent): Promise<void> => {
        event.preventDefault();
        const primeCandidateAsNum = Number.parseInt(primeCandidate.value);
        try {
            const res = await checkPrime(primeCandidateAsNum);
            setLatestPrimeStatus({ isPrime: res, number: primeCandidateAsNum, error: false });
        } catch (err) {
            setLatestPrimeStatus({ error: true });
        }
    };

    const onPrimeCandidateChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setPrimeCandidate({
            value: event.target.value,
            error: !isInputValid(event.target.value)
        });
        setSubmitEnabled(Number.isInteger(+event.target.value) && event.target.value !== '');
    };

    return (
        <>
            <Card className="check-prime-card">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Check if a number is a Primary Number
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="check-prime-card-body">
                        Input a integer (whole) number to check if it&apos;s a primary number
                    </Typography>
                    <Box onSubmit={onCheckPrimeSubmit} component="form" autoComplete="off">
                        <TextField
                            className="check-prime-input"
                            label="Prime Candidate"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            value={primeCandidate.value}
                            onChange={onPrimeCandidateChange}
                            error={primeCandidate.error}
                            required
                        />
                        <CardActions>
                            <Button variant="contained" type="submit" color="secondary" disabled={!submitEnabled}>
                                Check
                            </Button>
                            <PrimeSuccessStatus isPrime={latestPrimeStatus.isPrime} number={latestPrimeStatus.number} error={latestPrimeStatus.error}/>
                        </CardActions>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default CheckPrimeForm;
