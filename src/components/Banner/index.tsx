import React, {MutableRefObject} from 'react';
import ReactSlider, {Settings} from 'react-slick';

import {makeStyles} from '@material-ui/core';

import BannerRating from 'components/Banner/BannerRating';
import BannerStepper from 'components/Banner/BannerStepper';
import SliderStepper from 'components/Banner/SliderStepper';
import VideoActionsMobile from 'components/Banner/VideoActions/VideoActionsMobile';
import VideoContent from 'components/Banner/VideoContent';
import Slider from 'components/Slider';
import SliderArrow from 'components/Slider/SliderArrow';
import Category from 'components/Video/Category';
import Rating from 'components/Video/Rating';
import VideoLink from 'components/Video/VideoLink';
import VideoThumbnail from 'components/Video/VideoThumbnail';
import VideoTitle from 'components/Video/VideoTitle';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

import banner from 'static/img/the_matrix_banner.jpg';
import bannerHalf from 'static/img/the_matrix_thumb.jpg';

import {range} from 'utils';

const useStyles = makeStyles((theme) => ({
    rootImage: {
        position: 'relative',
        marginRight: '4px',
        '&:focus': {
            outlineColor: theme.palette.text.primary,
        },
    },
    bannerStepper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        [theme.breakpoints.down(400)]: {
            width: '300px',
            height: '169px',
        },
        [theme.breakpoints.up(400)]: {
            width: '350px',
            height: '197px',
        },
        [theme.breakpoints.up(700)]: {
            width: '650px',
            height: '366px',
        },
        [theme.breakpoints.up(1200)]: {
            width: '1150px',
            height: '647px',
        },
    },
    get slider() {
        return Object.fromEntries(
            Object.entries(this.image).map((size) => {
                return [
                    size[0],
                    {
                        '& .slick-list, & .slick-track': {
                            height: size[1].height,
                        },
                    },
                ];
            })
        );
    },
}));

const Banner: React.FunctionComponent = () => {
    const classes = useStyles();
    const classSlider = classes.slider;
    const isSmallWindow = useIsSmallWindow();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const sliderRef = React.useRef() as MutableRefObject<ReactSlider>;

    const sliderProps: Settings = React.useMemo(
        () => ({
            className: classSlider,
            centerMode: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: !isSmallWindow,
            prevArrow: <SliderArrow dir="left"/>,
            nextArrow: <SliderArrow dir="right"/>,
            beforeChange(currentSlide: number, nextSlide: number) {
                setActiveIndex(nextSlide);
            },
        }),
        [classSlider, isSmallWindow]
    );

    const thumbnail = isSmallWindow ? bannerHalf : banner;

    const handleClick = (step: number) => {
        console.log(step);
        setActiveIndex(step);
        sliderRef.current.slickGoTo(step);
    };

    return (
        <>
            <Slider ref={sliderRef} settings={sliderProps}>
                {range(1, 5).map((item, index) => (
                    <div key={item}>
                        <VideoThumbnail
                            classes={{root: classes.rootImage, image: classes.image}}
                            ImgProps={{src: thumbnail}}
                        >
                            {index === activeIndex && (
                                <>
                                    <VideoContent
                                        video={{
                                            id: '1000',
                                            title: 'The Matrix',
                                            categories: [
                                                {
                                                    id: '2000',
                                                    name: 'Movies',
                                                    is_active: true,
                                                },
                                            ],
                                        }}
                                    />
                                    <BannerRating rating="14"/>
                                </>
                            )}
                        </VideoThumbnail>
                    </div>
                ))}
            </Slider>
            <VideoActionsMobile/>
            {!isSmallWindow && (
                <SliderStepper maxSteps={5} activeStep={activeIndex}/>
            )}
            <div className={classes.bannerStepper}>
                <BannerStepper
                    maxSteps={5}
                    activeStep={activeIndex}
                    onClick={handleClick}
                />
            </div>
        </>
    );
};

export default Banner;
/*
<Rating rating="L"/>
            <Rating rating="10"/>
            <Rating rating="14"/>
            <Rating rating="16"/>
            <Rating rating="18"/>
            <Category>Movies</Category>
            <Category>Documentaries</Category>
            <VideoLink>Details</VideoLink>
            <VideoTitle>The Matrix</VideoTitle>
 */