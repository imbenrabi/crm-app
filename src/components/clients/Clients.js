import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { services } from '../../services'
import ClientSearch from './ClientSearch';
import ClientsTable from './ClientsTable';



const Clients = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;
    useEffect(() => {
        const getCurrentClients = async () => {
            const clients = await services.httpService.getClients();
            ClientStore.clients = clients
        }
        getCurrentClients()
    }, [])

    return (
        <div>
            <ClientSearch />
            <ClientsTable clients={ClientStore.clients} updateClient={ClientStore.editClient} openModal />
        </div>
    );
}))

export default Clients;