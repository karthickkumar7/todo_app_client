import axios from "axios";

const url = "http://localhost:8000/todos";

export const createTodo = (payload) => async (dispatch) => {
  const res = await axios.post(url + "/createTodo", payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  dispatch({
    type: "CREATE_TODO",
    payload: res.data.todo,
  });
};

export const deleteTodo = (payload) => async (dispatch) => {
  const { id } = payload;
  try {
    await axios.delete(url + `/deleteTodo/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  } catch (error) {
    console.log(error.response.msg);
  }
};

export const getTodos = () => async (dispatch) => {
  const res = await axios.get(url + `/userTodos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  dispatch({
    type: "GET_TODOS",
    payload: res.data.todos,
  });
};

export const editTodo = (payload) => async (dispatch) => {
  const { id, title, history } = payload;

  try {
    await axios.put(
      url + `/editTodo/${id}`,
      { title },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    dispatch({
      type: "EDIT_TODO",
    });

    history.push("/");
  } catch (error) {
    console.log(error.response.msg);
  }
};

export const getTodo = (payload) => async (dispatch) => {
  const { id, history } = payload;
  try {
    const res = await axios.get(`http://localhost:8000/todos/todo/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: "GET_TODO",
      payload: res.data.todo,
    });

    history.push("/edit/" + id);
  } catch (error) {}
};
