import * as React from "react";
import { Menu as MuiMenu, MenuItem, MuiThemeProvider } from "@material-ui/core";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import FooterItem, { FooterItemProps } from "./FooterItem";
import MovieIcon from "@material-ui/icons/Movie";
import { menuTheme } from "../../theme";

interface FooterCategoriesItemProps extends FooterItemProps {
  currentRoute: string | undefined;
}

const FooterCategoriesItem: React.FunctionComponent<FooterCategoriesItemProps> =
  (props) => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
      <>
        <FooterItem
          {...props}
          label="Conteúdos"
          icon={<MovieIcon />}
          onClick={handleOpen}
          selected={props.currentRoute === "video.by-category"}
        />
        <MuiThemeProvider theme={menuTheme}>
          <MuiMenu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
            getContentAnchorEl={null}
          >
            <MenuItem
              component={Link}
              to={`/categories/filme-id`}
              onClick={handleClose}
            >
              Filmes
            </MenuItem>
            <MenuItem
              component={Link}
              to={`/categories/documentarios-id`}
              onClick={handleClose}
            >
              Documentários
            </MenuItem>
          </MuiMenu>
        </MuiThemeProvider>
      </>
    );
  };

export default FooterCategoriesItem;
