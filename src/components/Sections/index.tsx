import React from 'react';

import SectionSlider from 'components/SectionSlider';

const Sections: React.FunctionComponent = () => {
    return (
        <main>
            <SectionSlider title="Recently Added" videos={[]}/>
            <SectionSlider title="Trending Now" videos={[]}/>
            <SectionSlider title="New Releases" videos={[]}/>
            <SectionSlider title="Kids & Family" videos={[]}/>
            <SectionSlider title="Popular on Codeflix" videos={[]}/>
            <SectionSlider title="Recommended" videos={[]}/>
        </main>
    );
};

export default Sections;
