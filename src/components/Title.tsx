import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.4em",
    fontWeight: 600,
    textTransform: "uppercase",
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    margin: theme.spacing(3, 3),

    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      margin: theme.spacing(2, 1),
    },
  },
}));

const Title: React.FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} component="h2" color={"textSecondary"}>
      {props.children}
    </Typography>
  );
};

export default Title;