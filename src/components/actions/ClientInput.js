import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ClientInput(props) {
    const classes = useStyles();
    const [name, setName] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const populateOptions = () => {
        return props.clients.map(c => <option value={`${c.name}`}></option>)
    }


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="new-name-input" inputProps={{ list: 'clients' }} label="Client Name" value={name} onChange={handleNameChange} />
            </form>
            <datalist id='clients'>
                {populateOptions()}
            </datalist>
        </div>
    );
}

export default ClientInput;