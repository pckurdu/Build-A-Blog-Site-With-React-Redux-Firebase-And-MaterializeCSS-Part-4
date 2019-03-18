//Let's import the reducers to be merged
import authReducer from './authReducer';
import projectReducer from './projectReducer';

//Let us call the combiner module.
import {combineReducers} from 'redux';

//Let's do the merge using combineReducer.
const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer
});

export default rootReducer