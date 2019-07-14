import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Index} from './index/Index';
import {List} from './index/List';

function App() {
    return (
        <BrowserRouter>
            <Route exact path={'/'} component={Index}/>
            <Route path={'/list'} component={List}/>
        </BrowserRouter>
    );
}

export default App;
