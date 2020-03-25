import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { About } from './About';
import { Contact } from './Contact';
import Likes from './Likes';
import { NoMatch } from './NoMatch';
import Gif from './Gif';
import { Layout } from '../bootstrap-components/Layout';
import { NavigationBar } from '../bootstrap-components/Navigation';
import { Jumbotron } from '../bootstrap-components/Jumbotron';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/likes" component={props => <Likes {...props} />} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/gif/:id" component={props => <Gif {...props} />} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

// re-base is to use firebase in react. for two way data binding when you implement firebase
