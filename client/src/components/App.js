import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui container">
                <div>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route path="/" exact component={StreamList}/>
                            <Route path="/streams/new" component={StreamCreate}/>
                            <Route path="/streams/edit" component={StreamEdit}/>
                            <Route path="/streams/delete" component={StreamDelete}/>
                            <Route path="/streams/show" component={StreamShow}/>
                        </div>
                    </BrowserRouter>
                </div> 
            </div>
        );
    }
}
 
export default App;