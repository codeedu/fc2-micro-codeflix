import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: (props: RatingProps) => ({
    width: props.size ? props.size.width : "36px",
    height: props.size ? props.size.height : "36px",
    fontWeight: 400,
    fontSize: "1.2em",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      fontSize: "1em",
      width: "24px",
      height: "24px",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6em",
      width: "36px",
      height: "36px",
    },
  }),
}));

const backgroundColors = {
  L: "#39B549",
  "10": "#20A3D4",
  "12": "#E79738",
  "14": "#E35E00",
  "16": "#d00003",
  "18": "#000000",
};

export interface RatingProps {
  rating: "L" | "10" | "12" | "14" | "16" | "18";
  className?: string;
  size?: { width: string; height: string };
}

const Rating: React.FunctionComponent<RatingProps> = (props) => {
  const { className } = props;
  const classes = useStyles(props);
  return (
    <Typography
      className={clsx(className, classes.root)}
      style={{
        backgroundColor: backgroundColors[props.rating],
      }}
    >
      {props.rating}
    </Typography>
  );
};

export default Rating;
