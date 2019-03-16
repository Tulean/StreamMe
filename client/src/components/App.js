import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui container">
                <div>
                    <Router history={history}>
                        <div>
                            <Header/>
                            <Route path="/" exact component={StreamList}/>
                            <Route path="/streams/new" component={StreamCreate}/>
                            <Route path="/streams/edit/:id" component={StreamEdit}/>
                            <Route path="/streams/delete/:id" component={StreamDelete}/>
                            <Route path="/streams/show" component={StreamShow}/>
                        </div>
                    </Router>
                </div> 
            </div>
        );
    }
}
 
export default App;