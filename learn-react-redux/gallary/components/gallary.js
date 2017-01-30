import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setName, del, getAjax } from '../actions/userAction'





/*const get = (state) => {
  return{
    data: state.user
  }
}

const set = (dispatch) => {
  return {
    setName: (name, id) => {
      dispatch(setName(name, id))
    },
    del: (id) => {
      dispatch(del(id))
    }
  }
}
*/



@connect((state, props) => {
  return {
    data: state.user
  }
}, (dispatch, props) => {
  return {
    setName: (name, id) => {
      dispatch(setName(name, id))
    },
    del: (id) => {
      dispatch(del(id))
    },
    getAjax: (a) => {
      dispatch(getAjax(a))
    }
  }
})

export default class Gallary extends Component{
  render(){
    return(
      <div>
        {this.props.data.map(item => (
          <div 
          style={{
            border: '1px solid tomato',
            padding: 20, 
            margin: 20, 
            display: 'inline-block'
          }} 
          key={item.id}>
            <h2>name: {item.name} </h2>
            <input 
              data-id={item.id} 
              onChange={e =>{ 
                this.props.setName(e.target.value, e.target.getAttribute('data-id'))}
              } 
              value={item.name} />
              <button
                onClick={(e)=> this.props.del(item.id)}>Delete</button>
              <button onClick={() => this.props.getAjax('ssss')}>ajax</button>
          </div>
        ))}
      </div>
    )
  }
}

