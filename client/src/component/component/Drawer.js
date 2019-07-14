import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
    makeStyles,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// import {} from '@material-ui/icons';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuBtn: {
        color: 'white',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const Menu = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <ListItem button key={'blog'} component={Link} to={'/'}>
                <ListItemText primary={'Blog'}/>
            </ListItem>
            <Divider />
            <List>
                {['list', 'post'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={`/${text}`}>
                        {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Profile', 'Portfolio'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={`/${text}`}>
                        {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}>
                <IconButton className={classes.menuBtn} edge="start" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            </Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    )
};