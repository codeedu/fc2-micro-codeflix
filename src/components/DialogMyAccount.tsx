import { useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  AppBar,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import UserInformation from "./UserInformation";
import TransitionSlide from "./transitions/TransitionSlide";

interface DialogMyAccountProps {
  open: boolean;
  onClose?: () => void;
}

const DialogMyAccount: React.FunctionComponent<DialogMyAccountProps> = (
  props
) => {
  const { open, onClose } = props;

  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={TransitionSlide}
    >
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Minha Conta</Typography>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <UserInformation />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon color={"primary"}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DialogMyAccount;
