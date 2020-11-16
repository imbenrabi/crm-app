import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import BadgesBar from './BadgesBar';
import ChartsBoard from './ChartsBoard';


const Analytics = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;

    useEffect(() => {
        (async () => {
            await ClientStore.getClients();
        })();
    }, [])

    return (
        <div className="analytics-container">
            <BadgesBar />
            <ChartsBoard />
        </div>
    );
}))

export default Analytics;