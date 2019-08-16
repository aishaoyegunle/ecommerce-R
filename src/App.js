import React, {Component} from 'react';
import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              {/* <Route exact path="/men" component={men} />
              <Route exact path="/women" component={women} /> */}
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
