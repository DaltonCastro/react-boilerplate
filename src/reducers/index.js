import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import breeds from './breedsReducer';

const appReducer = combineReducers({
  form: formReducer,
  breeds,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
