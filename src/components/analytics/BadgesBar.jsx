import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import EmailsSent from './badges/EmailsSent';
import NewClients from './badges/NewClients';
import OutstandingClients from './badges/OutstandingClients';
import HottestCountry from './badges/HottestCountry';

const BadgesBar = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;

    return (
        <div id="badges-bar">
            <NewClients newClients={ClientStore.newClients} />
            <EmailsSent emailsSent={ClientStore.emailsSent} />
            <OutstandingClients outstandingClients={ClientStore.outstandingClients} />
            <HottestCountry hottestCountry={ClientStore.hottestCountry} />
        </div>
    );
}))

export default BadgesBar;