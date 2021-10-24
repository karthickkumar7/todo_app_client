import axios from "axios";
import jwtDecode from "jwt-decode";

//register

export const register = (payload) => async (dispatch) => {
  const { username, password, history } = payload;
  try {
    const res = await axios.post("http://localhost:8000/users/register", {
      username,
      password,
    });

    if (res.data.sucess) {
      history.push("/login");
      dispatch({
        type: "REGISTER",
      });
    }
  } catch (error) {
    console.log(error.response.msg);
  }
};

export const login = (payload) => async (dispatch) => {
  const { username, password, history } = payload;
  try {
    const res = await axios.post("http://localhost:8000/users/login", {
      username,
      password,
    });

    if (res.data.sucess) {
      localStorage.setItem("token", res.data.token);
      const user = jwtDecode(res.data.token);
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/");
      dispatch({
        type: "LOGIN",
        payload: user.username,
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      dispatch({
        type: "LOGIN_ERR",
        payload: error.response.data.msg,
      });
    }
  }
};

export const setUser = () => {
  return {
    type: "SET_USER",
    payload: JSON.parse(localStorage.getItem("user")).username,
  };
};

export const delUser = () => {
  return {
    type: "DEL_USER",
  };
};
