const db = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Bob'
  },
  {
    id: 3,
    name: 'BILL'
  }
]

const user =  (state = db, action) => {
  switch (action.type){
    case 'SET':
      state = state.map(item =>{
        if (item.id == action.payload.id) item.name = action.payload.name
          return item
      })
    /*state = {
      ...state,
      data: state
    }*/
    break;
    case 'DEL':
      state = state.filter(item => item.id != action.payload)
    break;
      case 'AJAX':
      console.log('a')
      console.log(action.payload)
    break;
  }
  return state
}

export default user