import { createStore, applyMiddleware } from 'redux'
import getReducers from './reducers/index'
import thunk from 'redux-thunk'

const configStore=()=>{
  return createStore(getReducers(), applyMiddleware(thunk))
};

export default configStore();
