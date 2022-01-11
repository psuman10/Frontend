import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usersReducer } from '../redux/reducers/usersReducer';
import { alertsReducer } from '../redux/reducers/alertsReducer';

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