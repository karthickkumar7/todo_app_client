const initState = {
  todos: [],
  edit: {},
};

export const todos = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      // const newTodoState = [...state.todos,...action.payload]
      return {
        todos: [...state.todos, action.payload],
      };
    case "GET_TODOS":
      return {
        ...state,
        todos: (state.todos = action.payload),
      };
    case "DELETE_TODO":
      const newTodo = state.todos.filter((todo) => todo._id !== action.payload);
      return {
        ...state,
        todos: newTodo,
      };
    case "EDIT_TODO":
      return state;
    case "GET_TODO":
      return {
        ...state,
        edit: (state.edit = action.payload),
      };

    default:
      return state;
  }
};
