import {BrowserRouter} from 'react-router-dom';

import {CssBaseline, MuiThemeProvider} from '@material-ui/core';

import theme from './theme';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useIsSmallWindow from "./hooks/useIsSmallWindow";
import DialogSearchProvider from "./components/DialogSearch/DialogSearchProvider";
import AppRouter from "./routes/AppRouter";

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