import { useState } from "react";

import { createTodo } from "../../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(createTodo({ title }));
    setTitle("");
  };

  return (
    <div className="p-2 m-2 flex justify-center">
      <div className="">
        <input
          type="text"
          placeholder="add todo.."
          className="outline-none mr-2 bg-gray-300 w-30 text-gray-800"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
        />
        <button
          className="bg-green-100 px-2 py-1 text-gray-800 rounded hover:opacity-80"
          onClick={addHandler}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Todo;
