import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delUser } from "../../redux/actions/authActions";

//actions
import { login } from "../../redux/actions/authActions";

const Login = (props) => {
  const [authInfo, setauthInfo] = useState({
    username: "",
    password: "",
  });

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(delUser());
  }, []);

  // submit login
  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = authInfo;
    if (!username && !password) {
      alert("fill all fields");
    } else {
      dispatch(login({ username, password, history: props.history }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mb-4">
      <form onSubmit={submitHandler}>
        <div className="mb-4 border-b-2 p-2">
          <input
            className="outline-none w-1/2"
            type="text"
            placeholder="username"
            value={authInfo.username}
            onChange={(e) =>
              setauthInfo({ ...authInfo, username: e.target.value })
            }
          />
        </div>
        <div className="mb-4 border-b-2 p-2">
          <input
            className="outline-none w-1/2"
            type="password"
            placeholder="password"
            value={authInfo.password}
            onChange={(e) =>
              setauthInfo({ ...authInfo, password: e.target.value })
            }
          />
        </div>
        <button className="bg-green-600 text-gray-100 py-1 px-2 rounded">
          login
        </button>
      </form>

      {auth.error && (
        <div className="bg-red-300 rounded mt-4">
          <h1 className="text-red-800 font-bold p-2">
            "wrong username/password"
          </h1>
        </div>
      )}
    </div>
  );
};

export default Login;
