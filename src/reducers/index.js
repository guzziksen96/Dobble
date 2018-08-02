import { combineReducers } from 'redux';
import settingCurrCard from './settingCurrCardReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  settingCurrCard,
  routing: routerReducer
});

export default rootReducer;
