import React from 'react';

import {
    AppBar,
    Grid,
    IconButton,
    makeStyles,
    Toolbar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import DialogSearchContext from 'components/DialogSearch/DialogSearchContext';
import HideOnScroll from 'components/HideOnScroll';
import InputSearch from 'components/InputSearch';
import Logo from 'components/Logo';
import MenuAccount from 'components/Menus/MenuAccount';
import MenuCategories from 'components/Menus/MenuCategories';
import Notifications from 'components/Notifications';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const dialogContext = React.useContext(DialogSearchContext);

    const handleOpen = React.useCallback(() => {
        dialogContext.show();
    }, [dialogContext]);

    return (
        <div className={classes.root}>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        {!isSmallWindow && <MenuCategories/>}
                        <Logo/>
                        {!isSmallWindow && (
                            <>
                                <Grid container justifyContent="center">
                                    <Grid item xs={8} lg={7}>
                                        <InputSearch/>
                                    </Grid>
                                </Grid>
                                <Notifications/>
                                <MenuAccount/>
                            </>
                        )}
                        {isSmallWindow && (
                            <Grid container justifyContent="flex-end">
                                <IconButton onClick={handleOpen}>
                                    <SearchIcon/>
                                </IconButton>
                            </Grid>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;
