import React from 'react';
import { inject, observer } from 'mobx-react';
import TopEmployees from './charts/TopEmployees';
import SalesDist from './charts/SalesDist';
import SalesTrend from './charts/SalesTrend';
import SalesByEmail from './charts/SalesByEmail';

const ChartsBoard = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;

    return (
        <div id="charts-container">
            <TopEmployees data={ClientStore.salesPerSalesperson} />
            <SalesDist data={ClientStore.salesCountryDist} />
            <SalesTrend data={ClientStore.contactsPerDate} />
            <SalesByEmail data={ClientStore.salesPerEmail} />
        </div>
    );
}))

export default ChartsBoard;