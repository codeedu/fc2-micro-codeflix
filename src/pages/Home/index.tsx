import React from 'react';

import Banner from 'components/Banner';
import Page from 'components/Page';
import Sections from 'components/Sections';

const Home: React.FunctionComponent = () => {
    return (
        <Page>
            <Banner/>
            <Sections/>
        </Page>
    );
};

export default Home;
