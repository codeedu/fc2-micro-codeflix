import React from 'react';
import { matchPath, useHistory, useLocation } from 'react-router-dom';

import { AppBar, BottomNavigation, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import DialogMyAccount from 'components/DialogMyAccount';
import FooterCategoriesItem from 'components/Footer/FooterCategoriesItem';
import FooterItem from 'components/Footer/FooterItem';

import routes from 'routes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    top: 'auto',
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    height: '48px',
  },
  bottomNavigation: {
    backgroundColor: 'inherit',
  },
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();

  const [openDialogMyAccount, setOpenDialogMyAccount] = React.useState(false);

  const { push } = useHistory();
  const { pathname } = useLocation();

  const currentRoute = React.useMemo(() => {
    return routes.find((r) => matchPath(pathname, r))?.name;
  }, [pathname]);

  const gotToHome = React.useCallback(() => {
    push('/');
  }, [push]);

  const onClickMyAccount = React.useCallback(() => {
    setOpenDialogMyAccount(true);
  }, []);

  const onDialogMyAccountClose = React.useCallback(() => {
    setOpenDialogMyAccount(false);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        classes={{
          root: classes.appBar,
        }}
        position="fixed"
        color="primary"
      >
        <BottomNavigation
          className={classes.bottomNavigation}
          showLabels
          value={currentRoute}
        >
          <FooterItem
            label="Home"
            value="home"
            icon={<HomeIcon />}
            onClick={gotToHome}
          />
          <FooterCategoriesItem currentroute={currentRoute} />
          <FooterItem
            label="Notifications"
            value="notifications"
            icon={<NotificationsIcon />}
          />
          <FooterItem
            label="Profile"
            value="profile"
            icon={<PersonIcon />}
            onClick={onClickMyAccount}
          />
        </BottomNavigation>
      </AppBar>
      <DialogMyAccount
        open={openDialogMyAccount}
        onClose={onDialogMyAccountClose}
      />
    </div>
  );
};

export default Footer;
