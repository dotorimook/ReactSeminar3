export default class Todo {
  constructor(title = '', done = false) {
    this.title = title;
    this.done = done;
  }

  toggleDone = () => {
    this.done = !this.done;
  }
}