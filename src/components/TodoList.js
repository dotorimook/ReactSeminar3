import React, {Component} from 'react';
import List from '@material-ui/core/List';
import TodoListItem from './TodoListItem';
import {observer, inject} from 'mobx-react';

@inject('todoList')
@observer
class TodoList extends Component {
  render() {
    return (
      <List>
        {
          this.props.todoList.list.map(el => <TodoListItem item={el} />)
        }
      </List>
    );
  }
}

export default TodoList;