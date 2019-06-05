import React from 'react';
import List from '@material-ui/core/List';
import TodoListItem from './TodoListItem';

const TodoList = (props) => (
  <List>
    {
      props.list.map(el => <TodoListItem item={el} />)
    }
  </List>
);

export default TodoList;