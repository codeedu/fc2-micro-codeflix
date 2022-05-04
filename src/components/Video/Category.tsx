import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    textTransform: "uppercase",
    borderBottom: "solid #ffde39",
    width: "fit-content",
  },
});

export interface CategoryProps {
  className?: any;
}
const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const { className, children } = props;
  const classes = useStyles();
  return (
    <Typography component="h3" className={clsx(classes.root, className)}>
      {children}
    </Typography>
  );
};

export default Category;
