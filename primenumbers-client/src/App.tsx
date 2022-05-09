import { FC, ReactElement } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useStateValue } from './state';
import { darkTheme } from './theming/dark';
import { lightTheme } from './theming/light';
import ApplicationBar from './components/applicatonBar/ApplicationBar';
import CheckPrimeForm from './components/checkPrimeForm/CheckPrimeForm';
import SumAndCheckPrimeForm from './components/sumAndCheckPrimeForm/SumAndCheckPrimeForm';

const App: FC = (): ReactElement => {
    const [{ useDarkTheme }] = useStateValue();

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <ApplicationBar />
            <div className="App">
                <CheckPrimeForm />
                <SumAndCheckPrimeForm />
            </div>
        </ThemeProvider>
    );
};

export default App;
