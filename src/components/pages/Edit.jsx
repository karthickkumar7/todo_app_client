import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editTodo } from "../../redux/actions/todoActions";

const Edit = () => {
  const [title, setTitle] = useState("");

  const todo = useSelector((state) => state.todos.edit);
  const dispatch = useDispatch();

  const editRef = useRef();
  const history = useHistory();

  useEffect(() => {
    setTitle(todo.title);
    editRef.current.focus();
  }, []);

  const submitHandler = (id, title, history) => {
    dispatch(editTodo({ id, title, history }));
  };

  return (
    <div className="w-1/2 h-1/2 rounded shadow-md flex flex-col mx-auto mt-10">
      <div className="py-2">
        <input
          ref={editRef}
          type="text"
          placeholder="edit todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <h1 className="py-2">created at {todo.createdAt}</h1>
      </div>
      <button
        className="text-blue-500 px-2 py-1 rounded"
        onClick={() => submitHandler(todo._id, title, history)}
      >
        edit
      </button>
    </div>
  );
};

export default Edit;
