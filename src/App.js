import React, {Component} from 'react';
import logo from './logo.svg';
import {inject, observer} from 'mobx-react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import {TodoInput, TodoList} from 'components';
import Todo from 'models/Todo';

@inject('todoList')
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.props.todoList.list = [...Array(5)].map((el, idx) => new Todo(`할일 ${idx+1}`));
  }

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              Todo..
          </TypoGraphy>
          </Toolbar>
        </AppBar>
        <TodoInput />
        <TodoList/>
      </div>
    );
  }
}

export default App;
