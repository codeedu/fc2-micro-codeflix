import React from 'react';
import { Link } from 'react-router-dom';

import { Menu as MUIMenu, MenuItem, MuiThemeProvider } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { menuTheme } from 'theme';

import FooterItem from 'components/Footer/FooterItem';

import useMenu from 'hooks/useMenu';

export interface FooterCategoriesItemProps {
  currentroute?: string;
}

const FooterCategoriesItem: React.FunctionComponent<FooterCategoriesItemProps> =
  (props) => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
      <>
        <FooterItem
          {...props}
          label="Categories"
          icon={<ListIcon />}
          aria-label="open drawer"
          aria-controls="footer-menu-categories"
          aira-haspopup="true"
          onClick={handleOpen}
          selected={props.currentroute === 'video.by-category'}
        />
        <MuiThemeProvider theme={menuTheme}>
          <MUIMenu
            id="footer-menu-categories"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            getContentAnchorEl={null}
          >
            <MenuItem
              component={Link}
              to="/categories/movies"
              onClick={handleClose}
            >
              Movies
            </MenuItem>
            <MenuItem
              component={Link}
              to="/categories/documentaries"
              onClick={handleClose}
            >
              Documentaries
            </MenuItem>
          </MUIMenu>
        </MuiThemeProvider>
      </>
    );
  };

export default FooterCategoriesItem;
