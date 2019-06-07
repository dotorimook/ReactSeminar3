import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import TodoListItem from './TodoListItem';

const TodoList = (props) => (
  <List>
    {
      props.todoList.map(el => <TodoListItem item={el} />)
    }
  </List>
);


const mapStateToProps = (state) =>({
  todoList: state.todoList
});
const mapDispatchToProps = (disaptch) => ({});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);