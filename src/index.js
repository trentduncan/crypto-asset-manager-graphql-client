import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
import ApolloClient from 'apollo-boost';

// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import registerServiceWorker from './registerServiceWorker';

// const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
  });
  

ReactDOM.render(
<ApolloProvider client={client}>
    <App/>
</ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
