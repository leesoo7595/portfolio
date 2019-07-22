import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';

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
                <Toolbar variant="dense" className={classes.link} component={Link} to={'/'}>
                    <Menu />
                    <Typography variant="h6">
                        Blog
                    </Typography>
                </Toolbar>
            </AppBar>
            이곳은 main 입니다.
        </div>
    )
};