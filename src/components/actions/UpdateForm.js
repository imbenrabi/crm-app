import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ClientInput from './ClientInput';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

function UpdateForm(props) {
    const classes = useStyles();
    const [owner, setOwner] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleOwnerChange = (event) => {
        setOwner(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const renderMenuItems = () => {
        return props.owners.map(owner => <MenuItem value={owner}>{`${owner}`}</MenuItem>)
    }
    return (
        <div>
            <ClientInput clients={props.clients} />
            <br />
            <FormControl className={classes.formControl} >
                <div style={{ display: 'inline-flex' }}>
                    <div>
                        <InputLabel id="demo-simple-select-label">Owner</InputLabel>
                        <Select
                            style={{ alignSelf: 'center', minWidth: 150 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={owner}
                            onChange={handleOwnerChange}
                        >
                            {renderMenuItems()}
                        </Select>

                    </div>
                    <div className={classes.root}>
                        <Button color="secondary">TRANSFER</Button>
                    </div>
                </div>
            </FormControl>
            <br />
            <FormControl className={classes.formControl} >
                <div style={{ display: 'inline-flex' }}>
                    <div>
                        <InputLabel id="demo-simple-select-label">Send Email Type</InputLabel>
                        <Select
                            style={{ alignSelf: 'center', minWidth: 150 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={email}
                            onChange={handleEmailChange}
                        >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={'B'}>B</MenuItem>
                            <MenuItem value={'C'}>C</MenuItem>
                            <MenuItem value={'D'}>D</MenuItem>
                        </Select>

                    </div>
                    <div className={classes.root}>
                        <Button color="secondary">SEND</Button>
                    </div>
                </div>
            </FormControl>
            <div className={classes.root}>
                <Button variant="contained" color="secondary">DECLARE SALE !</Button>
            </div>
        </div>
    );
}

export default UpdateForm;