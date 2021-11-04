import React from 'react';

import {Grid} from '@material-ui/core';

import MenuGenres from 'components/Menus/MenuGenres';
import Title from 'components/Title';
import VideoList from 'components/Video/VideoList';
import Page from "../../components/Page";

const VideosByCategory: React.FunctionComponent = () => {
    return (
        <Page margin="large">
            <Grid container>
                <Grid item xs={7} sm={9}>
                    <Title>Movies</Title>
                </Grid>
                <Grid item xs={5} sm={3} style={{display: 'flex'}}>
                    <MenuGenres/>
                </Grid>
            </Grid>
            <VideoList videos={[]}/>
        </Page>
    );
};

export default VideosByCategory;
