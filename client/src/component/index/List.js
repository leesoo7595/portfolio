import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, Button, Toolbar, Typography, AppBar} from "@material-ui/core/index";
import {Menu} from "../component/Drawer";

const useStyles = makeStyles({
    btn: {
        position: 'absolute',
        right: 0,
        margin: '10px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
});

export const List = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Menu />
                    <Typography variant="h6">
                        <Link className={classes.link} to={'/'}>List</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            목록 보기
            <Button className={classes.btn} variant={'contained'} color={'primary'} component={Link} to={'/post'}>post</Button>
        </div>
    )
};