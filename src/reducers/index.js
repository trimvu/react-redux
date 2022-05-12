
import {combineReducers} from 'redux';
import addReducer from './addReducer';
import moneyReducer from './moneyReducer'


const rootReducer = combineReducers({
    money: moneyReducer,
    add: addReducer
})


export default rootReducer