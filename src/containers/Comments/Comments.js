import React, {Component} from 'react';
import CommentForm from "../../components/CommentForm/CommentForm";
import {addComment, fetchComments} from "../../store/actions/commentsActions";

import './Comments.css';
import {connect} from "react-redux";

class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.news_id);
    }
    render() {
        if (this.props.commentsLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className="Comments">
                <h2>Comments ({this.props.comments.length}):</h2>
                {this.props.comments.map(item => (
                    <div key={item.id} className="Comment">
                        <p>Author: {item.author}</p>
                        <p>Message: {item.message}</p>
                    </div>
                ))}

                <CommentForm submit={this.props.addComment} news_id={this.props.news_id} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
    commentsLoading: state.comments.loading
});

const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id)),
    addComment: (data) => dispatch(addComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);