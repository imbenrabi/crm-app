import React from 'react';
import PublicIcon from '@material-ui/icons/Public';

function HottestCountry(props) {
    return (
        <div className="badge-box">
            <div>
                <PublicIcon className="badge-icon" />
            </div>
            <span className="badge-value">{props.hottestCountry} | </span>
            <span>Hottest Country</span>
        </div>
    );
}

export default HottestCountry;