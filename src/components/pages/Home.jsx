import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/actions/todoActions";
import { setUser } from "../../redux/actions/authActions";

import Todo from "./Todo";
import TodoComponent from "./TodoComponent";

const Home = ({ history }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    dispatch(setUser());
    if (!localStorage.getItem("user")) {
      history.push("/login");
    }
  }, []);
  return (
    <div className="text-center bg-gray-300 h-screen">
      <Todo />
      {todos.todos.map((todo) => (
        <TodoComponent key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default Home;
