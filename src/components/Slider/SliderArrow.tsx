import { fade, makeStyles } from "@material-ui/core";
import SliderArrowUnstyled from "./SliderArrowUnstyled";
import clsx from "clsx";
import { CustomArrowProps } from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: (props: SliderArrowProps) => {
    const style = {
      display: "flex",
      height: "100%",
      position: "absolute" as any,
      opacity: 0,
      zIndex: 999,
    };
    if (props.dir === "right") {
      (style as any).right = 0;
      (style as any).top = 0;
    }
    return style;
  },
  iconButtonRoot: {
    borderRadius: 0,
    "&:hover": {
      backgroundColor: fade(theme.palette.background.default, 0.35),
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

interface SliderArrowProps extends CustomArrowProps {
  dir: "left" | "right";
}

const SliderArrow: React.FunctionComponent<SliderArrowProps> = (props) => {
  //more props - style, currentSlide, slideCount
  const { dir, className, onClick } = props;
  const classes = useStyles(props);
  return (
    <div
      className={clsx(
        classes.root,
        dir === "left" ? "slick-left" : "slick-right"
      )}
    >
      <SliderArrowUnstyled
        dir={dir}
        IconButtonProps={{
          classes: { root: classes.iconButtonRoot },
          // style,
          onClick,
          disabled: className?.includes("disabled"),
          disableTouchRipple: true,
        }}
        classes={{ arrow: classes.arrow }}
      />
    </div>
  );
};

export default SliderArrow;
