import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: 'HTML+CSS 공부하기', checked: false },
      { id: 1, text: 'JavaScript 공부하기', checked: false },
      { id: 2, text: 'React 공부하기', checked: false },
    ],

  }

  render() {
    const { input, todos} = this.state;
    const {

    } = this;

    return (
      <TodoListTemplate>

      </TodoListTemplate>
    );
  }
}

export default App;

