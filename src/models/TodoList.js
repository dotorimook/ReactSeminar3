import {observable, action} from 'mobx';
import Todo from './Todo';

export default class TodoList {
  @observable list;

  constructor() {
    this.list = [];
  }

  @action
  pushItem(title) {
    this.list.push(new Todo(title));
  }
}