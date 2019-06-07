import React, {useState, useCallback} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Form = styled.form`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-top:1em;
  margin-bottom:1em;
`;

const StyledTextField = styled(TextField)`
  flex:1;
`;

const TodoInput = (props) => {
  const [item, setItem] = useState('');
  const onKeyPressed = useCallback(e => {
    if(e.which === 27) {
      setItem('');
    } else if (e.which === 13) {
      onSubmit(e);
    }
  },[item]);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    props.todoList.pushItem(item);
    setItem('');
  },[item]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <StyledTextField
          required
          id='todo'
          label='Todo'
          value={item}
          onChange={(e) => {setItem(e.target.value)}}
          onKeyDown={onKeyPressed}
        />
        <Button variant="contained" onClick={onSubmit}>
          Add
        </Button>
      </Form>
    </Container>
  )
};

export default inject('todoList')(observer(TodoInput));