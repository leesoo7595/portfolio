import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, IconButton, makeStyles} from '@material-ui/core';

import {Menu} from '../component/Drawer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
}));

export const Index = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Menu />
                    <Typography variant="h6">
                        <Link className={classes.link} to={'/'}>Blog</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};