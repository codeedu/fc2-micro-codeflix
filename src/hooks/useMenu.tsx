import React from 'react';

const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = React.useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    open,
    anchorEl,
    handleOpen,
    handleClose,
  };
};

export default useMenu;
