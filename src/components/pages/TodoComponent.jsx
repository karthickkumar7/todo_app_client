import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions/todoActions";
import { getTodo } from "../../redux/actions/todoActions";
import { useHistory } from "react-router-dom";

const TodoComponent = ({ todo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const editHandler = (id, history) => {
    dispatch(getTodo({ id, history }));
  };

  return (
    <div className="flex justify-between items-center text-lg bg-blue-300 p-1 m-1 rounded w-1/2 mx-auto">
      <h1 className="">{todo.title}</h1>
      <div className="flex">
        <h1
          className="text-xl mr-2 cursor-pointer hover:text-red-900 text-red-700"
          onClick={() => deleteHandler(todo._id)}
        >
          X
        </h1>
        <h1
          className="cursor-pointer hover:opacity-80"
          onClick={() => editHandler(todo._id, history)}
        >
          edit
        </h1>
      </div>
    </div>
  );
};

export default TodoComponent;
