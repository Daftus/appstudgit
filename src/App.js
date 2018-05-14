import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Post from './Post';
import './App.css';

const App = () => (
<BrowserRouter>
 <main>
  <Header />
  <Switch>
   <Route exact path="/" component={Landing} />
   <Route path="/:id" component={Post} />
  </Switch>
 </main>
</BrowserRouter>
);
export default App;