import { combineReducers } from 'redux';
import weatherReducer from './weather-reducer';

const reducers = combineReducers({
	currentWeather: weatherReducer
});

export default reducers;