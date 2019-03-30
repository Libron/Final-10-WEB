import React, {Component} from 'react';
import {fetchNews} from "../../store/actions/newsActions";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import NewsThumbnail from "../../components/NewsThumbnail/NewsThumbnail";

import './NewsPage.css';

class NewsPage extends Component {
    componentDidMount() {
        this.props.fetchNews();
    }

    render() {
        if (!this.props.news) {
            return <div>Loading...</div>
        }

        const news = this.props.news.map(item => (
            <li key={item.id}>
                <NewsThumbnail image={item.image} title={item.title}/>
                <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <p>{item.datetime}</p>
                    <Button
                        color="warning"
                        onClick={() => this.props.history.push('news/' + item.id)}
                    >
                        Read more
                    </Button>
                </div>

            </li>
        ));

        return (
            <div className="NewsPage">
                <h1>List:</h1>
                <ul>{news}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    news: state.news.news
});

const mapDispatchToProps = dispatch => ({
    fetchNews: () => dispatch(fetchNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);