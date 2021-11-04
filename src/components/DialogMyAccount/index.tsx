import React from 'react';

import {
    AppBar,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import TransitionSlide from 'components/Transitions/TransitionSlide';
import UserInformation from 'components/UserInformation';

export interface DialogMyAccountProps {
    open: boolean;
    onClose?: () => void;
}

const DialogMyAccount: React.FunctionComponent<DialogMyAccountProps> = (
    props
) => {
    const {open, onClose} = props;

    const handleClose = React.useCallback(() => {
        onClose && onClose();
    }, [onClose]);

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={TransitionSlide}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h6">My Account</Typography>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <UserInformation/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Exit"/>
                </ListItem>
            </List>
        </Dialog>
    );
};

export default DialogMyAccount;
