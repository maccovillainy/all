import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
let app = document.querySelector('.app');

let tasks = ['task1', 'task2', 'task3'];

let Task = React.createClass({
  displayName: 'Task',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'ToDd'
      ),
      this.props.data.map((item, i) => React.createElement(
        'p',
        { key: i },
        React.createElement(
          'label',
          { htmlFor: '' },
          item,
          React.createElement('input', { type: 'checkbox' })
        )
      ))
    );
  }
});
let App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      data: tasks
    };
  },
  addTask: function (e) {
    console.log(ReactDOM.findDOMNode(this.refs.newTask).value);
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'ToDd'
      ),
      React.createElement(Task, { data: this.state.data }),
      React.createElement('input', { type: 'text', ref: 'newTask' }),
      React.createElement(
        'button',
        { onClick: this.addTask.bind(this) },
        'Add'
      )
    );
  }
});

ReactDOM.render(React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(Route, { path: '/', component: App })
), app);