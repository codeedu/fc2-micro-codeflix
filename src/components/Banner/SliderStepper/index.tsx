import React from 'react';

import {makeStyles, MobileStepper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    dotActive: {
        backgroundColor: theme.palette.common.white,
    },
}));

export interface SliderStepperProps {
    maxSteps: number;
    activeStep: number;
}

const SliderStepper: React.FunctionComponent<SliderStepperProps> = (props) => {
    const {maxSteps, activeStep} = props;
    const classes = useStyles();

    return (
        <>
            <MobileStepper
                classes={{
                    root: classes.root,
                    dot: classes.dot,
                    dotActive: classes.dotActive,
                }}
                steps={maxSteps}
                activeStep={activeStep}
                position="static"
                variant="dots"
                backButton={null}
                nextButton={null}
            />
        </>
    );
};

export default SliderStepper;
