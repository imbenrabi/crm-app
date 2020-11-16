import React from 'react';
import { inject, observer } from 'mobx-react';
import BadgesBar from './BadgesBar';
import ChartsBoard from './ChartsBoard';


const Analytics = (props) => {
    return (
        <div className="analytics-container">
            <BadgesBar />
            <ChartsBoard />
        </div>
    );
}

export default Analytics;