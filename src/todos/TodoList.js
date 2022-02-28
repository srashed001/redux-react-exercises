import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList(){

    const todos = useSelector(store => store.todos)

    return (
        <div>
            <h5>Todos</h5>
            <ol>
                {todos.map(todo => <li><Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description}/></li>)}
            </ol>
        </div>
    )
}

export default TodoList