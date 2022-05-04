import VideoThumbnail from "../../../components/Video/VideoThumbnail";
import banner from "../../../static/img/1-vid-banner-01.jpg";
import bannerHalf from "../../../static/img/1-vid-banner-half-01.jpg";
import SliderArrow from "../../../components/Slider/SliderArrow";
import Slider, { SliderProps } from "../../../components/Slider";
import { useMemo, useState } from "react";
import useIsSmallWindow from "../../../hooks/useIsSmallWindow";
import { makeStyles } from "@material-ui/core";
import BannerRating from "./BannerRating";
import VideoContent from "./VideoContent";
import VideoActionsMobile from "./VideoActions/VideoActionsMobile";
import SliderStepper from "./SliderStepper";

const useStyles = makeStyles((theme) => ({
  rootImage: {
    position: "relative",
    marginRight: "4px",
    "&:focus": {
      outlineColor: theme.palette.text.primary,
    },
  },
  image: {
    [theme.breakpoints.down(400)]: {
      width: "300px",
      height: "169px",
    },

    [theme.breakpoints.up(400)]: {
      width: "350px",
      height: "197px",
    },

    [theme.breakpoints.up(700)]: {
      width: "650px",
      height: "366px",
    },

    [theme.breakpoints.up(1200)]: {
      width: "1150px",
      height: "647px",
    },
  },
  get slider() {
    return Object.fromEntries(
      Object.entries(this.image).map((size) => [
        size[0],
        {
          "& .slick-list, & .slick-track": { height: size[1].height },
        },
      ])
    );
  },
}));

const Banner: React.FunctionComponent = (props) => {
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();
  const classSlider = classes.slider;
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderProps: SliderProps = useMemo(
    () => ({
      className: classSlider,
      centerMode: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 1,
      variableWidth: true,
      arrows: !isSmallWindow,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
      beforeChange: (oldIndex, nextIndex) => {
        setActiveIndex(nextIndex);
      },
    }),
    [isSmallWindow, classSlider]
  );
  const thumbnail = isSmallWindow ? banner : bannerHalf;

  return (
    <div>
      <Slider {...sliderProps}>
        {Array.from(new Array(6).keys())
          .map(() => thumbnail)
          .map((v, index) => {
            const show = activeIndex === index;
            return (
              <VideoThumbnail
                key={v}
                classes={{ root: classes.rootImage, image: classes.image }}
                ImgProps={{
                  src: thumbnail,
                }}
              >
                {show && (
                  <VideoContent
                    video={{
                      id: "0000",
                      title: "epitafios",
                      categories: [
                        { id: "111", name: "Documentario", is_active: true },
                      ],
                    }}
                  />
                )}

                {show && <BannerRating rating="14" />}
              </VideoThumbnail>
            );
          })}
      </Slider>
      {!isSmallWindow && (
        <SliderStepper maxSteps={6} activeStep={activeIndex} />
      )}
      <VideoActionsMobile />
    </div>
  );
};

export default Banner;
