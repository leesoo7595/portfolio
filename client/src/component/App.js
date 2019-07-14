import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Index} from './index/Index';

function App() {
    return (
        <BrowserRouter>
            <Route exact path={'/'} component={Index}/>
        </BrowserRouter>
    );
}

export default App;
