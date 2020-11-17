import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import ClientSearch from './ClientSearch';
import ClientsTable from './ClientsTable';

const Clients = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;
    useEffect(() => {
        (async () => {
            await ClientStore.getClients();
        })();
    }, [ClientStore])

    return (
        <div>
            <ClientSearch />
            <ClientsTable clients={ClientStore.clients} updateClient={ClientStore.editClient} />
        </div>
    );
}))

export default Clients;