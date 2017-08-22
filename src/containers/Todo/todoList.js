import React, { Component } from 'react';
import Button from '../../components/uielements/button';
import Checkbox from '../../components/uielements/checkbox';
import Radio from '../../components/uielements/radio';
import { timeDifference } from '../../helpers/utility';
import {
  notification,
  ColorChoser,
  EditableComponent,
} from '../../components/';

function filterTodos(todos, search) {
  const selectedTodos = search === 'All'
    ? todos
    : todos.filter(todo => todo.completed === (search === 'Completed'));
  let completed = 0;
  selectedTodos.forEach(todo => {
    if (todo.completed) {
      completed += 1;
    }
  });
  return { selectedTodos, completed };
}
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.singleTodo = this.singleTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: 'All',
    };
  }
  singleTodo(todo) {
    const { deleteTodo, colors } = this.props;
    const onDelete = () => deleteTodo(todo.id);
    const updateTodo = (key, value) => {
      todo[key] = value;
      this.props.edittodo(todo);
    };
    return (
      <div className="isoTodoList" key={todo.id}>
        <ColorChoser
          colors={colors}
          changeColor={value => updateTodo('color', value)}
          seectedColor={todo.color}
        />
        <Checkbox
          className="isoTodoCheck"
          checked={todo.completed}
          onChange={event => updateTodo('completed', !todo.completed)}
        />
        <div className="isoTodoContentWrapper">
          <span className="isoTodoDate">{timeDifference(todo.createTime)}</span>
          <EditableComponent
            value={todo.todo}
            itemKey="todo"
            onChange={updateTodo}
          />
        </div>
        <Button
          className="isoTodoDelete"
          icon="close"
          type="button"
          onClick={onDelete}
        />
      </div>
    );
  }
  onChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const { search } = this.state;
    const { selectedTodos, completed } = filterTodos(this.props.todos, search);
    return (
      <div className="isoTodoContent">
        <div className="isoTodoStatusTab">
          <Radio.Group
            value={this.state.search}
            onChange={this.onChange}
            className="isoTodoStatus"
          >
            <Radio.Button value="All">All</Radio.Button>
            <Radio.Button value="Uncompleted">Uncompleted</Radio.Button>
            <Radio.Button value="Completed">Completed</Radio.Button>
          </Radio.Group>
        </div>

        <div className="isoTodoListWrapper">
          {selectedTodos.length > 0
            ? selectedTodos.map(note => this.singleTodo(note))
            : <h3 className="isoNoTodoFound">No todo found</h3>}
        </div>

        <div className="isoTodoFooter">
          <Checkbox
            className="isoTodoCheckAll"
            checked={completed === selectedTodos.length}
            disabled={completed === selectedTodos.length}
            onChange={event => {
              notification('success', 'All Todos are Completed!!!', '');
              this.props.allCompleted();
            }}
          >
            Mark all as completed
          </Checkbox>

          {selectedTodos.length > 0 && completed === selectedTodos.length
            ? <Button
                type="button"
                className="isoDeleteAll"
                onClick={event => {
                  notification(
                    'success',
                    'All Completed Todos are Deleted',
                    '',
                  );
                  this.props.deleteCompleted();
                }}
              >
                {`Delete Completed (${completed})`}
              </Button>
            : ''}
        </div>
      </div>
    );
  }
}
