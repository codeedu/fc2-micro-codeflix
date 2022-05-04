import { makeStyles } from "@material-ui/core";
import Category, { CategoryProps } from "../../../components/Video/Category";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      position: "absolute",
      bottom: 0,
      marginBottom: 4,
      left: 4,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },
  category: {
    fontSize: "1.4em",
    borderBottomWidth: "2px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6em",
    },
  },
}));

interface BannerCategoryProps extends CategoryProps {}

const BannerCategory: React.FunctionComponent<BannerCategoryProps> = (
  props
) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Category {...props} className={classes.category} />
    </div>
  );
};

export default BannerCategory;
