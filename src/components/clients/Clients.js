import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { services } from '../../services'
import ClientSearch from './ClientSearch';
import ClientsTable from './ClientsTable';

const Clients = inject('ClientStore')(observer((props) => {
    useEffect(() => {
        const getCurrentClients = async () => {
            const clients = await services.httpService.getClients();
            props.ClientStore.clients = clients
        }
        getCurrentClients()
    }, [])

    return (
        <div>
            <ClientSearch />
            <ClientsTable clients={props.ClientStore.clients} />
        </div>
    );
}))

export default Clients;