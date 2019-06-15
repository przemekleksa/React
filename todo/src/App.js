import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ToDo from './pages/todo/todo';
import Done from './pages/done/done';
import './style/index.scss'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ToDo} />
          <Route path="/done" component={Done} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
