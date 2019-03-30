import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './App.css';
import NewsPage from "./containers/NewsPage/NewsPage";
import {Route, Switch} from "react-router";
import NewsFullDetails from "./containers/NewsFullDetails/NewsFullDetails";
import AddNews from "./containers/AddNews/AddNews";
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  render() {
      return (
      <div className="App">
          <Container>
              <Toolbar/>
              <Switch>
                  <Route path="/" exact component={NewsPage} />
                  <Route path="/news" exact component={NewsPage} />
                  <Route path="/news/add" exact component={AddNews} />
                  <Route path="/news/:id" exact component={NewsFullDetails} />
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
