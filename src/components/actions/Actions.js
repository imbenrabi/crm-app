import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { services } from '../../services';
import UpdateForm from './UpdateForm';
import AddClientForm from './AddClientForm';

const getOwners = (clients) => {
    const owners = {}
    clients.forEach(c => !owners[c.owner] ? owners[c.owner] = true : null);
    return Object.keys(owners)
}

const Actions = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;
    useEffect(() => {
        (async () => {
            console.log('actions useEffect');
            await ClientStore.getClients();
        })();
    }, [])
    return (
        <div>
            <h3>UPDATE</h3>
            <UpdateForm owners={getOwners(ClientStore.clients)} clients={ClientStore.clients} />
            <hr />
            <h3>ADD CLIENT</h3>
            <AddClientForm />
        </div>
    );
}))

export default Actions;