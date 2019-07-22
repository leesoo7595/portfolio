import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, Button, Toolbar, Typography, AppBar} from "@material-ui/core/index";
import {Menu} from "../component/Drawer";
import {PostCard} from "../component/PostCard";

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

    useEffect(() => {
        const req = async () => {
            const result = await fetch('/api', {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            });
            const post = await result.json();
            setState({post});
        };
        req();
    }, []);

    console.log(state);
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.link} component={Link} to={'/list'}>
                    <Menu/>
                    <Typography variant="h6">
                        List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Button className={classes.btn} variant={'contained'} color={'primary'} component={Link}
                    to={'/post'}>post</Button>
            {state.post.map((e, i) => {
                return <PostCard
                    key={i}
                    title={e.title}
                    description={e.description}
                    createdAt={e.createdAt}
                    image={e.image}/>
            })}
        </div>
    );
};
