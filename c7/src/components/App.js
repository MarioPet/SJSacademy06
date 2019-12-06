import React from 'react';
import { Header } from "./Header";
import { Home } from "./Home";
import { Info } from "./Info";
import { Contact } from "./Contact";

import { Route, Switch } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}
