import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function OutstandingClients(props) {
    return (
        <div className="badge-box">
            <div>
                <AccountCircleIcon className="badge-icon" />
            </div>
            <span className="badge-value">{props.outstandingClients} | </span>
            <span>Outstanding Clients</span>
        </div>
    );
}

export default OutstandingClients;