import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const columns = [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'countryName', headerName: 'Country', width: 130 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'firstContact', headerName: 'First Contact', type: 'date', width: 250 },
    { field: 'emailType', headerName: 'Email Type', width: 130 },
    { field: 'sold', headerName: 'Sold', width: 70 },
    { field: 'ownerName', headerName: 'Owner', width: 180 },
];

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}));

const ClientsTable = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [modalData, setModalData] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [country, setCountry] = React.useState('');

    const handleRowClick = (row) => {
        setModalData(row.data)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const handleUpdateClient = () => {
        console.log(name, country);
        setOpen(false);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Edit Client</h2>
            <p id="simple-modal-description">
                {modalData.name}
            </p>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="name" label="Name" value={name} onChange={handleNameChange} />
                <TextField id="country" label="Country" value={country} onChange={handleCountryChange} />
            </form>
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={handleUpdateClient}>Update</Button>
            </div>
        </div>
    );

    return (
        <div style={{ height: '82vh', width: '100%' }}>
            <DataGrid rows={props.clients} columns={columns} pageSize={50} checkboxSelection={false} onRowClick={handleRowClick} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ClientsTable;