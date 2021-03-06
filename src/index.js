import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const API = 'https://api.graphcms.com/simple/v1/cjh6g6zae17ym0110gflz68af';

const client = new ApolloClient({
 link: new HttpLink({ uri: API }),
 cache: new InMemoryCache()
});

ReactDOM.render(
 <ApolloProvider client={client}>
    <App />
 </ApolloProvider>,
document.getElementById('root'));
registerServiceWorker(); 