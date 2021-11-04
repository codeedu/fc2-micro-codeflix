import React from 'react';

import {makeStyles, Typography} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    root: {
        fontWeight: 300,
        textTransform: 'uppercase',
    },
}));

export interface VideoTitleProps {
    className?: string;
}

const VideoTitle: React.FunctionComponent<VideoTitleProps> = (props) => {
    const {className, children} = props;
    const classes = useStyles();
    const classesRoot = clsx(classes.root, className);

    return (
        <Typography component="h3" className={classesRoot}>
            {children}
        </Typography>
    );
};

export default VideoTitle;
