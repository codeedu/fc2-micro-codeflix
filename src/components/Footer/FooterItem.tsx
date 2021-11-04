import React from 'react';

import {
    BottomNavigationAction,
    BottomNavigationActionProps,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        fontWeight: 600,
        paddingBottom: 0,
        paddingTop: 0,
    },
}));

export type FooterItemProps = BottomNavigationActionProps;

const FooterItem: React.FunctionComponent<FooterItemProps> = (props) => {
    const classes = useStyles();

    return <BottomNavigationAction className={classes.root} {...props} />;
};

export default FooterItem;
