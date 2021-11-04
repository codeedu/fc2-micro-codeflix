import React from 'react';

import {
  makeStyles,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import { Check } from '@material-ui/icons';
import clsx from 'clsx';

import { range } from 'utils';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'transparent',
    padding: 0,
  },
}));

const useQontoStepIconStyles = makeStyles((theme) => {
  return {
    root: {
      color: 'rgba(255, 255, 255, 0.4)',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: theme.palette.common.white,
    },
    circle: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: theme.palette.common.white,
      zIndex: 1,
      fontSize: 18,
    },
  };
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  console.log(completed);

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

export interface BannerStepperProps {
  activeStep: number;
  maxSteps: number;
  onClick: (step: number) => void;
}

const BannerStepper: React.FunctionComponent<BannerStepperProps> = (props) => {
  const { activeStep, maxSteps, onClick } = props;
  const classes = useStyles();

  const steps = React.useMemo(() => {
    return range(0, maxSteps - 1);
  }, [maxSteps]);

  return (
    <Stepper connector={<></>} classes={{ root: classes.root }}>
      {steps.map((step) => (
        <Step
          key={step}
          active={step === activeStep}
          onClick={() => onClick(step)}
        >
          <StepLabel StepIconComponent={QontoStepIcon} />
        </Step>
      ))}
    </Stepper>
  );
};

export default BannerStepper;
