import React from 'react';

import { Badge, IconButton } from '@material-ui/core';
import NotificationIcon from '@material-ui/icons/Notifications';

const Notifications: React.FunctionComponent = () => {
  return (
    <IconButton>
      <Badge badgeContent={11} color="error">
        <NotificationIcon />
      </Badge>
    </IconButton>
  );
};

export default Notifications;
