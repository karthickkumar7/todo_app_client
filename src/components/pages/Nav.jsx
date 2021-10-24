import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todos.todos);

  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className="bg-blue-800 text-gray-100 w-full h-10 flex items-center justify-between">
      <div>
        <h1 className="ml-2 font-bold cursor-pointer hover:text-gray-300">
          addNOTES
        </h1>
      </div>
      <div>
        <h1>
          {auth.user ? `logged in as ${auth.user}` : "login to see you'r notes"}
        </h1>
      </div>
      {auth.user && (
        <div className="flex items-center">
          <h1 className="w-10 flex">
            <span className="text-lg text-gray-100 font-bold rounded-full mr-2">
              {todos.length}
            </span>{" "}
            todos
          </h1>
        </div>
      )}
      <div className="flex">
        {history.location.pathname === "/login" && (
          <Link to="/register" className="cursor-pointer hover:text-gray-300">
            register
          </Link>
        )}

        {auth.user && (
          <h1
            className="cursor-pointer hover:text-gray-300"
            onClick={logoutHandler}
          >
            logout
          </h1>
        )}
        {history.location.pathname === "/register" && (
          <Link to="/login" className="cursor-pointer hover:text-gray-300">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
