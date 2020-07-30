import React from 'react'
import ReactDOM from 'react-dom'

// Graph QL Imports
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import { setContext } from '@apollo/client/link/context'
import { onError } from 'apollo-link-error'

import App from './App'

//  Global State
import Context from './Context'

/* ---------------------- Creating the client of Apollo --------------------- */

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
      window.sessionStorage.removeItem('token')
      window.location.href = '/user'
    }
  }
)

const httpLink = new createHttpLink({
  uri: 'https://pixtagram-server.vercel.app/graphql',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
})

/* ---------------------------- React entry point ---------------------------- */

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
