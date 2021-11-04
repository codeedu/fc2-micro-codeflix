import React from 'react';
import { Link } from 'react-router-dom';

import {
  Divider,
  IconButton,
  Menu as MUIMenu,
  MenuItem,
  MuiThemeProvider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { menuTheme } from 'theme';

import useMenu from 'hooks/useMenu';

import routes, { MyRouteProps } from 'routes';

const listRoutes = {
  home: 'Home',
};

const menuRoutes = routes.filter((route) =>
  Object.keys(listRoutes).includes(route.name)
);

const MenuCategories: React.FunctionComponent = () => {
  const { open, anchorEl, handleOpen, handleClose } = useMenu();

  return (
    <MuiThemeProvider theme={menuTheme}>
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          aria-controls="menu-categories"
          aira-haspopup="true"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>

        <MUIMenu
          id="menu-categories"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          getContentAnchorEl={null}
        >
          {Object.keys(listRoutes).map((routeName, key) => {
            const menu = menuRoutes.find(
              (route) => route.name === routeName
            ) as MyRouteProps;
            return (
              <MenuItem
                key={String(key)}
                component={Link}
                to={menu.path as string}
                onClick={handleClose}
              >
                {listRoutes[routeName as keyof typeof listRoutes]}
              </MenuItem>
            );
          })}
          <Divider />
          <MenuItem component={Link} to="/categories/1" onClick={handleClose}>
            Categories
          </MenuItem>
        </MUIMenu>
      </div>
    </MuiThemeProvider>
  );
};

export default MenuCategories;
