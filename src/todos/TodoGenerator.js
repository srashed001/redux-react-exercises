import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function TodoGenerator(){
    return (
        <div> 
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default TodoGenerator