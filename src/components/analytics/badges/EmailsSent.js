import React from 'react';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

function EmailsSent(props) {
    return (
        <div className="badge-box">
            <div>
                <MailOutlineOutlinedIcon className="badge-icon" />
            </div>
            <span className="badge-value">{props.emailsSent} | </span>
            <span>Emails Sent</span>
        </div>
    );
}

export default EmailsSent;