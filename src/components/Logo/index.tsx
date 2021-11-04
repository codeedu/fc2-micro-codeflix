import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import logo from 'static/img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: 100,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 130,
    },
    [theme.breakpoints.up('md')]: {
      width: 170,
    },
  },
}));

const Logo: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <img src={logo} alt="CODEFLIX" className={classes.logo} />
    </Typography>
  );
};

export default Logo;
