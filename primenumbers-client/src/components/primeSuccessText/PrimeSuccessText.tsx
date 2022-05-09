import { FC, ReactElement } from 'react';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './primeSuccessText.styles.css';
import { ILatestResponse } from '../../models/form.models';

const PrimeSuccessStatus: FC<ILatestResponse> = (props: ILatestResponse): ReactElement | null => {
    const getStatusText = (): ReactElement | null => {
        if (props.error) {
            const errorText = 'An error occurred. Please check your inputs to be integer (whole) numbers and try again';
            return  (
                <><CancelIcon className="prime-success-status-icon" />{errorText}</>
            );
        }

        if (!props.isPrime) {
            const notPrimeStatusText = `Number ${props.number} is not a prime!`;
            return (
                <><CancelIcon className="prime-success-status-icon" />{notPrimeStatusText}</>
            );
        } else {
            const isPrimeStatusText = `Number ${props.number} is a prime!`;
            return (
                <><CheckCircleIcon className="prime-success-status-icon" />{isPrimeStatusText}</>
            );
        }
    };

    if (props.isPrime == null && !props.error) {
        return null;
    } else {
        return (
            <>
                <Typography variant="body2" color={props.isPrime ? 'green' : 'red'} component="div" className="prime-success-status-text">
                    {getStatusText()}
                </Typography>
            </>
        );
    }

};

export default PrimeSuccessStatus;
