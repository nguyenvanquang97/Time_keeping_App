import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import accountReducer from './accountReducer';
const allReducers = combineReducers({
    orderReducer,
    accountReducer
});
export default allReducers;
