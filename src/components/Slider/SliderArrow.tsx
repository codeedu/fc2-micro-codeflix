import React from 'react';
import {CustomArrowProps} from 'react-slick';

import {alpha, makeStyles} from '@material-ui/core';
import clsx from 'clsx';

import SliderArrowUnstyled from 'components/Slider/SliderArrowUnstyled';

const useStyles = makeStyles((theme) => ({
    root: (props: SliderArrowProps) => {
        const style = {
            height: '100%',
            position: 'absolute' as any,
            display: 'flex',
            zIndex: 999,
            opacity: 0,
        };

        if (props.dir === 'right') {
            (style as any).right = 0;
            (style as any).top = 0;
        }

        return style;
    },
    iconButtonRoot: {
        borderRadius: 0,
        '&:hover': {
            backgroundColor: alpha(theme.palette.background.default, 0.35),
        },
    },
    arrow: {
        fontSize: 50,
        color: theme.palette.common.white,
        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            fontSize: 31,
        },
    },
}));

export interface SliderArrowProps extends CustomArrowProps {
    dir: 'left' | 'right';
}

const SliderArrow: React.FunctionComponent<SliderArrowProps> = (props) => {
    const {dir, className, onClick} = props;
    const classes = useStyles(props);

    return (
        <div
            className={clsx(
                classes.root,
                dir === 'left' ? 'slick-left' : 'slick-right'
            )}
        >
            <SliderArrowUnstyled
                dir={dir}
                IconButtonProps={{
                    classes: {root: classes.iconButtonRoot},
                    onClick,
                    disabled: className?.includes('disabled'),
                    disableTouchRipple: true,
                }}
                classes={{arrow: classes.arrow}}
            />
        </div>
    );
};

export default SliderArrow;
