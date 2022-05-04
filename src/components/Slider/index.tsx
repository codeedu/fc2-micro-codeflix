import ReactSlider, { Settings } from "react-slick";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    "&:hover .slick-left, &:hover .slick-right": {
      opacity: 1,
    },
  },
});

export interface SliderProps extends Settings {}

const Slider: React.FunctionComponent<SliderProps> = (props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  const className = clsx(classes.root, other.className);
  console.log(className);
  return (
    <ReactSlider {...other} className={className}>
      {children}
    </ReactSlider>
  );
};

export default Slider;
