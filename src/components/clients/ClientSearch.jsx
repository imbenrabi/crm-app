import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ClientSearch(props) {
    const classes = useStyles();
    const [filter, setFilter] = React.useState('');
    const [text, setText] = React.useState('');

    const handleSelectChange = (event) => {
        setFilter(event.target.value);
    };
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-basic"
                label="Search"
                value={text}
                onChange={handleTextChange} />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'country'}>Country</MenuItem>
                    <MenuItem value={'owner'}>Owner</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
}

export default ClientSearch;