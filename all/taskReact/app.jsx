import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import { createAction, handleAction } from 'redux-actions';
import Portal  from './portal.jsx';

let store;

let pendingAction = createAction('LOAD_USER_PENDING');
let resolvedAction = createAction('LOAD_USER_RESOLVED');
let rejectedAction = createAction('LOAD_USER_REJECTED');

let loadUserAction = createAction('LOAD_USER', (payload) => {
	store.dispatch(pendingAction(payload));

	return new Promise((res) => {
		setTimeout(() => {
			res(payload)
		}, 1000);
	}).then((data) => {
		store.dispatch(resolvedAction(data));
	}).catch((err) => {
		store.dispatch(rejectedAction(err));
	})
})

const reducer = handleAction(resolvedAction, {
  next: (state, action) => { 
  	return { user: action.payload } 
  }
},{ user: {} });


store = createStore(reducer);
store.dispatch(loadUserAction({ userId: 1 }));

setTimeout(() => {
	console.log(store.getState())
}, 2000)


class App extends Component{
	render(){
		return(
			<div>
				<h1>Hello</h1>
				<Portal>
          <p>This react component is appended to the document body.</p>     
        </Portal>
			</div>
		)
	}
}

render(<App/>, root);