import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const API_BASE_URL = 'http://localhost:4000/graphql'

const httpLink = new HttpLink({
  uri: API_BASE_URL
})

const client = new ApolloClient({
  link: httpLink,
  cache,
})

export default client

