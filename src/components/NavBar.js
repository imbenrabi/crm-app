import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function NavBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('clients');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Link style={{ textDecoration: 'none', color: 'black' }} value="clients" to='/clients'>
                    <Tab label="Clients" value="clients" onChange={handleChange}></Tab>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} value="actions" to='/actions'>
                    <Tab label="Actions" value="actions" onChange={handleChange}></Tab>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} value="analytics" to='/analytics'>
                    <Tab label="Analytics" value="analytics" onChange={handleChange}></Tab>
                </Link>
            </Tabs>
        </Paper>
    );
}

export default NavBar;