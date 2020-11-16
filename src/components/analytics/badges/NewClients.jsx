import React from 'react';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';

function NewClients(props) {
    return (
        <div className="badge-box">
            <div>
                <TrendingUpOutlinedIcon className="badge-icon" />
            </div>
            <span className="badge-value">{props.newClients} | </span>
            <span>New Clients</span>
        </div>
    );
}

export default NewClients;