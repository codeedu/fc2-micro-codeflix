import IconButton from "@material-ui/core/IconButton";
import { AppBar, Dialog, Toolbar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputSearch from "../InputSearch";
import TransitionSlide from "../transitions/TransitionSlide";
import { makeStyles } from "@material-ui/core/styles";
import { useCallback, useContext } from "react";
import DialogSearchContext from "./DialogSearchContext";

const useStyles = makeStyles({
  iconButtonRoot: {
    borderRadius: 0,
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  touchRippleChild: {
    borderRadius: 0,
  },
});

interface DialogSearchProps {
  open: boolean;
}

const DialogSearch: React.FunctionComponent<DialogSearchProps> = (props) => {
  const { open } = props;
  const classes = useStyles();
  const dialogContext = useContext(DialogSearchContext);

  const handleClose = useCallback(() => {
    dialogContext.hide();
  }, [dialogContext]);

  return (
    <Dialog fullScreen open={open} TransitionComponent={TransitionSlide}>
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton
            classes={{
              root: classes.iconButtonRoot,
            }}
            TouchRippleProps={{
              classes: {
                child: classes.touchRippleChild,
              },
            }}
            edge="start"
            onClick={handleClose}
          >
            <ArrowBackIcon />
          </IconButton>
          <InputSearch />
        </Toolbar>
      </AppBar>
    </Dialog>
  );
};

export default DialogSearch;
