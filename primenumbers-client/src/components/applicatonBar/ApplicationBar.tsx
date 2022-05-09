import { FC, ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { changeTheme, useStateValue } from '../../state';

const ApplicationBar: FC = (): ReactElement => {
    const [{ useDarkTheme }, dispatch] = useStateValue();

    const changeColorMode = (): void => {
        dispatch(changeTheme(!useDarkTheme));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Primary number checker
                    </Typography>
                    <IconButton sx={{ ml: 1 }} color="inherit" onClick={changeColorMode}>
                        {useDarkTheme ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default ApplicationBar;
