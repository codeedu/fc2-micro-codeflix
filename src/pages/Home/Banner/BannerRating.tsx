import { makeStyles } from "@material-ui/core";
import Rating, { RatingProps } from "../../../components/Video/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 30,
      right: 4,
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0.5)',

      [theme.breakpoints.up("lg")]: {
          width: 212,
          padding: "5px 5px 5px 15px",
          borderLeft: "5px solid #999999"
      }
  },
}));

interface BannerRatingProps extends RatingProps {}

const BannerRating: React.FunctionComponent<BannerRatingProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Rating {...props} />
    </div>
  );
};

export default BannerRating;
