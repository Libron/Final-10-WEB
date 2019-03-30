import React, {Component} from 'react';
import NewsForm from "../../components/NewsForm/NewsForm";
import {connect} from "react-redux";
import {addPost} from "../../store/actions/newsActions";

class AddNews extends Component {
    render() {
        return (
            <div>
                <h2>Add new Post</h2>
                <NewsForm submit={this.props.addPost} history={this.props.history}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addPost: (data, history) => dispatch(addPost(data, history))
});

export default connect(null, mapDispatchToProps)(AddNews);