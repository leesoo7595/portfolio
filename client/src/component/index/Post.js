import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {AppBar, Toolbar, Typography, TextField, FormControl, InputLabel, Button, Input, FormHelperText, OutlinedInput, Container} from "@material-ui/core";
import {Menu} from "../component/Drawer";

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    form: {
        width: '100%',
        padding: '15px 0'
    },
    container: {
        padding: '30px'
    }
});

export const Post = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        title: "",
        image: null,
        description: "",
        submit: false,
    });
    const changeInputForm = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const submitInputForm = e => {
        e.preventDefault();
        const {title, description} = state;
        console.log("title: ", title);
        console.log("description: ", description);
        fetch('/post', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {"Content-Type": "application/json"}
        })
            .then(res => res.json())
            .then(s => console.log(s))
            .then(() => {
                alert("데이터베이스 저장 완료");
                setState({submit: true});
            })
            .catch(e => console.log(e));
    };

    return (
        (state.submit)
        ? <Redirect to={'/list'} />
        : <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Menu />
                    <Typography variant="h6">
                        <Link className={classes.link} to={'/post'}>Post</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.container}>
                <FormControl className={classes.form}>
                    <InputLabel htmlFor="my-input">Title</InputLabel>
                    <OutlinedInput id="my-input" onChange={changeInputForm} name="title"/>
                </FormControl>

                <FormControl className={classes.form}>
                    <TextField onChange={changeInputForm}
                        variant="outlined"
                        name="description"
                        multiline={true}
                        rows={100}
                        rowsMax={25}
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={submitInputForm}>Submit</Button>
            </Container>
        </div>
    )
};