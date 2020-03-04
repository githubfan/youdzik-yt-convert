import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Media from './pages/Media';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/scroll.css';

export default function App () {

  return <>

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/media" component={Media} />
      </Switch>
    </Router>

    <Footer />
  </>;
}
