import React, {Component} from 'react';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const TodoText = styled.span`
  text-decoration:${props => props.done? 'line-through':'none'};
`;

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.item};
  }

  onItemClick = () => {
    this.setState({
      done: !this.state.done
    });
    this.props.item.toggleDone();
  }

  render () {
    const {done, title} = this.state;
    return(
      <ListItem button onClick={this.onItemClick}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={done}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText>
          <TodoText done={done}>
            {title}
          </TodoText>
        </ListItemText>
      </ListItem>
    );
  }
}