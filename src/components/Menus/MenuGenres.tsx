import React from 'react';

import {
    Box,
    Menu as MUIMenu,
    MenuItem,
    MuiThemeProvider,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {menuTheme} from 'theme';

import useMenu from 'hooks/useMenu';

const MenuGenres: React.FunctionComponent = () => {
    const {open, anchorEl, handleOpen, handleClose} = useMenu();

    return (
        <MuiThemeProvider theme={menuTheme}>
            <Box
                color="inherit"
                aria-label="open drawer"
                aria-controls="menu-genres"
                aira-haspopup="true"
                onClick={handleOpen}
                style={{cursor: 'pointer'}}
                display="flex"
                alignItems="center"
                flexDirection="row"
                px={1}
            >
                All genres
                <KeyboardArrowDownIcon/>
            </Box>

            <MUIMenu
                id="menu-genres"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleClose}>All genres</MenuItem>
                <MenuItem onClick={handleClose}>Movies</MenuItem>
                <MenuItem onClick={handleClose}>Documentary</MenuItem>
                <MenuItem onClick={handleClose}>Kids & Family</MenuItem>
            </MUIMenu>
        </MuiThemeProvider>
    );
};

export default MenuGenres;
