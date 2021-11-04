import React from 'react';

import { Link, LinkProps, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontSize: '1em',
    fontWeight: 300,
    alignItems: 'center',
    color: theme.palette.text.primary,
    marginRight: 5,
    [theme.breakpoints.up(theme.breakpoints.values.mobile)]: {
      fontSize: '1.2em',
      marginRight: 30,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5em',
      marginRight: 50,
    },
  },
}));

export type VideoLinkProps = LinkProps;

const VideoLink: React.FunctionComponent<VideoLinkProps> = (props) => {
  const { className, ...other } = props;
  const classes = useStyles();

  return <Link {...other} className={clsx(classes.root, className)} />;
};

export default VideoLink;
