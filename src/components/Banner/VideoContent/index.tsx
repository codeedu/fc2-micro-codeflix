import React from 'react';

import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from 'theme';

import BannerCategory from 'components/Banner/BannerCategory';
import VideoActions from 'components/Banner/VideoActions';
import VideoTitle from 'components/Video/VideoTitle';

import { Video } from 'utils/models';

export interface VideoContentProps {
  video: Video;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: 24,
    marginBottom: 40,
    bottom: 0,
  },
  title: {
    fontSize: '2em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5em',
    },
  },
}));

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
  const { video } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isUp700 = useMediaQuery(
    theme.breakpoints.up(BANNER_VIDEO_ACTIONS_MEDIA_QUERY)
  );

  return (
    <div className={classes.root}>
      <BannerCategory>
        {video.categories.map((c) => c.name).join(' / ')}
      </BannerCategory>
      {isUp700 && (
        <>
          <VideoTitle className={classes.title}>{video.title}</VideoTitle>
          <VideoActions />
        </>
      )}
    </div>
  );
};

export default VideoContent;
