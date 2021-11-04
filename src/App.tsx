import {BrowserRouter} from 'react-router-dom';

import {CssBaseline, MuiThemeProvider} from '@material-ui/core';

import DialogSearchProvider from 'components/DialogSearch/DialogSearchProvider';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

import AppRouter from 'routes/AppRouter';

import theme from './theme';

function Main() {
    const isSmallWindow = useIsSmallWindow();

    return (
        <BrowserRouter>
            <DialogSearchProvider>
                <Navbar/>
                <AppRouter/>
                {isSmallWindow && <Footer/>}
            </DialogSearchProvider>
        </BrowserRouter>
    );
}

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Main/>
        </MuiThemeProvider>
    );
}

export default App;