import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Query } from 'react-apollo'
import { GET_ALL_TODO } from '../graphql/query'

const App = ({status}) => (
  <div>
    <AddTodo />
    <Query query={GET_ALL_TODO} variables={{ status }}>
      {({ data, loading }) => {
      if (loading || !data.todos) {
          return <div>Loading ...</div>
      }
      
      const {todos} = data

      return (
          <VisibleTodoList todos={todos} status={status} />
      )
      }}
    </Query>
    <Footer />
  </div>
)

export default App