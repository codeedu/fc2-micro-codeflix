import React from 'react';

import { makeStyles } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import VideoLink from 'components/Video/VideoLink';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

const VideoActions: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VideoLink>
        <PlayCircleOutlineIcon />
        Play
      </VideoLink>
      <VideoLink>
        <AddCircleOutlineIcon />
        My List
      </VideoLink>
      <VideoLink>
        <InfoIcon />
        Details
      </VideoLink>
    </div>
  );
};

export default VideoActions;
