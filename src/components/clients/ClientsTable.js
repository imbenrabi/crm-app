import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'country', headerName: 'Country', width: 130 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'firstContact', headerName: 'First Contact', type: 'date', width: 250 },
    { field: 'emailType', headerName: 'Email Type', width: 130 },
    { field: 'sold', headerName: 'Sold', width: 70 },
    { field: 'owner', headerName: 'Owner', width: 180 },
];

const ClientsTable = (props) => {
    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <DataGrid rows={props.clients} columns={columns} pageSize={50} checkboxSelection />
        </div>
    );
}

export default ClientsTable;