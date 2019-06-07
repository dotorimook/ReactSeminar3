import Todo from 'models/Todo';

const ADD_ITEM = 'ADD_ITEM';

const addItem = (title) => ({
  type: ADD_ITEM,
  param: title
});

const actionCreator = {
  addItem
};

const initialState = {
  todoList: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todoList: [...state.todoList, new Todo(action.param)]
      };
    default:
      return {...state};
  }
}

export {
  actionCreator
};

export default reducer;