import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: (props: PageProps) => ({
    height: "inherit",
    paddingTop: props.margin === "normal" ? 48 : 62,

    [theme.breakpoints.up("md")]: {
      paddingTop: props.margin === "normal" ? 64 : 80,
    },
    "&::after": {
      [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
        display: "block",
        content: '""',
        paddingTop: 100,
      },
    },
  }),
}));

interface PageProps {
  classes?: {
    root?: any;
  };
  margin?: "normal" | "large";
}

const Page: React.FunctionComponent<PageProps> = (props) => {
  const { classes: propClasses = {}, margin = "normal" } = props;
  const classes = useStyles({ classes: propClasses, margin });
  const classRoot = clsx(classes.root, propClasses.root);
  return <div className={classRoot}>{props.children}</div>;
};

export default Page;
