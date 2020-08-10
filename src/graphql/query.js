import gql from 'graphql-tag'


const GET_ALL_TODO = gql`
    query getAllTodos($status: String) {
        todos (status: $status) {
            id,
            text,
            completed
        }
    }
`

const UPDATE_TODO = gql`
    mutation updateTodo($id: Int!) {
        updateTodo(id: $id) {
        ... todoFields
        }
    }
    
    fragment todoFields on Todo {
        id,
        text,
        completed
    }
`
export { GET_ALL_TODO, UPDATE_TODO }
