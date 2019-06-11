import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Contact from './pages/contact/contact';
import Navbar from './components/navbar/navbar';
import NotFound from './pages/notFound/notFound';
import News from './pages/news/news';
import Colors from './pages/colors/colors';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/contact" component={Contact} />
        <Route path="/newsy/:page?" component={News} />
        <Route path="/colors/:r/:g/:b" component={Colors} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
