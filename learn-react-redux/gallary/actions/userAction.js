import store from '.././storage'
let $ = require('jquery');

export function setName (name, id) {
      return store.dispatch({
        type: 'SET',
        payload: {
          name,
          id
        }
      })
    }

exports.del =  function (id) {
  return {
        type: 'DEL',
        payload:id
      }
}

export function getAjax(){
  return dispatch => {
    $.ajax({url: 'http://localhost:3000/get'}).then(res => {
      dispatch({
        type: 'AJAX',
        payload: res
      })
    }).catch(err => console.log(err))
  }
}


