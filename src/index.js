import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

import { ApolloProvider } from 'react-apollo'
import client from './graphql'

const store = createStore(rootReducer)

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App status="" />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
