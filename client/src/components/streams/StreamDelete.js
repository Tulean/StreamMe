import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteStream, fetchStream} from '../actions';

class StreamDelete extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    };

    deleteStream = () => {
        this.props.deleteStream(this.props.match.params.id)
    };

    renderActions(){
        return(
            <React.Fragment>
                <button onClick={this.deleteStream} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderConcent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete this stream with title ${this.props.stream.title} ?`
    }

    render() { 
        
        return (
            <Modal 
              title="Delete Stream" 
              content={this.renderConcent()}
              actions={this.renderActions()} 
              onDismiss={() => history.push('/')}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    });
}
 
export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete);