import { useDispatch } from "react-redux";

function Todo({ id, title, description }) {
  const dispatch = useDispatch();
  function remove(){
      dispatch({type: 'DELETE_TODO', id})
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <button className="btn btn-danger" onClick={remove}>Remove</button>
      </div>
    </div>
  );
}

export default Todo
