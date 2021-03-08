import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import UpdateItem from './components/UpdateItem/UpdateItem'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/items/:id/update" component={UpdateItem}/>
      </Switch>
    </Router>
  )
}

export default App
