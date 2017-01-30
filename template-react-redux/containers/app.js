 import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gallary from '../components/gallary'
class App extends Component{
  render(){
    return <div>
      <Gallary 
        data={this.props.data}/>
    </div>
  }
}

const get = (state) => {
  return{
    data: state.user
  }
}

/*const set = (dispatch) => {
  return {
    setName: (name, id) => {
      dispatch({
        type: 'SET',
        payload: {
          name,
          id
        }
      })
    },
    del: (id) => {
      dispatch({
        type: 'DEL',
        payload:id
      })
    }
  }
}*/

export default connect(get)(App)
