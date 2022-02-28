import { useDispatch } from "react-redux";
import {useState} from 'react'
import { v4 as uuid } from "uuid";


function TodoForm(){
    const dispatch = useDispatch();
    const INITIAL_STATE = {title: '', description: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    
      function createTodo(e) {
        e.preventDefault();
        dispatch({
          type: "CREATE_TODO",
          id: uuid(),
          ...formData
        });
      }
    
      return (
        <div>
          <form onSubmit={createTodo}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Provide your todo title"
              value={formData.title}
              id="title"
              name="title"
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Provide brief todo description"
              value={formData.description}
              id="description"
              name="description"
              onChange={handleChange}
            />
            <button>submit</button>
          </form>
        </div>
      );
}

export default TodoForm