import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#1f1f1f",
    },
    error: {
      main: red.A400,
    },
    action: {
      active: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8c8c8d",
    },
  },
});

export default theme;