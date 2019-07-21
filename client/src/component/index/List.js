import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, Button, Toolbar, Typography, AppBar} from "@material-ui/core/index";
import {Menu} from "../component/Drawer";
import {MediaCard} from "../component/PostCard";

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
    const [state, setState] = useState({
        post: []
    });

    useEffect( async () => {
        const result = await fetch('/list', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        const post = await result.json();
        setState({post});
        console.log(post)
    }, []);

    console.log(state);
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Menu/>
                    <Typography variant="h6">
                        <Link className={classes.link} to={'/'}>List</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Button className={classes.btn} variant={'contained'} color={'primary'} component={Link}
                    to={'/post'}>post</Button>
            {state.post.map(e => {
                return <MediaCard
                    title={e.title}
                    description={e.description}
                    createdAt={e.createdAt}
                    image={e.image}/>
            })}
        </div>
    );
};
