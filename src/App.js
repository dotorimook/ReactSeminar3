import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import {TodoInput, TodoList} from 'components';
import Todo from 'models/Todo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...Array(5)].map((el, idx) => new Todo(`할일 ${idx+1}`))
    }
  }

  onAddItem = (title) => {
    const {data} = this.state;
    data.push(new Todo(title));
    this.setState({
      data
    });
  }  

  render() {
    const {data} = this.state;
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
        <TodoInput onSubmit = {this.onAddItem} />
        <TodoList list={data}/>
      </div>
    );
  }
}
