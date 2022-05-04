import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    fontWeight: 300,
    textTransform: "uppercase",
  },
});

interface TitleProps {
  className?: string;
}
const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { className, children } = props;
  const classes = useStyles();
  const classesRoot = clsx(classes.root, className);
  return (
    <Typography component="h3" className={classesRoot}>
      {children}
    </Typography>
  );
};

export default Title;
