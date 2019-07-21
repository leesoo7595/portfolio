import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Index} from './index/Index';
import {List} from './index/List';
import {Post} from './index/Post';

function App() {

    return (
        <BrowserRouter>
            <Route exact path={'/'} component={Index}/>
            <Route path={'/list'} component={List} />
            <Route path={'/post'} component={Post}/>
        </BrowserRouter>
    );
}

export default App;
