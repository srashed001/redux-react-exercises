import { useDispatch } from "react-redux";

function Meme({ id, top, bottom, imgUrl }) {
  const dispatch = useDispatch();

  function remove(e) {
    dispatch({ type: "DELETE_MEME", id: id });
  }
  return (
    <div className="m-2">
      <div className="card bg-dark text-white text-center" style={{ width: "200px" }}>
        <img src={imgUrl} class="card-img" alt="meme" />
        <div className="card-img-overlay d-flex flex-column justify-content-between ">
          <h5 className="card-title ">{top}</h5>
          <h5 className="card-title ">{bottom}</h5>
        </div>
      </div>
      <button className="btn btn-danger" onClick={remove}>
            Remove
          </button>
    </div>
  );
}

export default Meme;
