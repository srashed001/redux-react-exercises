import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function MemeForm() {
  const dispatch = useDispatch();
  const INITIAL_STATE = { top: "", bottom: "", imgUrl: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function createMeme(e) {
    e.preventDefault();
    dispatch({
      type: "CREATE_MEME",
      id: uuid(),
      ...formData
    });
  }

  return (
    <div>
      <form onSubmit={createMeme}>
        <label htmlFor="top">Top</label>
        <input
          type="text"
          placeholder="Provide the top portion of the meme"
          value={formData.top}
          id="top"
          name="top"
          onChange={handleChange}
        />
        <label htmlFor="bottom">Bottom</label>
        <input
          type="text"
          placeholder="Provide the bottom portion of the meme"
          value={formData.bottom}
          id="bottom"
          name="bottom"
          onChange={handleChange}
        />
        <label htmlFor="imgUrl">Image URL</label>
        <input
          type="text"
          placeholder="Provide the url for the background image"
          value={formData.imgUrl}
          id="imgUrl"
          name="imgUrl"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default MemeForm;
