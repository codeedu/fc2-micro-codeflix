import React from 'react';
import {Link} from 'react-router-dom';

import {
    Grid,
    makeStyles,
    Theme,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';

import VideoThumbnail from 'components/Video/VideoThumbnail';

import banner from 'static/img/the_matrix_banner.jpg';
import bannerThumbnail from 'static/img/the_matrix_poster.jpg';

import {range} from 'utils';
import {Video} from 'utils/models';

export interface VideoListProps {
    videos: Video[];
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        gridColumnGap: theme.spacing(1),
    },
}));

const VideoList: React.FunctionComponent<VideoListProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));
    const thumbnail = isDown1200 ? bannerThumbnail : banner;

    return (
        <Grid className={classes.root} container justify="center">
            {range(1, 5).map((video) => (
                <Link key={video} to={`/videos/${video}/details`}>
                    <VideoThumbnail ImgProps={{src: thumbnail}}/>
                </Link>
            ))}
        </Grid>
    );
};

export default VideoList;
