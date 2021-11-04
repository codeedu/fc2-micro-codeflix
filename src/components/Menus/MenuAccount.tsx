import React from 'react';

import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu as MUIMenu,
  MenuItem,
  MuiThemeProvider,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { menuTheme } from 'theme';

import UserInformation from 'components/UserInformation';

import useMenu from 'hooks/useMenu';

const MenuAccount: React.FunctionComponent = () => {
  const { open, anchorEl, handleOpen, handleClose } = useMenu();

  return (
    <MuiThemeProvider theme={menuTheme}>
      <div>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          px={1}
          aria-label="open drawer"
          aria-controls="menu-account"
          aira-haspopup="true"
          onClick={handleOpen}
          style={{ cursor: 'pointer' }}
        >
          <UserInformation />
          <ArrowDownIcon />
        </Box>

        <MUIMenu
          id="menu-account"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Exit" />
          </MenuItem>
        </MUIMenu>
      </div>
    </MuiThemeProvider>
  );
};

export default MenuAccount;
