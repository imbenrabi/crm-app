import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}));

function AddClientForm(props) {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="new-name-input" label="Name" />
                <br />
                <TextField id="new-country-input" label="Country" />
                <br />
                <TextField id="new-email-input" label="Email" />
                <br />
                <TextField id="new-owner-input" label="Owner" />
            </form>
            <div className={classes.root}>
                <Button variant="contained" color="primary">Add Client</Button>
            </div>
        </div>
    );
}

export default AddClientForm;