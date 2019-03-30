import React, { Component } from 'react';
import {Button, Container} from 'reactstrap';
import './App.css';
import NewsPage from "./containers/NewsPage/NewsPage";
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
      return (
      <div className="App">
          <Container>
              <header>
                  <h1>News Website</h1>
                  <Button color="info">Publish New Post</Button>
              </header>
              <Switch>
                  <Route path="/" exact component={NewsPage} />
                  <Route path="/news" exact component={NewsPage} />
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
