import React from 'react'
import ReactDOM from 'react-dom'

// Graph QL Imports
import { ApolloClient, HttpLink } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'

import App from './App'

//  Global State
import Context from './Context'

const cache = new InMemoryCache()
const link = new createHttpLink({
  uri: 'https://pixtagram-server.vercel.app/graphql',
})

const client = new ApolloClient({
  cache,
  link,
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
