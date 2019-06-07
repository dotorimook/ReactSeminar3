import {observable, action} from 'mobx';

export default class Todo {
  @observable title;
  @observable done;

  constructor(title = '', done = false) {
    this.title = title;
    this.done = done;
  }

  @action
  toggleDone() {
    this.done = !this.done;
  }
}