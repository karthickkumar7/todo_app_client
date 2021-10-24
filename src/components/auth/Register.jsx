import { useState } from "react";
import { useDispatch } from "react-redux";

//actions
import { register } from "../../redux/actions/authActions";

const Register = ({ history }) => {
  const [authInfo, setauthInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = authInfo;
    if (
      username &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      dispatch(
        register({
          username,
          password,
          history,
        })
      );
    } else {
      alert("invalid credentails");
    }
  };

  return (
    <div className="w-1/2 mx-auto p-5">
      <form onSubmit={submitHandler} className="">
        <div className="">
          <input
            className="outline-none p-2 w-2/3 mb-2"
            type="text"
            placeholder="username"
            value={authInfo.username}
            onChange={(e) =>
              setauthInfo({ ...authInfo, username: e.target.value })
            }
          />
        </div>
        <div>
          <input
            className="outline-none p-2 w-2/3 mb-2"
            type="password"
            placeholder="password"
            value={authInfo.password}
            onChange={(e) =>
              setauthInfo({ ...authInfo, password: e.target.value })
            }
          />
        </div>
        <div>
          <input
            className="outline-none p-2 w-2/3 mb-2"
            type="password"
            placeholder="confirm password"
            value={authInfo.confirmPassword}
            onChange={(e) =>
              setauthInfo({ ...authInfo, confirmPassword: e.target.value })
            }
          />
        </div>
        <button className="bg-green-600 text-gray-100 py-1 px-2 rounded text-center">
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
