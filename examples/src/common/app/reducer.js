import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

/* Comp Reducers */
import reduxAccordion from '../redux-accordion/reducer';

const rootReducer = combineReducers({
    routing,
    reduxAccordion
});

export default rootReducer;
