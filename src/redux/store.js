import { createStore, applyMiddleware,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';
import {usersReducer} from './reducers/usersReducer'



const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
    alertsReducer,
    usersReducer,
    
 })



const store = createStore(
    rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store