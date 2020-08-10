import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Query, Mutation } from 'react-apollo'
import { GET_ALL_TODO, UPDATE_TODO } from '../graphql/query'

const App = () => (
  <div>
    <AddTodo />
    <Query query={GET_ALL_TODO} variables={{ status="" }}>
        {({ data: { todos }, loading }) => {
        if (loading || !todos) {
            return <div>Loading ...</div>
        }

        return (
            <VisibleTodoList todos={todos} />
        )
        }}
    </Query>
    <Footer />
  </div>
)

export default App