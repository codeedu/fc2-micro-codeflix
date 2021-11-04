import React from 'react';

import {
    AppBar,
    Dialog,
    IconButton,
    makeStyles,
    Toolbar,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import DialogSearchContext from 'components/DialogSearch/DialogSearchContext';
import InputSearch from 'components/InputSearch';
import TransitionSlide from 'components/Transitions/TransitionSlide';

const useStyles = makeStyles(() => ({
    iconButtonRoot: {
        borderRadius: 0,
        paddingTop: '8px',
        paddingBottom: '8px',
    },
    touchRippleChild: {
        borderRadius: 0,
    },
}));

export interface DialogSearchProps {
    open: boolean;
}

const DialogSearch: React.FunctionComponent<DialogSearchProps> = (props) => {
    const classes = useStyles();
    const dialogContext = React.useContext(DialogSearchContext);

    const handleClose = React.useCallback(() => {
        dialogContext.hide();
    }, [dialogContext]);

    return (
        <Dialog fullScreen open={props.open} TransitionComponent={TransitionSlide}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        classes={{
                            root: classes.iconButtonRoot,
                        }}
                        TouchRippleProps={{
                            classes: {
                                child: classes.touchRippleChild,
                            },
                        }}
                        edge="start"
                        onClick={handleClose}
                    >
                        <ArrowBackIcon/>
                    </IconButton>
                    <InputSearch/>
                </Toolbar>
            </AppBar>
        </Dialog>
    );
};

export default DialogSearch;
