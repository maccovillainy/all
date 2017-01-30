import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
let app = document.querySelector('.app');

let tasks = ['task1', 'task2', 'task3'];

let Task = React.createClass({
  render:function(){
    return(
      <div>
        <h1>ToDd</h1>
          {this.props.data.map((item, i) =>(
            <p key={i} >
              <label htmlFor="">{item}<input type='checkbox'/></label>
            </p>
            ))
          
          }
      </div>
    );
  }
});
let App = React.createClass({
  getInitialState() {
    return{
      data: tasks
    }
  },
  addTask: function(e){
    console.log(ReactDOM.findDOMNode(this.refs.newTask).value)
  },
  render:function(){
    return(
      <div>
        <h1>ToDd</h1>
        <Task data={this.state.data} />
        <input type='text' ref='newTask'/>
        <button onClick={ this.addTask.bind(this) }>Add</button>
      </div>

    );
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
  ,app
);

