import {createStore} from 'redux'

let state = {
  num: 0
}

const ADD_NUM = 'ADD_NUM'

function AddActionCreator(data) {
  return {
    type: ADD_NUM,
    data
  }
}

function reducer(preState=state, action) {
  if(action.type == ADD_NUM) {
    return Object.assign({}, preState, {
      num: preState.num + 1
    })
  } else {
    return preState
  }
}

const store = createStore(reducer)

export {
  store,
  AddActionCreator
}