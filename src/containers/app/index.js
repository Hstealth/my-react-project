import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../home'
import Discover from '../discover'
import User from '../user'


const App = () => (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/user" component={User} />
            </div>
        </BrowserRouter>
);

export default App