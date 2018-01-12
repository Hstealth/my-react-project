import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../home'
import Discover from '../discover'
import User from '../user'
import Book from '../book'
import Details from '../details'
import Result from '../result'

const App = () => (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/user" component={User} />
                <Route exact path="/book" component={Book} />
                <Route exact path="/details" component={Details} />
                <Route exact path="/result" component={Result} />
            </div>
        </BrowserRouter>
);

export default App