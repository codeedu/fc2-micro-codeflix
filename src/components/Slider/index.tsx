import React from 'react';
import ReactSlider, { Settings } from 'react-slick';

import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    '&:hover .slick-left, &:hover .slick-right': {
      opacity: 1,
    },
  },
}));

export interface SliderProps {
  className?: string;
  settings: Settings;
  children: React.ReactNode;
}

const Slider = React.forwardRef<any, SliderProps>((props, ref) => {
  const { className, settings, children, ...other } = props;
  const classes = useStyles();
  const classRoot = clsx(classes.root, className);

  return (
    <ReactSlider ref={ref} {...settings} {...other} className={classRoot}>
      {children}
    </ReactSlider>
  );
});

export default Slider;
