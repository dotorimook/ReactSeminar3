import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import {TodoInput, TodoList} from 'components';
import {connect} from 'react-redux';
import {actionCreator} from 'reducer';

class App extends Component {
  constructor(props) {
    super(props);
    [...Array(5)].forEach((el, idx) => props.addItem(`할일 ${idx+1}`))
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
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = (props) => ({
  todoList: props.list,
});

const mapDispatchToProps =(dispatch) => ({
  addItem: (title) => (dispatch(actionCreator.addItem(title)))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);