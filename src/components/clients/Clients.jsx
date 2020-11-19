import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import ClientSearch from './ClientSearch';
import ClientsTable from './ClientsTable';

const Clients = inject('ClientStore')(observer((props) => {
    const ClientStore = props.ClientStore;
    const [filter, setFilter] = React.useState(undefined);
    const [text, setText] = React.useState(undefined);

    useEffect(() => {
        (async () => {
            await ClientStore.loadClients(filter, text);
        })();
    }, [ClientStore, text]);

    const search = async (text, filter) => {
        setFilter(filter);
        setText(text);
    }

    return (
        <div>
            <ClientSearch search={search} />
            <ClientsTable clients={ClientStore.clients} updateClient={ClientStore.editClient} />
        </div>
    );
}))

export default Clients;