import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'
import Header from './Header';
import Landing from './Landing';
import registerServiceWorker from './registerServiceWorker';
import Post from './posts/Post'

const API = 'https://api.graphcms.com/simple/v1/cjh6g6zae17ym0110gflz68af';

const client = new ApolloClient({
 link: new HttpLink({ uri: API }),
 cache: new InMemoryCache()
});

ReactDOM.render(
 <ApolloProvider client={client}>
    <BrowserRouter>
      <main>
	  <Header />
	  <Switch>
	   <Route exact path="/" component={Landing} />
	   <Route path="/:id" component={Post} />
	  </Switch>
	 </main>
    </BrowserRouter>
 </ApolloProvider>,
document.getElementById('root'));
registerServiceWorker(); 